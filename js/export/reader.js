export function getDividedString(str) {
    return str.split('\n');
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function readFromFileURL(fileURL) {
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

export async function getListFromFile() {
    try {
        text = await readFromFileURL("https://ivan-krul.github.io/ReferenceRandomizer/image/images.txt");
        return getDividedString(text);
    } catch (error) {
        console.error("Error during shuffle:", error);
    }
}