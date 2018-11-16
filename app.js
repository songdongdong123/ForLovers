const config = require('./utils/env') // 全局配置信息
const accountServer = require('./api/account')
App({
  onLaunch: function () {
    // 登录
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          wx.reLaunch({
            url: '/pages/login/login'
          })
        }
      }
    })
  },
  globalData: {
		config: config,
		extConfig: null,
		userInfo: null,
		sessionKey: null,
		lkey: null
	}
})