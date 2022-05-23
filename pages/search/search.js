// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:""
  },

  // 用户输入的搜索内容传到后端
  toSearch(){
    var that = this;
    wx.request({
      url: 'http://localhost:5500/toSearch',
      data:{
           searchInf: this.data.searchContent
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var message = res.data[0];
        if (message == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            message:res.data
          })
        }
      }
    })
  },

  // 保存用户输入的内容
  getSearchContent: function (event) {
   console.log(event.detail.value);
   let value = event.detail.value
   this.setData({
    searchContent: value
   })
  },

  // 跳转到具体内容页并把具体内容作为参数传到二级页面
  gotoContent:function (e) {
    //获取绑定的参数
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/poerty_content/poerty_content?id=' + data.id,
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