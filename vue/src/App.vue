<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-select v-model="from_station" filterable placeholder="请选择">
          <el-option
            v-for="(value, key) in stations"
            :label="key"
            :value="value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="to_station" placeholder="请选择">
          <el-option
            v-for="(value, key) in stations"
            :label="key"
            :value="value">
          </el-option>
        </el-select>
      </el-col> 
      <el-col :span="6">
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-button type="success" icon="el-icon-check" circle v-on:click="getData"></el-button>
      </el-col>
    </el-row>
    <el-table
      :data="info"
      stripe
      style="width: 100%">
      <el-table-column
        prop="train_no"
        label="车次">
      </el-table-column>
      <el-table-column
        prop="to_station_code"
        label="车站">
      </el-table-column>
      <el-table-column
        prop="start_time"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="time_duration"
        label="历时">
      </el-table-column>
      <el-table-column
        prop="business_seat"
        label="商务座">
      </el-table-column>
      <el-table-column
        prop="first_class_seat"
        label="一等座">
      </el-table-column>
      <el-table-column
        prop="second_class_seat"
        label="二等座">
      </el-table-column>
      <el-table-column
        prop="pneumatic_sleep"
        label="动卧">
      </el-table-column>
      <el-table-column
        prop="soft_sleep"
        label="软卧">
      </el-table-column>
      <el-table-column
        prop="hard_sleep"
        label="硬卧">
      </el-table-column>
      <el-table-column
        prop="hard_seat"
        label="硬座">
      </el-table-column>
      <el-table-column
        prop="no_seat"
        label="无座">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
import {data, parseResult} from '../../test/index.js'
export default {
  name: 'app',
  data () {
    return {
      date: '',
      stations: data,
      from_station: '',
      to_station: '',
      info: []
    }
  },
  mounted () {
  },
  methods: {
    getData () {
      let date = moment(this.date).format('YYYY-MM-DD')
      let that = this
      console.log(date)
      this.$axios(`https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=${date}&leftTicketDTO.from_station=${this.from_station}&leftTicketDTO.to_station=${this.to_station}&purpose_codes=ADULT`)
      .then(res => {
        if (res && res.data.httpstatus === 200 && res.data.data) {
          let resultArr = res.data.data.result || []
          that.info = resultArr.map(result => {
            return parseResult(result)
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
