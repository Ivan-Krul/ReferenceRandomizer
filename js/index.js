function getDividedString(str) {
    return str.split('\n');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function readFromFileURL(fileURL) {
    return new Promise((resolve, reject) => {
      fetch(fileURL)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onload = function (event) {
            const text = event.target.result;
            console.log(event.target.result);
            resolve(text);
          };
          reader.onerror = function (event) {
            console.error("Error reading file:", event.target.error);
            reject(event.target.error);
          };
          reader.readAsText(blob);
        })
        .catch(error => {
          console.error("Error:", error);
          reject(error);
        });
    });
  }

function pushToDocument(lines)
{
    var rand = getRandomInt(lines.length);

    console.log(lines)
    console.log(lines[rand])

    if(lines[rand] != "")
        document.getElementById("image").src = "./image/Signed/" + lines[rand];
    else
        document.getElementById("image").src = "image/not image.png";
}

async function shuffle() {
    try {
      const text = await readFromFileURL("https://ivan-krul.github.io/ReferenceRandomizer/image/images.txt");
      console.log(text);
      const lines = getDividedString(text);
      pushToDocument(lines);
    } catch (error) {
      console.error("Error during shuffle:", error);
    }
  }
