<template>
  <div class="view">
      <h2>车辆及司机信息填写:</h2>
      <el-form :model="form" :rules="rules" ref="form" label-position="left" label-width="100px">
        <el-row>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="司机姓名:" prop="name">
              <el-input v-model="form.name" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="身份证号:" prop="id">
              <el-input v-model="form.id" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="手机号:" prop="phone">
              <el-input v-model="form.phone" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="车牌号:" prop="chepai">
              <el-input v-model="form.chepai" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="所属公司:" prop="company">
              <el-input v-model="form.company" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="车型:" prop="chexing">
              <el-input v-model="form.chexing" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="颜色:" prop="color">
              <el-input v-model="form.color" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="GPS公司:" prop="company">
              <el-input v-model="form.GPS" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="办证平台:" prop="company">
              <el-input v-model="form.part" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="紧急联系人姓名:" prop="jinji">
              <el-input v-model="form.jinji" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="紧急联系人号码:" prop="jinjiphone">
              <el-input v-model="form.jinjiphone" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="金融公司:" prop="company">
              <el-input v-model="form.jinrong" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="违章扣分:" prop="koufen">
              <el-input v-model.number="form.koufen" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>          
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="上牌日期:" prop="shangpaidate">
              <el-date-picker
                style="width:270px"
                v-model="form.shangpaidate"
                type="date"
                value-format="yyyy/MM/dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="保险到期:" prop="baoxiandate">
              <el-date-picker
                style="width:270px"
                v-model="form.baoxiandate"
                type="date"
                value-format="yyyy/MM/dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>  
        <el-row>  
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="车主生日:" prop="birth">
              <el-date-picker
                style="width:270px"
                v-model="form.birth"
                type="date"
                value-format="yyyy/MM/dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="padding-right:15px;">
            <el-form-item label="年检到期:" prop="nianjiandate">
              <el-date-picker
                style="width:270px"
                v-model="form.nianjiandate"
                type="date"
                value-format="yyyy/MM/dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row> 
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注:">
              <el-input v-model="form.beizhu" placeholder="输入"></el-input>
            </el-form-item>
          </el-col>           
        </el-row>    


    <h2>照片上传:</h2>
    <div class="picture" v-for="(item,index) in picture" :key="index" @click="onClick(index)">
        <van-uploader :after-read="uploadImg" 
          accept="image/jpeg ,image/png"
          :max-size=6000000 
        >
          <div class="icon-box">
            <i>{{item.name}}</i>
          </div>
        </van-uploader>

        <div class="show-img" v-if="item.src">
          <span class="cancel-btn" @click="delImg(index)">x</span>
          <img :src="item.src" style="height:100%">
        </div>
        <div class="show-icon" v-else>
          <i>图片</i>
        </div>
    </div>

    <div class="submit"><el-button @click="submitForm('form')" :loading="btn_state" type="success" style="width:120px;margin-top:10px;">修改</el-button></div>
    </el-form>
  </div>
</template>

<script scope>
import axios from '../http'
  export default {
    data() {
      return {
        btn_state: false,
        form: {
          name: '',id: '',phone: '',chepai: '',company: '',chexing: '',
          color: '',gps: '',part: '',jinji: '',jinjiphone: '',birth:'',nianjiandate:'',
          jinrong: '',koufen: '',shangpaidate: '',baoxiandate: '',beizhu:'',
        },
        picture: [
          {name:"身份证正面",src:''},
          {name:"身份证背面",src:''},
          {name:"驾驶证",src:''},
          {name:"道路运输证",src:''},
          {name:"从业资格证",src:''},
          {name:"登记证书",src:''},
          {name:"司机头像照片",src:''},
          {name:"车辆照片",src:''},
          {name:"车辆发票",src:''},
          {name:"合同照片",src:''},
          {name:"交通保险单",src:''},
          {name:"商业保险单",src:''},
        ],
        index: '',
        rules: {
          name: [{required: true,message: '请填写姓名',trigger: 'blur'},{ min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }],         
          jinji: [{ min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }],         
          id: [{required: true,message: '请填写身份证',trigger: 'blur'},{ min: 18, max: 18, message: '填写正确长度身份证号码', trigger: 'blur' }],                 
          nianjiandate: [{ type: 'string',required: true, message: '请选择日期', trigger: 'blur' }],         
          shangpaidate: [{ type: 'string',required: true, message: '请选择日期', trigger: 'blur' }],         
          baoxiandate: [{ type: 'string',required: true, message: '请选择日期', trigger: 'blur' }],         
          birth: [{ type: 'string',required: true, message: '请选择日期', trigger: 'blur' }],         
          phone: [{required: true,message: '请填写联系方式',trigger: 'blur'},{ min: 11, max: 11, message: '号码长度11位', trigger: 'blur' }],                 
          jinjiphone: [{ min: 11, max: 11, message: '号码长度11位', trigger: 'blur' }],                 
          koufen: [{ type: 'number', message: '请填写数字类型', trigger: 'blur' }],                 
        } 
      }
    },
    mounted() {
      axios.get(
        '/v1/user',
        {
          index: this.$router.history.current.params.index
        }
      ).then( res => {
        if(res.status == 200) {
          this.form = res.data.form.form1
          this.picture = res.data.form.form2
        }
      }) 
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.btn_state = true;
            if(!this.form.koufen){this.form.koufen = 0}
            axios.post(
              '/v1/update',
              {
                form1: this.form,
                form2: this.picture
              }
            ).then( res => {
              if(res.status == 200) {
                this.$message({
                    message: '成功保存客户信息！',
                    type: 'success'
                })
                this.$router.push('/')
              }else{
                this.$message.error('发生错误，请检查服务器运行状况！');
              }
            })
            } else {
              this.$message.error('请检查填写内容！');
              return false;
            }
        })
      },
      onClick(index) {
        this.index = index
      },
      uploadImg(file) {
        this.picture[this.index].src = file.content
      },
      //删除图片
      delImg(index){
        this.picture[index].src = ''
      },
    },
  }
</script>

<style>
.view{
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 10px;
  width: 1140px;
  height: 1000px;
  background-color:white;
}
h2{
  text-align: left;
}
.item {
  position:relative;
  float:left;
  height:100px;
  width:100px;
  margin:5px 10px 5px 10px;
}
.cancel-btn {
  position:absolute;
  right:3px;
  top:3px;
  display:block;
  width:20px;
  height:20px;
  color:#fff;
  line-height:17px;
  text-align:center;
  background:red;
  border-radius:20px;
  cursor:pointer;
}
.show-img {
  position: relative;
  margin: 0 auto;
  margin-top: 5px;
  width: 140px;
  height: 90px;
}
.show-img img{
  width: 100%;
}
.show-icon {
  margin: 0 auto;
  margin-top: 5px;
  width: 140px;
  height: 90px;
  font-size: 30px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  line-height: 80px;
  text-align: center;
  color: lightgray;
}
.icon-box{
  width: 100px;
  height: 50px;
  border: 1px solid #d9d9d9;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
}
.van-uploader__input{
  width: 100%;
  height: 100%;
}

.picture{
  float: left;
  margin: 5px 10px;
  width: 160px;
  height: 150px;
}

</style>