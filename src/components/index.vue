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
        prop="beizhu"
        label="备注">
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        background
        :pager-count="5"
        layout="prev, pager, next"
        :total="10000"
        @current-change="pageChange">
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
      style="width: 100%"
      @row-click="onclick">
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
        prop="beizhu"
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
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},          
          {name: '',phone: '',chepai: '',chexing:'',beizhu:'',index:''},                  
        ],
        tableData2: [],
        result: [],
        userList: []
      }
    },

    mounted() {
      axios.get('/v1/userGet').then( res =>{
        if(res.status == 200) {
          this.userList = res.data.userList
          for(let i=0; i<10; i++){
            if(this.userList == null || this.userList[i] == undefined){
              this.tableData.pop()
            }else{
              this.tableData[i].name = this.userList[i].name
              this.tableData[i].phone = this.userList[i].phone
              this.tableData[i].chepai = this.userList[i].chepai
              this.tableData[i].chexing = this.userList[i].chexing
              this.tableData[i].beizhu = this.userList[i].beizhu
              this.tableData[i].index = this.userList[i].index
            }
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
              this.$message({
                message: '该客户不存在！',
                type: 'warning'
              })
            }
          })
        }
      },
      // 翻页事件
      pageChange(val) {
        let temp = (val-1)*10
        let index = 0
        this.tableData2 = []
        for(let i=0+temp; i<10+temp; i++) {
          if(this.userList[i]) {
            this.tableData2[index] = this.userList[i] 
          }
          index++
        }
        this.tableData = this.tableData2
      },
      onclick(row, event, column) {
        console.log(row)
        let routeUrl = this.$router.resolve({path:'/update/'+row.index})
        window.open(routeUrl .href, '_blank');
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
  height: 1300px;
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