window.onload= function(){
var button = document.getElementById("btn");
var result= document.getElementById("result");
var searchValue=document.getElementById("search");

button.addEventListener("click",function(){
    Req = new XMLHttpRequest();
    var url="http://localhost/info2180-lab4/superheroes.php?query="+searchValue.value+"";
    Req.open('GET',url);
    Req.send();
    Req.onreadystatechange=respond;
});
function respond() {
    if (Req.readyState === XMLHttpRequest.DONE) {
      if (Req.status === 200) {
        result.innerHTML=Req.responseText;
      } else {
        alert('Error');
      }
    }
  }
}
