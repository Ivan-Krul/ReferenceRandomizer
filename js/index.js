function shuffle() {
    document.getElementById("image").src = "./image/Signed/@AnnasVirtual 0.jpg";
    console.log(document.getElementById("image").src);

    const fileLister = "image/images.txt";

    fetch(fileLister)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileContent = event.target.result;
                console.log(fileContent);
            };
            reader.onerror = function(event) {
                console.error("Error reading file:", event.target.error)
            }
            reader.readAsText(blob);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
}