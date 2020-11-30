<template>
  <div class="statistics">
    <el-form class="search" label-width="100px">
      <div class="headline">
        <div class="">查询条件</div>
      </div>
      <el-row class="row">
        <el-col :span="8">
          <el-form-item label="所属项目：">
            <el-select v-model="params.projectCode" clearable>
              <el-option v-for="(item, index) in projectList" :key="index" :value="item.value" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="负责人：">
            <el-input v-model="params.person" placeholder="请输入负责人"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="8">
          <el-form-item label="开始时间：">
            <el-date-picker type="date" placeholder="选择日期" v-model="params.startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="结束时间：">
            <el-date-picker type="date" placeholder="选择日期" v-model="params.endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="8">
          <el-form-item label="执行人">
            <el-input v-model="params.executor" placeholder="请输入执行人"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="8">
        </el-col>
      </el-row>
      <el-row class="operation">
        <el-button type="primary">搜索</el-button>
        <el-button type="info" @click="rest">重置</el-button>
      </el-row>
    </el-form>
    <div class="headline">
      <div>用列统计</div>
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
    <div class="report">
      <pie :title="usecolumn"></pie>
    </div>

    <div class="headline">
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
    <div class="report">
      <pie :title="defect"></pie>
    </div>
  </div>
</template>

<script>
import pie from './component/pie'
export default {
  components: {
    pie
  },
  data () {
    return {
      usecolumn: '用列统计',
      defect: '缺陷统计',
      params: {
        projectCode: '',
        person: '',
        startTime: '',
        endTime: '',
        executor: ''
      },
      projectList: [
        {
          value: 'xm1',
          name: '移动展业平台'
        },
        {
          value: 'xm2',
          name: '三公'
        }
      ],
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
      }]
    }
  },
  methods: {
    // 重置
    rest () {
      this.params = Object.assign(this.$data.params, this.$options.data().params)
    }
  }
}
</script>

<style lang="less" scoped>
  .statistics{
    .report{
      margin: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
</style>