<template>
  <div class="view">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="司机姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="chepai"
        label="车牌号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="chexing"
        label="车型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="chexing"
        label="备注">
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        background
        :pager-count="5"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

    <div class="search">
      <div class="item" style="width:260px;margin-left:60px;">
        <el-input
          clearable
          placeholder="请输入司机姓名"
          prefix-icon="el-icon-search"
          v-model="searchName">
        </el-input>
      </div>
      <div class="item"><el-button type="success" @click="search">搜索</el-button></div>
    </div>

    <el-table
      :data="result"
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="司机姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="chepai"
        label="车牌号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="chexing"
        label="车型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="chexing"
        label="备注">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../http'
  export default {
    data() {
      return {
        searchName: '',
        tableData: [
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
          {name: '王小虎',phone: '',chepai: '1',chexing:'',beizhu:''},
        ],
        result: []
      }
    },

    mounted() {
      axios.get('/v1/userGet').then( res =>{
        if(res.status == 200) {
          let userList = res.data.userList
          for(let i=0; i<10; i++){
            if(userList[i] == undefined){
              return
            }
            this.tableData[i].name = userList[i].name
            this.tableData[i].phone = userList[i].phone
            this.tableData[i].chepai = userList[i].chepai
            this.tableData[i].chexing = userList[i].chexing
            this.tableData[i].beizhu = userList[i].beizhu
          }
        }
      })
    },
    methods: {
      search() {
        if(this.searchName) {
          axios.get(
            '/v1/search',
            {name: this.searchName}
          ).then( res => {
            if(res.status == 200) {
              this.result = res.data.userList
            }
            if(res.data.userList == null) {
              alert("该客户不存在！")
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
.view{
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 10px;
  width: 1140px;
  height: 900px;
  background-color:white;
}
.search{
  width: 600px;
  margin: 0 auto;
  margin-top: 80px;
}
.item{
  height: 60px;
  display: inline-block;
}
</style>