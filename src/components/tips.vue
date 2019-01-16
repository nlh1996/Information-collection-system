<template>
  <div class="view">
    <div class="box"><h3>车辆年检提醒</h3>
      <el-table
        :data="tableData1"
        height="240"
        border
        :row-class-name="tableRowClassName"
        style="width: 390px">
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          width="150">
        </el-table-column>
        <el-table-column
          prop="num"
          label="到期天数(天)"
          width="135">
        </el-table-column>
      </el-table>
    </div>
    <div class="box"><h3>车辆保险提醒</h3>
      <el-table
        :data="tableData2"
        height="240"
        border
        :row-class-name="tableRowClassName"
        style="width: 390px">
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          width="150">
        </el-table-column>
        <el-table-column
          prop="num"
          label="到期天数(天)"
          width="135">
        </el-table-column>
      </el-table>
    </div>
    <div class="box"><h3>生日提醒</h3>
      <el-table
        :data="tableData3"
        height="240"
        border
        :row-class-name="tableRowClassName"
        style="width: 390px">
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          width="150">
        </el-table-column>
        <el-table-column
          prop="num"
          label="到期天数(天)"
          width="135">
        </el-table-column>
      </el-table>
    </div>
    <div class="box"><h3>违章扣分提醒</h3>
      <el-table
        :data="tableData4"
        height="240"
        border
        :row-class-name="tableRowClassName"
        style="width: 390px">
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          width="150">
        </el-table-column>
        <el-table-column
          prop="num"
          label="扣分情况(分)"
          width="135">
        </el-table-column>
      </el-table>
    </div>
    <div class="box"><h3>管理到期提醒</h3>
      <el-table
        :data="tableData5"
        height="240"
        border
        :row-class-name="tableRowClassName"
        style="width: 390px">
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          width="150">
        </el-table-column>
        <el-table-column
          prop="num"
          label="到期天数(天)"
          width="135">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from '../http'
  export default {
    data() {
      return {
        tableData1: [],
        tableData2: [],
        tableData3: [],
        tableData4: [],
        tableData5: [],
      }
    },
    mounted() {
      axios.get(
        '/v1/remind'
      ).then( res => {
        if(res.status == 200) {
          this.tableData1 = res.data.tip1
          this.tableData2 = res.data.tip2
          this.tableData3 = res.data.tip3
          this.tableData4 = res.data.tip4
          this.tableData5 = res.data.tip5
        }
      })
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        return 'warning-row';
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
.box{
  height: auto;
  width: 500px;
  float: left;
  padding-left: 70px;
}
h3{
  text-align: left;
  margin: 0;
  padding: 40px 0 20px 5px;
  color: #409EFF;
}

</style>