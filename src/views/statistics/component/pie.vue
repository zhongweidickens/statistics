<template>
  <div ref="pie" class="pie"></div>
</template>

<script>
export default {
  props: ['params'],
  data () {
    return {
      option: {
        title: {
          text: this.params.title,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          top: '35%',
          left: 10,
          data: []
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      }
    }
  },
  created () {
    this.option.legend.data = this.params.names
    this.option.series[0].data = this.params.datas
    this.$nextTick(() => {
      const myChart = this.$echarts.init(this.$refs.pie)
      myChart.setOption(this.option);
    })
  }
}
</script>

<style scoped>
.pie{
  width: 500px;
  height: 400px;
}
</style>
