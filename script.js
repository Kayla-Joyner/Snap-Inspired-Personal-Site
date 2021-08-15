// reveals text and unfills box
function revealText(){
  var chatBox=document.getElementsByClassName("box")[0];
  // var chatTail=document.getElementsByClassName("tail")[0];
  var chatTailAfter=document.getElementsByClassName(".tail:after");
  chatBox.style.background="transparent";
  // chatTail.style.background="transparent";
  chatTailAfter.style.display="show";
  console.log(chatBox)
}
