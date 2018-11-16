const config = require('../../utils/env') // 全局配置信息
const accountServer = require('../../api/account')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  bindGetUserInfo: function (e) {
    wx.showLoading({
      title: '登陆中请稍后...',
    })
    app.globalData.userInfo = e.detail.userInfo
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        accountServer.code2Session({
          appid: config.appid,
          code:res.code
        }).then(res => {
          accountServer.wxLogin({
            userinfo: JSON.stringify(app.globalData.userInfo),
            sessionData: res.data.session_key,
            openid: res.data.openid
          }).then(res => {
            // wx.setStorageSync("lkey", res.header["lkey"])
            wx.switchTab({
              url: '/pages/index/index'
            })
            wx.hideLoading()
          })
        })
      }
    })
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