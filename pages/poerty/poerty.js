// pages/poerty/poerty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"全部",
        isActive:true
      },
      {
        id:1,
        name:"先秦",
        isActive:false
      },
      {
        id:2,
        name:"两汉",
        isActive:false
      },
      {
        id:3,
        name:"魏晋",
        isActive:false
      },
      {
        id:4,
        name:"南北朝",
        isActive:false
      },
      {
        id:5,
        name:"隋代",
        isActive:false
      },
      {
        id:6,
        name:"唐代",
        isActive:false
      },
      {
        id:7,
        name:"五代",
        isActive:false
      },
      {
        id:8,
        name:"宋代",
        isActive:false
      },
      {
        id:9,
        name:"金朝",
        isActive:false
      },
      {
        id:10,
        name:"元代",
        isActive:false
      },
      {
        id:11,
        name:"明代",
        isActive:false
      },
      {
        id:12,
        name:"清代",
        isActive:false
      }
    ]
  },

  // 全部诗词的网络请求
  houduanButton0:function(e){
      // 首先修改对应的isActive以便给点击效果
      var data = this.data.tabs;
      for (var i = 0; i < data.length; i++) {
        if (i == 0) {
          // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
          data[i].isActive = true
        }else {
          data[i].isActive = false
        }
      }
      this.setData({
        // 把新的data数组赋值给arrays
        tabs: data
      })
  },


  // 先秦诗词的网络请求
  houduanButton1:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 1) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })

    var that = this;
    wx.request({
      url: 'http://localhost:5500/qin',
      data:{
        word:'getpoem'
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


  // 两汉诗词的网络请求
  houduanButton2: function (e) {
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 2) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  }, 


  // 魏晋诗词的网络请求
  houduanButton3:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 3) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  },


  // 南北朝诗词的网络请求
  houduanButton4:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 4) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  },


  // 隋朝诗词的网络请求
  houduanButton5:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 5) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  },


  // 唐朝诗词的网络请求
  houduanButton6:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 6) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  },


  // 五代诗词的网络请求
  houduanButton7:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 7) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  },


  // 宋代诗词的网络请求
  houduanButton8:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 8) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
  },


  // 金朝诗词的网络请求
  houduanButton9:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 9) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
 },


  // 元代诗词的网络请求
  houduanButton10:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 10) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
 },


  // 明代诗词的网络请求
  houduanButton11:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 11) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
    })
 },


  // 清代诗词的网络请求
  houduanButton12:function(e){
    // 首先修改对应的isActive以便给点击效果
    var data = this.data.tabs;
    for (var i = 0; i < data.length; i++) {
      if (i == 12) {
        // 如果修改数组中所有name的值，则不要判断，这里判断只修改数组中第一组数据的name值
        data[i].isActive = true
      }else {
        data[i].isActive = false
      }
    }
    this.setData({
      // 把新的data数组赋值给arrays
      tabs: data
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