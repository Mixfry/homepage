


$(function(){
  // 初期描画
  var tweetArray = [];
  tweetDraw();
  // ツイート入力欄にフォーカスがあたったときの振る舞い
  $("#form textarea").click(function(){
    $(this).addClass("focus");
    $("#form input").show();
  })
  // ツイート送信
  $(document).on("submit","#form",function(){
    // ツイートの取得
    var tweetText = $("#form textarea").val();
    $("#form textarea").val("");
    // ローカルストレージにツイートを追加
    tweetArray.push(tweetText);
    var saveTweet = JSON.stringify(tweetArray);
    localStorage.setItem("tweetsJson", saveTweet);
    // ツイートを描画

    tweetDraw();
    return false;
  })
  // ツイートをすべて削除
  $("#resetBtn").click(function(){
    if(window.confirm('投稿をすべて削除してもよろしいですか？')){
      localStorage.removeItem("tweetsJson");
      tweetArray = [];
      tweetDraw();
    }
  })
  // ツイート描画の関数
  function tweetDraw(){
    var tweetHtml = "";
    var tweet = localStorage.getItem("tweetsJson");
    if(tweet){
      tweetArray = JSON.parse(tweet);
    }
    if(tweetArray.length > 0){
      var i = tweetArray.length - 1;
      tweetArray.forEach(function(){
        console.log(tweetArray[i]);
        tweetHtml += '<div class="stream-item"><div class="stream-item-header"><img src="img/カービィ.png" width="48" height="48"><span class="full-name">Mixfry</span><span class="user-name">@Mixfry3296</span></div><div class="tweet-text">' +  tweetArray[i] + '</div></div>';
        i--;
      });
      $(".stream").html(tweetHtml);
      $("#resetBtn").show();
    }else{
      $(".stream").html("<div class='no-tweet'>投稿はまだありません</div>");

      $("#resetBtn").hide();
    }
  }
})



$(function() {
  //始めにjQueryで送信ボタンを無効化する
  $('.send').prop("disabled", true);
  
  //始めにjQueryで必須欄を加工する
  $('form textarea:required').each(function () {
      $(this).prev("label").addClass("required");
  });
  
  //入力欄の操作時
  $('form textarea:required').change(function () {
      //必須項目が空かどうかフラグ
      let flag = true;
      //必須項目をひとつずつチェック
      $('form textarea:required').each(function(e) {
          //もし必須項目が空なら
          if ($('form textarea:required').eq(e).val() === "") {
              flag = false;
          }
      });
      //全て埋まっていたら
      if (flag) {
          //送信ボタンを復活
          $('.send').prop("disabled", false);
      }
      else {
          //送信ボタンを閉じる
          $('.send').prop("disabled", true);
      }
  });
});

