//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    username: '',
    inputValue: '',
    userage: ''
  },
  getUsername: function (e) {
    let value = e.detail.value
    this.setData({
      username: value
    })
  },
  getUserage: function (e) {
    let value = e.detail.value
    this.setData({
      userage: value
    })
  },
  register () {
    console.log(this.data)
    wx.request({
      url: 'https://www.ethansblogs.com/api/register.php?c=Account&m=register', //仅为示例，并非真实的接口地址
      method: 'GET',
      data: {
        username: this.data.username,
        userage: this.data.userage
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  onLoad: function () {
    
  }
})
