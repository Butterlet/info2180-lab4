window.onload = function() {
    // Corrected IDs to match the HTML file
    var searchButton = document.getElementById('search-btn');
    var searchField = document.getElementById('search-field');
    var resultDiv = document.getElementById("result");
    var request;

    searchButton.addEventListener("click", function() {
        request = new XMLHttpRequest();

        // Using the corrected input field ID
        var query = searchField.value.trim();
        var url = "http://localhost/info2180-lab4/superheroes.php?query=" + encodeURIComponent(query);
        console.log(url);

        request.open('GET', url, true);
        request.send();
        request.onreadystatechange = displaySuperHeroes;
    });

    function displaySuperHeroes() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var response = request.responseText;
                
                // Display the response in the correct result div
                resultDiv.innerHTML = response;
            } else {
                alert("Error, Unable to generate list!");
            }
        }
    }
};