var order = 0;
var flag = 0;
var squares = [["", "", ""], ["", "", ""], ["", "", ""]];
var win = [['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22'],
            ['00', '10', '20'],['01', '11', '21'], ['02', '12', '22'],
            ['00', '11', '22'], ['02', '11', '20']];

var reach = [ //横
            ['00', '01'], ['01', '02'], ['00', '02'], 
            ['10', '11'], ['11', '12'], ['10', '12'], 
            ['20', '21'], ['21', '22'], ['20', '22'], 
            //縦
            ['00', '10'], ['10', '20'], ['00', '20'], 
            ['01', '11'], ['11', '21'], ['01', '21'], 
            ['02', '12'], ['12', '22'], ['02', '22'], 
            //斜め
            ['00', '11'], ['11', '22'], ['00', '22'], 
            ['02', '11'], ['11', '20'], ['02', '20'], ]

          
function game(input){
  var cell = document.getElementById(input);
  var info = document.getElementById("info");

  //クリック不可処理
  if(flag == 1 || squares[input.charAt(0)][input.charAt(1)] != ""){
    alert("もうクリックできません！");
    // InfoBottom.innerHTML = "もうそこは置かれているよ！";
    return;
  }

  //○描画処理
  cell.innerHTML = "◯";
  squares[input.charAt(0)][input.charAt(1)] = "◯";
  InfoBottom.innerHTML = "　";

  //○側クリア処理
  for(var i = 0; i < win.length; i++){
    var cell1 = squares[win[i][0].charAt(0)][win[i][0].charAt(1)];
    var cell2 = squares[win[i][1].charAt(0)][win[i][1].charAt(1)];
    var cell3 = squares[win[i][2].charAt(0)][win[i][2].charAt(1)];
    if(cell1 == "◯" && cell2 == "◯" && cell3 == "◯"){
      info.innerHTML = "◯の勝ち！";
      flag = 1;
      return;
    }
    else if(order == 4){
      info.innerHTML = "引き分け！";
      return;
    }
    else{
      ;
    }
  }

  // for(var i = 0; i < reach.length; i++){
  //   var cell1 = squares[reach[i][0].charAt(0)][reach[i][0].charAt(1)];
  //   var cell2 = squares[reach[i][1].charAt(0)][reach[i][1].charAt(1)];
  //   var cell3 = squares[reach[i][2].charAt(0)][reach[i][2].charAt(1)];
  //   if(cell1 == "◯" && cell2 == "◯"){
  //     var pc = document.getElementById("" + cell3);
  //     pc.innerHTML = "×";
  //     break;
  //     return;
  //   }
  // }

  //×側処理
  while(true){
    //乱数
    var random1 = Math.floor( Math.random() * 3 );
    var random2 = Math.floor( Math.random() * 3 );
    var one = 1;
    
  //×側描画処理
  if(squares[one][one] == ""){
    squares[one][one] = "×";
      var pc = document.getElementById("" + one + one);
      pc.innerHTML = "×";
      break;
    }
    else 


    if(squares[random1][random2] == ""){
      squares[random1][random2] = "×";
      var pc = document.getElementById("" + random1 + random2);
      InfoBottom.innerHTML = "　";
      pc.innerHTML = "×";
      break;
    }
  }
  // for(var i = 0; i < reach.length; i++){
  //   var cell1 = squares[reach[i][0].charAt(0)][reach[i][0].charAt(1)];
  //   var cell2 = squares[reach[i][1].charAt(0)][reach[i][1].charAt(1)];
  //   var cell3 = squares[reach[i][2].charAt(0)][reach[i][2].charAt(1)];
  //   if(cell1 == "◯" && cell2 == "◯"){
  //     var pc = document.getElementById("" + [reach[i][2].charAt(0)] + [reach[i][2].charAt(1)]);
  //     pc.innerHTML = "×";
  //     break;
  //     return;
  //   }
  // }
  //×側処理
  for(var i = 0; i < win.length; i++){
    var cell1 = squares[win[i][0].charAt(0)][win[i][0].charAt(1)];
    var cell2 = squares[win[i][1].charAt(0)][win[i][1].charAt(1)];
    var cell3 = squares[win[i][2].charAt(0)][win[i][2].charAt(1)];
    if(cell1 == "×" && cell2 == "×" && cell3 =="×"){
      info.innerHTML = "×の勝ち！";
      flag = 1;
      return;
    }
  }

  order += 1;
}

function reset(){
  location.reload();
}


