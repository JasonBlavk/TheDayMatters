// pages/eventDetail/detail.js

var mockPoints = require('mock.js');
var trkPoints = mockPoints.gpxData_chaigu.gpx.trk.trkseg.trkpt;

var moganPoints = require('track-mo.js');
var moganTrkPoints = moganPoints.gpxData_mogan.gpxxxx.wpt;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    eventName: "",
    eventId: 0,
    map: [{
      latitude: 28.799581017,
      longitude: 120.996096243,
      polyline: [{
        points: trkPoints,
        color: "#00FF00DD",
        width: 2,
      }],
      markers: [
        {
          iconPath: "./images/marker1.png",
          width: 16,
          height: 16,
          latitude: 28.821888113,
          longitude: 121.038351272,
          name: "CP1",
          desc: ""
        }, {
          iconPath: "./images/marker1.png",
          width: 16,
          height: 16,
          latitude: 28.787998972,
          longitude: 120.913553529,
          name: "CP5",
          desc: "黄家寮"
        }]
    },
    {
      latitude: 30.551383,
      longitude: 119.855469,
      polyline: [{
        points: moganTrkPoints,
        color: "#00FF00DD",
        width: 4,
        arrowLine: true,
        arrowIconPath: "./images/arrow.png"
      }],
      markers: [
        {
          iconPath: "./images/start.png",
          width: 32,
          height: 32,
          latitude: 30.60134277,
          longitude: 119.8941012,
          name: "起点",
          desc: ""
        }, {
          iconPath: "./images/marker1.png",
          width: 16,
          height: 16,
          latitude: 30.563694,
          longitude: 119.881606,
          name: "CP1",
          desc: ""
        }, {
          iconPath: "./images/marker1.png",
          width: 16,
          height: 16,
          latitude: 30.512868,
          longitude: 119.903982,
          name: "CP2",
          desc: ""

        } , {
          iconPath: "./images/marker1.png",
          width: 16,
          height: 16,
          latitude: 30.508331,
          longitude: 119.831502,
          name: "CP3",
          desc: ""

        }, {
          iconPath: "./images/marker1.png",
          width: 16,
          height: 16,
          latitude: 30.597202,
          longitude: 119.803871,
          name: "CP4",
          desc: ""
        }, {
          iconPath: "./images/end.png",
          width: 32,
          height: 32,
          latitude: 30.60586704,
          longitude: 119.8626631,
          name: "终点",
          desc: ""
        }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ eventName: options.eventName, eventId: options.eventId - 1 })
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