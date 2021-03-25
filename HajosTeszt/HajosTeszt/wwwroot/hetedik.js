window.onload = letöltés()

var kérdés;
var jelenlegikérdés = 0;

function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdés = d;
        kérdésMegjelenítés(0)
    }
}
function kérdésMegjelenítés(k) {
    let ide_kerdes = document.getElementById("kérdés_szöveg");
    ide_kerdes.innerHTML = kérdés[k].questionText;
    console.log('$ {kérdés.length} kérdés érkezett}')
    for (var i = 1; i < 4; i++) {
        let elem_kérdés = document.getElementById("válasz" + i)
        elem_kérdés.innerText = kérdés[k]["answer" + i]
    }

    document.getElementById("kép2").src = "https://szoft1.comeback.hu/hajo/" + kérdés[k].image
}

function kattelőre() {
    jelenlegikérdés++;
    kérdésMegjelenítés(jelenlegikérdés);
}

function kattvissza() {
    jelenlegikérdés--;
    kérdésMegjelenítés(jelenlegikérdés);
}