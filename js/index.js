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

    console.log(lines[rand])

    if(lines[rand] != "")
    {
        var a = document.getElementById("author-link")
        document.getElementById("image").src = "./image/Signed/" + lines[rand];

        if(lines[rand].split(' ')[0].indexOf("u-") == 0 && lines[rand].split(' ')[0].indexOf("u-") != null)
        {
            var res =  lines[rand].split(' ')[0].split('u-')[1];
            a.href = "https://reddit.com/user/" + res;
            a.innerText = "u/" +res;
            document.getElementById("author").innerText = "Author: "+ "u/" + res;
        }
        else if(lines[rand][0] == '@')
        {            
            a.href = "https://twitter.com/" + lines[rand].split(' ')[0];
            a.innerText = lines[rand].split(' ')[0];
        }
        else
        {
            a.innerText = "Author: "+ lines[rand].split(' ')[0];
        }
    }
    else
    {
        document.getElementById("image").src = "image/not image.png";
        document.getElementById("author").innerText = "Author: nothing";
    }

    
}

async function shuffle() {
    try {
      const text = await readFromFileURL("https://ivan-krul.github.io/ReferenceRandomizer/image/images.txt");
      const lines = getDividedString(text);
      pushToDocument(lines);
    } catch (error) {
      console.error("Error during shuffle:", error);
    }
  }
