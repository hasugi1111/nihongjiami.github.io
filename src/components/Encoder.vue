<template>
  <div>
    <h>输入要加密的文字：</h>
    <input
      type="textarea"
      v-model="input"/>
    <button
      @click="encoder">点我转换
    </button>
    <p>{{ output }}</p>
    <h>输入要解密的文字：</h>
    <input
      type="textarea"
      v-model="input_r"/>
    <button
      @click="decoder">点我转换
    </button>
    <p>{{ output_r }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Encoder',
    data: () => ({
       input:"",
       output:"",
       input_r:"",
       output_r:""
    }),
    methods:{
      encoder(){
        let str = this.input                    
        let len = str.length                    
        let res = '' 
        const charEncode =(c)=>{
          const dic={"0":"あ","1":"い","2":"う","3":"え","4":"お","5":"さ","6":"し","7":"す",
          "8":"せ","9":"そ","a":"ま","b":"み","c":"む","d":"め","e":"も","f":"な"}
          let l = c.length
          let r = ""
          for(let i =0;i<l;i++){
              r += dic[c[i]]
          }
          return r
        }
        for(let i=0; i<len;i++){
            let tmp = str[i].charCodeAt(0).toString(16).padStart(4, "0")
            res += charEncode(tmp)
        }
        this.output = res
      },
      decoder(){
        const charDecode =(c)=>{
        const dic={"あ":"0","い":"1","う":"2","え":"3","お":"4","さ":"5","し":"6","す":"7",
          "せ":"8","そ":"9","ま":"a","み":"b","む":"c","め":"d","も":"e","な":"f"}
          let l = c.length
          let r = ""
          for(let i =0;i<l;i++){
              r += dic[c[i]] || ""
          }
          return r
        }
        let str = this.input_r                    
        let len = str.length                    
        let res = ''
        let len_s = parseInt(str.length / 4)
        for(let i=0;i<len_s;i++){
          let c = str.slice(i*4, i*4+4)
          let code = parseInt(charDecode(c)||0,16)
          res += String.fromCharCode(code)
        }
        this.output_r = res
      },
      onCopy(){
      }
    }
  }
</script>
