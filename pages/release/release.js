
const accountServer = require('../../api/account.js')
Page({
  data: {
    title: '',
    content: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      [e.target.dataset.type]: e.detail.value
    })
  },
  releaseTo: function () {
    wx.showLoading({
      title: '发布中...',
    })
    accountServer.releaseMood({
      moodtitle: this.data.title,
      moodcontent: this.data.content
    }).then(res => {
      this.setData({
        title: '',
        content: ''
      })
      wx.hideLoading()
    })
  }
})