<template>
  <div class="statistics">
    <el-form class="search" :model="params" :rules="rules" ref="refFrom" label-width="100px">
      <div class="headline">
        <div class="">查询条件</div>
      </div>
      <el-row class="row">
        <el-col :span="8">
          <el-form-item label="项目/系统：" prop="projectCode">
            <el-select v-model="params.projectCode" clearable>
              <el-option v-for="(item, index) in projectList" :key="index" :value="item" :label="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <!-- <el-form-item label="负责人：">
            <el-input v-model="params.person" placeholder="请输入负责人"></el-input>
          </el-form-item> -->
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="8">
          <el-form-item label="开始时间：" prop="startTime">
            <el-date-picker type="date" placeholder="选择日期" format="yyyy/DD/MM" v-model="params.startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="结束时间：" prop="endTime">
            <el-date-picker type="date" placeholder="选择日期" format="yyyy/DD/MM" v-model="params.endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="operation">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="info" @click="rest">重置</el-button>
      </el-row>
    </el-form>
    <div class="headline">
      <div>用列统计</div>
    </div>
    <el-table :data="caseHandle" border style="width: 100%"> 
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="date" label="所属系统"></el-table-column>
      <el-table-column prop="date" label="迭代计划"></el-table-column>
      <el-table-column prop="date" label="模块"></el-table-column>
      <el-table-column prop="date" label="用列数"></el-table-column>
      <el-table-column prop="date" label="通过"></el-table-column>
      <el-table-column prop="date" label="失败"></el-table-column>
      <el-table-column prop="date" label="阻塞"></el-table-column>
      <el-table-column prop="date" label="通过率"></el-table-column>
      <el-table-column prop="date" label="缺陷数"></el-table-column>
      <el-table-column prop="date" label="执行数"></el-table-column>
    </el-table>
    <div class="headline mt20">
      <div>缺陷统计</div>
    </div>
    <el-table :data="tableData" border style="width: 100%"> 
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="date" label="所属系统"></el-table-column>
      <el-table-column prop="date" label="迭代计划"></el-table-column>
      <el-table-column prop="date" label="模块"></el-table-column>
      <el-table-column prop="date" label="用列数"></el-table-column>
      <el-table-column prop="date" label="通过"></el-table-column>
      <el-table-column prop="date" label="失败"></el-table-column>
      <el-table-column prop="date" label="阻塞"></el-table-column>
      <el-table-column prop="date" label="通过率"></el-table-column>
      <el-table-column prop="date" label="缺陷数"></el-table-column>
      <el-table-column prop="date" label="执行数"></el-table-column>
    </el-table>
    <div class="box">
      <div class="report">
        <pie :params="usecolumnPie"></pie>
      </div>
      <div class="report">
        <pie :params="defectPie"></pie>
      </div>
    </div>
  </div>
</template>

<script>
import pie from './component/pie'
import moment from 'moment'
export default {
  components: {
    pie
  },
  data () {
    return {
      rules: {
        projectCode: [
          { required: true, message: '请选择项目/系统', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择开始时间', trigger: 'blur' }
        ],
        endTime: [
          { required: true, message: '请选择结束时间', trigger: 'blur' }
        ],
      },
      usecolumnPie: {
        title: '用列统计',
        names: ["用列数", "编写用列", "通过", "失败", "阻塞"],
        datas: [
          {value: 310, name: '用列数'},
          {value: 234, name: '编写用列'},
          {value: 135, name: '通过'},
          {value: 1548, name: '失败'},
          {value: 135, name: '阻塞'}
        ]
      },
      defectPie: {
        title: '缺陷统计',
        names: ["用列数", "编写用列", "通过", "失败", "阻塞"],
        datas: [
          {value: 310, name: '用列数'},
          {value: 234, name: '编写用列'},
          {value: 135, name: '通过'},
          {value: 1548, name: '失败'},
          {value: 135, name: '阻塞'}
        ]
      },
      params: {
        projectCode: '',
        startTime: '',
        endTime: '',
      },
      projectList: ['移动展业平台', 'w23'],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      // 用列
      caseHandle: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    // 获取项目或者系统
    getSys () {
      this.$axios.post('productList').then(res => {
        this.projectList = res.data
      })
    },
    // 搜索
    search () {
       this.$refs.refFrom.validate((valid) => {
        if (valid) {
          this.params.startTime = moment(this.params.startTime).format('YYYY/MM/DD hh:mm:ss')
          this.params.endTime = moment(this.params.endTime).format('YYYY/MM/DD hh:mm:ss')
          // 用例接口
         this.$axios.post('caseHandle', this.params).then(res => {
           console.log(res)
         })
        }
      });
    },
    // 重置
    rest () {
      this.params = Object.assign(this.$data.params, this.$options.data().params)
    }
  }
}
</script>

<style lang="less" scoped>
  .statistics{
    .box{
      display: flex;
      justify-content: space-around;
    }
    .mt20{
      margin-top: 20px;
    }
    .report{
      margin: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
</style>