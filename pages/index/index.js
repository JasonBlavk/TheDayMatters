//index.js
var util = require('../../utils/util.js');
var common = require('common.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '最近热映',
    userInfo: {},
    hasUserInfo: false,
    latitude: 31.23, 
    longitude: 121.18,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hotMovies:[]
  },
  //事件处理函数
  bindViewTap: function() {
    var that = this;
    common.getHotMovie(function (movies) {

      that.setData({
        hotMovies: movies
      });
      console.log(that.data.hotMovies[0])
    });  

    // wx.navigateTo({
    //   url: '../home/home'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReachBottom: function () {

  },

  onPullDownRefresh: function() {
    console.log(util.formatTime(new Date()))
    wx.showToast({
      title: '下拉刷新',
      icon: 'loading',  //图标，支持"success"、"loading"
      // image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon
      duration: 2500, //提示的延迟时间，单位毫秒，默认：1500
      mask: true,  //是否显示透明蒙层，防止触摸穿透，默认：false
      success: function () {
        console.log(util.formatTime(new Date()))
 
       
      }, //接口调用成功的回调函数
      fail: function () { },  //接口调用失败的回调函数
      complete: function () {
        console.log('com == ' + util.formatTime(new Date()))
        wx.stopPullDownRefresh()
      } //接口调用结束的回调函数

    })
  },
  onReady:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log("res == " + res.latitude)
        console.log("res == " + res.longitude)

        this.setData({
          latitude :res.latitude, // 经度
          longitude :res.longitude // 纬度
        })

       
      }
    })
  },
  moveToLocation:function(){
    var map = wx.createMapContext("mapId")
    map.moveToLocation()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage:function(){
    
  }
})
