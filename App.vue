<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-select v-model="from_station" placeholder="请选择">
          <el-option
            v-for="(value, key) in stations"
            :key="value"
            :label="key"
            :value="value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="to_station" placeholder="请选择">
          <el-option
            v-for="(name, value) in stations"
            :key="value"
            :label="name"
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
        <el-button type="success" icon="el-icon-check" circle></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
let stations = require('../../test/index.js').result

export default {
  name: 'app',
  data () {
    return {
      date: '',
      stations: stations,
      from_station: '',
      to_station: ''
    }
  },
  mounted () {

  },
  methods () {

  }
}
</script>

<style>
</style>
