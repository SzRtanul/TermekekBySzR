import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

letrehozTablazat();
osszesit();
document.getElementById("torol").addEventListener("click", function(){ torolEsemeny() });


// 1. feladat
function letrehozTablazat() {
    let s = "";
    for(let i = 0; i < GYUMOLCSOK.length; i++){
        s += `<button id=\"l_${GYUMOLCSOK[i].nev}\">${GYUMOLCSOK[i].nev} ${GYUMOLCSOK[i].tomeg} ${GYUMOLCSOK[i].ar}</button>`;
    }
    document.getElementById("feladat_1").innerHTML = s;
    
    for(let i = 0; i < GYUMOLCSOK.length; i++){
        document.querySelector(`#l_${GYUMOLCSOK[i].nev}`).addEventListener('click', function(){ vasarol(GYUMOLCSOK[i].nev) });
    }
}

// 2. feladat
function osszesit() {
    let kim = document.getElementById("feladat_2");
    let ossztomeg = 0, osszar = 0;
    GYUMOLCSOK.forEach(x => ossztomeg += x.ar);
    GYUMOLCSOK.forEach(x => osszar += x.tomeg);
    kim.innerHTML = `<p>A gyümölcsök súlya összesen: ${ossztomeg}</p>` +
                    `<p>A gyümölcsök ára összesen: ${osszar}</p>`;
}

// 3. feladat
function vasarol(zoldseg) {
    let kim = document.getElementById("feladat_3");
    if(!bennevan(vasarolt, zoldseg)){
        vasarolt.push(zoldseg);
        kim.innerHTML += `<br>${zoldseg}`;
    }
}

// 4. feladat
function torolEsemeny() {
    while(vasarolt.length > 0) {
        vasarolt.pop();
    }
    document.getElementById("feladat_3").innerHTML = "";
}

function bennevan(array, element){
    //"eldöntés" tétel
    let van = false;
    for(let i = 0; i < array.length && !van; i++){
        van = array[i] == element;
    }
    return van;
}