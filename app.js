const getTranslate = async (sourceLang = en, targetLang = tr, text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", sourceLang);
  encodedParams.append("target_language", targetLang);
  encodedParams.append("text", text);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "6f187ef237msh7b980ee80cf863ep100180jsne5c62ac0c300",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: encodedParams,
  };

  const response = await fetch(
    "https://text-translator2.p.rapidapi.com/translate",
    options
  );
  const data = await response.json();
  return data.data.translatedText;
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));
};

const subBtn = document.getElementById("subBtn");
const input = document.getElementById("input");
const output = document.getElementById("output");

let sourceLang = "en";
let targetLang = "tr";

let langTr = "Turkish";
let langEn = "English";
let langForm = document.getElementById("langForm");
let langTo = document.getElementById("langTo");

let buttonText1= document.getElementById("buttonText1");
let buttonText2= document.getElementById("buttonText2");
const changeLang = () => {
  console.log("calıstım");
  let change = sourceLang;
  sourceLang = targetLang;
  targetLang = change;

  let changLang = langTr;
  langTr = langEn;
  langEn = changLang;

  langForm.innerHTML = langEn;
  langTo.innerHTML = langTr;
  buttonText1.innerHTML=langEn;
  buttonText2.innerHTML=langTr;
  
};

const getTranslateText = async () => {
    console.log("calıstım");
    const result = await getTranslate(sourceLang, targetLang, input.value);
    output.innerHTML = result;
};

function eventListeners() {
  subBtn.addEventListener("click", getTranslateText);
  changeBtn.addEventListener("click", changeLang);
}

eventListeners();
