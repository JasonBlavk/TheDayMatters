// pages/home/home.js
Page({
 /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red; padding-left:20px'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp; Every Runners!!!'
      }]
    }],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000204NIP06LTVu.jpg?max_age=2592000',
    name: 'Conquest Of Paradise',
    author: 'Vangelis',
    src: 'http://dl.stream.qqmusic.qq.com/C400003XA5lc44B4KB.m4a?vkey=2238D3C79AB753F5B158D0A3C316989AC431967533090F7C35F8B6B891862ADF7CD1F13E9775E7EB1CD80AEFF101D54C023D89BB7080AB16&guid=7181450675&uin=0&fromtag=66',

  },
  showCurrentPage:function(e){
    // console.log(e.detail.current)
    // console.log(e.detail.source)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
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