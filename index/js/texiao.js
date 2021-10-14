
  $(function(){
    emojis = ["🧡", "💛", "💚", "💙", "💜", "❤", "💕",
    "💞", "💓", "💗", "💖", "💘", "💝", "💟", "💌"];
    var height=$(window).width() * 1.5;
    $('#test').css({
      'height':height,
    });
    $('#test').click(function(e){
    var n = ~~(Math.random() * emojis.length);
    console.log(n)
    var $i=$('<b></b>').text(emojis[n]);
      var x=e.pageX,y=e.pageY;//获取鼠标点击的位置坐标
      $i.css({
          "z-index": 9999,
          "top": y - 20,
          "left": x,
          "position": "absolute",
          "color": 'red',
          "font-size": 32,
        });
        $("body").append($i);
        $i.animate({
          "top": y - 180,
          "opacity": 0
        }, 1500, function() {
          $i.remove();
        });//设置动画
    });
  });
