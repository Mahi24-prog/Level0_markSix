var inputText = document.querySelector("#input-txt");
var transBtn = document.querySelector(".trans-btn");
var outputText = document.querySelector("#output-txt");

var url = "https://api.funtranslations.com/translate/minion.json";


transBtn.addEventListener("click", translate)

function convertUrl(txt){
    return url + "?" + "text=" + txt;
}

function translate(){
    var finalUrl = convertUrl(inputText.value)

    fetch(finalUrl).then(Response => Response.json()).then(json => {outputText.innerText = json.contents.translated}).catch((err)=>{console.log(err)})
}