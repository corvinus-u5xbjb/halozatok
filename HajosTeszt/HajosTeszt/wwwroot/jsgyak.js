window.onload = () => {



    var faktoriális = function (n) {
        let er = 1;
        for (let i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
    }


    let hova = document.getElementById("ide")
    hova.innerHTML = ""

    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        hova.appendChild(sor);
        sor.classList.add("egymás_mellé")

        for (var o = 0; o <= s; o++) {

            let szám = document.createElement("button")
            sor.appendChild(szám)
            szám.innerText = faktoriális(s) / (faktoriális(o) * (faktoriális(s - o)))
            szám.style.background = `rgb(${82/10 * s},101,${179/10 * o})`

        }
    }
}