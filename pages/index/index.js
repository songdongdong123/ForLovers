//index.js
//获取应用实例
const app = getApp()
const accountServer = require('../../api/account.js')
Page({
  data: {
    moodlist: []
  },
  onLoad: function () {
    this.getAllMoodList()
  },
  toMoodDetail:function(e) {
    let id = e.currentTarget.id
    wx.navigateTo({
      url: `/pages/mooddetail/mooddetail?id=${id}`,
    })
  },
  getAllMoodList: function () {
    wx.showLoading({
      title: '加载中...',
    })
    accountServer.getAllMoodList().then(res => {
      let data = res.data;
      this.setData({
        moodlist: data
      })
      wx.hideLoading()
    })
  }
})
