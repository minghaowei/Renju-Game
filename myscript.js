var restart = document.querySelector('#b');

var squares = document.querySelectorAll('td');

var move = 0;

var last = null;

var gameNumber = 1;


//var lastmove = document.querySelector('#b2');

var span = document.querySelector('#span1');

function reportWin(){
  var message = "游戏结束";
  if(move % 2 == 1){
    message += ",黑子胜!";
  }else{
    message += ",白子胜!";
  }
  setTimeout(function() { alert(message); }, 200);
}

function getColor(row, column){
  var content = document.querySelector('table').rows[row].cells[column];
  return content.style.color;
}

function colorMatchCheck(one,two,three,four, five){
  return (one===two && one===three && one===four && one === five && one !== 'grey' && one !== undefined);
}

function checkVertical(){
  for (var row = 0; row < 13; row++) {
    for (var column = 0; column < 17; column++){
      if(colorMatchCheck(getColor(row, column), getColor(row+1, column), getColor(row+2, column), getColor(row+3, column), getColor(row+4, column))){
        reportWin();
      }else{
        continue;
      }
    }
  }
  //console.log("ver checked");
}

function chechhorizontal(){
  for (var row = 0; row < 17; row++){
    for (var column = 0; column < 13; column++){
      if(colorMatchCheck(getColor(row, column), getColor(row, column+1), getColor(row, column+2), getColor(row, column+3), getColor(row, column+4))){
        reportWin();
      }else{
        continue;
      }
    }
  }
  //console.log("hoz cheched");
}

function chechDiadown(){
  for (var row = 0; row < 13; row++){
    for(var column = 0; column < 13; column++){
      if(colorMatchCheck(getColor(row, column), getColor(row+1, column+1), getColor(row+2, column+2), getColor(row+3, column+3), getColor(row+4, column+4))){
        reportWin();
      }else{
        continue;
      }
    }
  }
}

function chechDiaup(){
  for (var row = 4; row < 17; row++){
    for(var column = 0; column < 13; column++){
      if(colorMatchCheck(getColor(row, column), getColor(row-1, column+1), getColor(row-2, column+2), getColor(row-3, column+3), getColor(row-4, column+4))){
        reportWin();
      }else{
        continue;
      }
    }
  }
}

function updateSpan(){
  if (move % 2 == 1){
    span.textContent = "●";
    span.style.color = "white";
  }else{
    span.textContent = "●";
    span.style.color = "black";
  }
}

function clearBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
    squares[i].style.color = "grey"
  }
  gameNumber ++;
  if (gameNumber % 2 === 1){
    move = 1;
  }else{
    move = 0;
  }
  updateSpan();
}

function changeClick(){
  if(this.textContent === ''){
    move++;
    if (move % 2 === 1){
      this.textContent = '●';
      this.style.color = "black";
    }else{
      this.textContent = '●';
      this.style.color = "white";
    }
    //console.log(this.cellIndex);
    chechhorizontal();
    checkVertical();
    chechDiaup();
    chechDiadown();
    updateSpan();
  }
}

restart.addEventListener('click', clearBoard);

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeClick);
}

clearBoard();
