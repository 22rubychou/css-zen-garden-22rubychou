$('#textillate').textillate({
  selector: '.text',  //選擇動畫清單，裡面子元素產生進逞、離場動畫
  loop: true, //循環撥放
  initialDelay: 0, //動畫開始前的延遲時間
  autoStart: true, //動畫自動開始
  type: 'char', //char 顯示單位字母，word 為一句話
  in: {
    effect: 'zoomIn', //過場動畫效果
    delayScale: 1.5, // 魂還撥放
    delay: 50, // 每個字之間的延遲時間，毫秒
    sync: false, // false 為同步逐一顯示， true 為非同步一次顯示
    shuffle: false, // 是否亂數顯示
    reverse: false, // 是否反向顯示
    callback: function () {
      // 進場時的回乎函式
    }
  },

  out: {
    effect: 'zoomOut',
    delayScale: 1,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () { }
  },
});