const fatch = (method, url, params) => {
  const data = getApp().globalData // 获取全局配置参数
  const sendData = {...params}
  return new Promise((resolve, reject) => {
    wx.request({
      url: data.config.url + url,
      data: sendData,
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'cookie':wx.getStorageSync("lkey")//读取cookie
      },
      method: method,
      success (res) {
        let cookie = res.header['Set-Cookie']||wx.getStorageSync("lkey")
        if (cookie) {
          wx.setStorageSync("lkey", cookie)
        }
        if (res.statusCode === 401) {
          let tmp = getCurrentPages()
          let tmpArr = tmp[tmp.length - 1].__route__.split('/')
          let tmpStr = tmpArr[tmpArr.length - 1]
          wx.removeStorageSync('thirdSession')
          wx.reLaunch({ url: tmpStr })
          return
        } else if (res.statusCode === 404) {
          wx.showToast({
              title: '服务器繁忙',
              image: '/static/images/common/err.png',
              duration: 2000
            })
            return
        }
        if (res.statusCode != 200) {
          reject(res.data)
        } else if (res.statusCode = 200) {
          if ( typeof res.data === 'string') {
            wx.showToast({
              title: '服务器繁忙',
              image: '/static/images/common/err.png',
              duration: 2000
            })
            return
          }
          if (res.data.errCode) {
            wx.showToast({
              title: res.data.msg,
              image: '/static/images/common/err.png',
              duration: 2000
            })
            reject(res.data)
            return false
          }
          resolve(res.data)
        }
      },
      fail(res) {
        if (res.statusCode != 200) {
        }
        reject(res.data)
      }
    })
  })
}

module.exports = {
  fatch
}