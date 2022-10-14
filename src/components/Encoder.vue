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
          const dic={"0":"赵","1":"钱","2":"孙","3":"李","4":"周","5":"吴","6":"郑","7":"王",
          "8":"冯","9":"陈","a":"褚","b":"卫","c":"蒋","d":"沈","e":"韩","f":"杨"}
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
        const dic={"赵":"0","钱":"1","孙":"2","李":"3","周":"4","吴":"5","郑":"6","王":"7",
          "冯":"8","陈":"9","褚":"a","卫":"b","蒋":"c","沈":"d","韩":"e","杨":"f"}
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
