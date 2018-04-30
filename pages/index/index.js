//index.js
var util = require('../../utils/util.js');
var common = require('common.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    adv: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      advUrls: ['http://utmbmontblanc.com/fonds/page/utmb16-tds-fo-04-0040__.jpg',
        "http://utmbmontblanc.com/fonds/page/utmb16-occ-pt-12-0083-6.jpg",
        "http://utmbmontblanc.com/fonds/page/utmb16-ccc-pt-07-0543__.jpg"],

    },
    myEvent: '我的赛事',
    hotEvent: '热门影视',
    myEvents: [{ "eventId": 1, "eventName": "2018柴古唐斯括苍山越野赛", "number": "007" },
    { "eventId": 2, "eventName": "2018莫干山超级越野赛", "number": "008" }],
    userInfo: {},
    hasUserInfo: false,
    latitude: 28.840858422,
    longitude: 121.112563079,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hotMovies: [],
    mockData: {},
  },
  clickMyEvent: function (event) {
    // console.log("event ===> " + event.currentTarget.dataset.eventName)

    wx.navigateTo({
      url: '../eventDetail/detail?eventName=' + event.currentTarget.dataset.eventName + '&eventId=' + event.currentTarget.dataset.eventId
    })

    // wx.showToast({
    //   title: '欢迎参加 ' + event.currentTarget.dataset.eventName,
    //   icon: 'none',
    //   image: '',
    //   duration: 2000,
    //   mask: true,
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  },
  //事件处理函数
  bindViewTap: function () {
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

  hotEventTap: function () {
    wx.navigateTo({
      url: '../hotMoiveDetail/hotMoiveDetail'
    })
  },

  initData: function () {
    // common.getMockData(function (rsp) {
    //   that.setData({
    //     mockData: rsp
    //   });
    //   console.log(mockData)
    // });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

  onPullDownRefresh: function () {
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
  onReady: function () {
    this.bindViewTap()
    this.initData()
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log("res == " + res.latitude)
        console.log("res == " + res.longitude)

        this.setData({
          // latitude: res.latitude, // 经度
          // longitude: res.longitude // 纬度
        })
      }
    })
  },
  moveToLocation: function () {
    var map = wx.createMapContext("mapId")
    map.moveToLocation()
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  }
})
