const accountServer = require('../../api/account.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    address: '',
    region: [],
  },
  bindInput:function(e) {
    this.setData({
      [e.target.dataset.type]: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 完善用户信息
  CompletionUser:function () {
    wx.showLoading({
      title: '正在提交...',
    })
    let address = `${this.data.region[0]}、${this.data.region[1]}、${this.data.region[2]}、${this.data.address}`;
    let phone = this.data.phone;
    accountServer.CompletionUser({
      phone: phone,
      address: address
    }).then(res => {
      wx.hideLoading()
      wx.navigateBack({
        delta: 1
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})