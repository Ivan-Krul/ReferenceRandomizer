import { getListFromFile } from "./export/reader.js";

function pushToDocument(lines) {
  var rand = getRandomInt(lines.length);

  console.log(lines[rand])

  if (lines[rand] != "") {
    var a = document.getElementById("author-link")
    document.getElementById("image").src = "./image/Signed/" + lines[rand];

    if (lines[rand].split(' ')[0].indexOf("u-") == 0 && lines[rand].split(' ')[0].indexOf("u-") != null) {
      var res = lines[rand].split(' ')[0].split('u-')[1];
      a.href = "https://reddit.com/user/" + res;
      a.innerText = "u/" + res;
    }
    else if (lines[rand][0] == '@') {
      a.href = "https://twitter.com/" + lines[rand].split(' ')[0].split("@")[1];
      a.innerText = lines[rand].split(' ')[0];
    }
    else if (lines[rand].split(' ')[0].indexOf("t-") == 0 && lines[rand].split(' ')[0].indexOf("t-") != null) {
      a.href = "https://tumblr.com/" + lines[rand].split(' ')[0].split("t-")[0];
      a.innerText = lines[rand].split(' ')[0];
    }
    else {
      a.innerText = "Author: " + lines[rand].split(' ')[0];
    }
  }
  else {
    document.getElementById("image").src = "image/not image.png";
    document.getElementById("author").innerText = "Author: nothing";
  }
}

async function shuffle() {
  const text = await getListFromFile();
  pushToDocument(lines);
}
