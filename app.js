window.onload = function() {
    var searchButton = document.getElementById('searchBtn');
    var searchField = document.getElementById('search');
    var resultDiv = document.getElementById("heroLst");  // Updated to target the correct element for displaying results
    var request;

    var form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission on Enter key
    });

    searchButton.addEventListener("click", function() {
        request = new XMLHttpRequest();

        var query = searchField.value.trim();
        var url = "http://localhost/info2180-lab4/superheroes.php?query=" + encodeURIComponent(query);
        console.log(url);

        request.open('GET', url, true);
        request.send();

        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    var response = request.responseText;
                    resultDiv.innerHTML = response;  // Display response in result div
                } else {
                    alert("Error, Unable to generate list!");
                }
            }
        };
    });
};