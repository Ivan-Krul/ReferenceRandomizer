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

async function getListFromFile() {
  try {
    text = await readFromFileURL("https://ivan-krul.github.io/ReferenceRandomizer/image/images.txt");
    return getDividedString(text);
  } catch (error) {
    console.error("Error during shuffle:", error);
  }
}

async function getAllAuthorsInDoc() {
  var listFile = await getListFromFile();

  var docList = document.getElementById("list");

  var authorList = [];

  for (var i = 0; i < listFile.length; i++) {
    var listFileElem = listFile[i];
    var res;

    if (listFileElem.split(' ')[0].indexOf("u-") == 0 && listFileElem.split(' ')[0].indexOf("u-") != null)
      res = "u/" + listFileElem.split(' ')[0].split('u-')[1];
    else if (listFileElem[0] == '@')
      res = listFileElem.split(' ')[0];
    else if (listFileElem.split(' ')[0].indexOf("t-") == 0 && listFileElem.split(' ')[0].indexOf("t-") != null)
      res = listFileElem.split(' ')[0];
    else
      res = listFileElem.split(' ')[0];

    var findRes = authorList.find(el => el === res);

    if(findRes === undefined)
      authorList.push(res);
  }

  for (let index = 0; index < authorList.length; index++) {
    const author = authorList[index];
    var listItem = document.createElement("li");
    listItem.innerText = author;
    docList.appendChild(listItem);
  }

}

getAllAuthorsInDoc();
