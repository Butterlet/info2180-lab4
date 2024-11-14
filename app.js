document.getElementById("search-btn").addEventListener("click", function () {
    const query = document.getElementById("search-field").value.trim();

    // Sanitize the input to prevent malicious code injection
    const sanitizedQuery = encodeURIComponent(query);

    // Fetch data from superheroes.php with the query parameter
    fetch(`superheroes.php?query=${sanitizedQuery}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching superhero data:", error);
            document.getElementById("result").innerHTML = "An error occurred. Please try again.";
        });
});