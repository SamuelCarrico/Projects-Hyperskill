let text = document.getElementById("text_input");
const buttonToUpper = document.getElementById("upper-case");
const buttonToLower = document.getElementById("lower-case");
const buttonToProperCase = document.getElementById("proper-case");
const buttonToSentenceCase = document.getElementById("sentence-case");
const buttonSave = document.getElementById("save-text-file");
buttonSave.addEventListener("click", () => {
    download('text.txt', text.value);
});
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

buttonToUpper.addEventListener("click", () => {
    text.value = text.value.toUpperCase();
});

buttonToLower.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
});

buttonToProperCase.addEventListener("click", () => {
    let splitted = text.value.split("");
    for(let i = 0; i < splitted.length - 1; i++) {
        if(i === 0) {
            splitted.splice(i, 1, splitted[i].toUpperCase());
        }
        else if(splitted.at(i) === " ") {
            splitted.splice(i+1, 1, splitted[i+1].toUpperCase());
            i++;
        }
        else if(splitted.at(i) === splitted.at(i).toUpperCase()) {
            splitted.splice(i, 1, splitted[i].toLowerCase());
        }
        text.value = splitted.join("");
    }
});

buttonToSentenceCase.addEventListener("click", () => {
    let splitted = text.value.split("");
    for(let i = 0; i < splitted.length - 1; i++) {
        if(i === 0) {
            splitted.splice(i, 1, splitted[i].toUpperCase());
        }
        else if(splitted.at(i) === ".") {
            splitted.splice(i+2, 1, splitted[i+2].toUpperCase());
            i+=2;
        }
        else if(splitted.at(i) === splitted.at(i).toUpperCase()) {
            splitted.splice(i, 1, splitted[i].toLowerCase());
        }
        text.value = splitted.join("");
    }
});
