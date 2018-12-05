<template>
  <div class="view">
    <div>
      <h2>车辆及司机信息填写:</h2>
      <el-form :model="form" label-position="left" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="司机姓名:">
              <el-input v-model="form.email_id" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证号:">
              <el-input v-model="form.email_name" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号:">
              <el-input v-model="form.libao_id" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="车牌号:">
              <el-input v-model="form.plantform" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所属公司:">
              <el-input v-model="form.area" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车型:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="颜色:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="GPS公司:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办证平台:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="8">
            <el-form-item label="紧急联系人姓名:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="紧急联系人号码:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="金融公司:">
              <el-input v-model="form.player" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="违章扣分:">
              <el-input v-model="form.libao_id" placeholder="输入" style="width:90%"></el-input>
            </el-form-item>
          </el-col>          
          <el-col :span="8">
            <el-form-item label="上牌日期:">
              <el-date-picker
                style="width:260px"
                v-model="form.data"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="保险到期:">
              <el-date-picker
                style="width:260px"
                v-model="form.data"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>       
      </el-form>
      <h2>照片上传:</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textarea: '',
        form: {
          email_id: '',
          email_name: '',
          libao_id: '',
          plantform: '',
          area: '',
          player: '',
          date: '',
          time: '',
          comment: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        } 
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

  }
</script>

<style scoped>
.view{
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 10px;
  width: 1140px;
  height: 700px;
  background-color:white;
}
h2{
  text-align: left;
}
.el-form-item__label{
  font-size: 16px border;
}
</style>