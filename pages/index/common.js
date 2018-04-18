
function getCityID(){
  var url = 'https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api'
  wx.request({
    url: url,
    success: function (res) {
      console.log('getCityID = ' + res);
    },
    fail:function(){

    }
  });
}

function getMockData(callback) {
  var url ='http://foxleoly.pythonanywhere.com/test'
  wx.request({
    url: url,
    success: function (res) {
      callback(rsp)
      console.log('getMockData = '+ rsp);
    }
  });
}

function getHotMovies(callback){
  var url = "https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290"
  wx.request({
    url: url,
    success: function (res) {
      callback(res.data.movies)
      console.log('getHotMovies = ' + res.data.movies[0].img);
    }
  });
}

// function loadHotMovies(callback) {
//   getCityID(function (success, latitude, longitude) {
//     getWeather(latitude, longitude, function (weatherData) {
//       callback(weatherData);
//     });
//   });
// }

module.exports = {
  getHotMovie: getHotMovies,
  getMockData: getMockData
}