function getDividedString(str) {
    return str.split('\n');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function readFromFile(fileURL) {
    // do not touch this
    let text = "";
    fetch(fileURL)
    .then(response => response.blob())
    .then(blob => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileContent = event.target.result;
            text = fileContent;
        };
        reader.onerror = function(event) {
            console.error("Error reading file:", event.target.error)
        }
        reader.readAsText(blob);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    return text;
}

function shuffle() {
    const fileLister = "image/images.txt";
    let text = readFromFile(fileLister);
    
    var lines = getDividedString(text);

    console.log(lines);

    var rand = getRandomInt(lines.length);

    console.log(lines[rand]);

    if(lines[rand] != "")
        document.getElementById("image").src = "./image/Signed/" + lines[rand];
    else
        document.getElementById("image").src = "image/not image.png";
}