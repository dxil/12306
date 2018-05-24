const stations = require('../lib/station_name')

function init () {
  return initStation ()
}

function initStation () {
  let result = {}
  let station_arr = []

  station_arr = stations.station_names.split('@')
  station_arr.splice(0, 1)
  station_arr.forEach(val => {
    val = val.split('|')
    result[val[1]] = val[2]
  })
  return result
}

export function parseResult (res) {
  let data_list = res.split('|')
  let list = {}

  list.train_no = data_list[3]
  list.from_station_code = data_list[6]
  list.to_station_code = data_list[7]
  list.from_station_name = ''
  list.to_station_name = ''
  list.start_time = data_list[8]
  list.arrive_time = data_list[9]
  list.time_duration = data_list[10]
  list.business_seat = data_list[32] || '--'
  list.first_class_seat = data_list[31] || '--'
  list.second_class_seat = data_list[30] || '--'
  list.pneumatic_sleep = data_list[33] || '--'
  list.soft_sleep = data_list[23] || '--'
  list.hard_sleep = data_list[28] || '--'
  list.hard_seat = data_list[29] || '--'
  list.no_seat = data_list[26] || '--'
  console.log(list)
  return list
}

export const data = init()