function calculate() {
    let price = Number(document.getElementById("language").value);
    let lessons = Number(document.getElementById("lessons").value);
    let format = Number(document.getElementById("format").value);
    let result = price * lessons * format;
    document.getElementById("result").innerHTML =
        "Стоимость обучения: " + result + " руб.";
}