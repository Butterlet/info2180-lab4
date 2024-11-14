window.onload= function(){
    var search = document.getElementById('searchBtn');
    var form = document.getElementsByTagName('form')[0];
    var result=document.getElementById("search");
    var request;

    search.addEventListener("click", function(){
        request = new XMLHttpRequest();

        var url="http://localhost/info2180-lab4/superheroes.php?query="+result.value+"";
        console.log(url);
        request.open('GET',url);
        request.send();
        request.onreadystatechange = displaySuperHeroes;

    });

    function displaySuperHeroes()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200){
                var response = request.responseText;
                var heroList = document.getElementById("heroLst")
                heroList.innerHTML = response;
            }
            else
            {
            alert("Error, Unable to generate list!");
            }
        }
    }   
};