let nomeHeroi = "";
let heroiXP = 1;
let heroiNivel = ""; 



// Verifica o nível do herói com base na XP
if (heroiXP <= 1000) {
    heroiNivel = "Ferro"; 
}else if (heroiXP >= 1001 && heroiXP <= 2000){
    heroiNivel = "Bronze";
}else if (heroiXP >= 2001 && heroiXP <= 5000){
    heroiNivel = "Prata";
}else if (heroiXP >= 5001 && heroiXP <= 7000){
    heroiNivel = "Ouro";
}else if (heroiXP >= 7001 && heroiXP <= 8000){
    heroiNivel = "Platina";
}else if (heroiXP >= 8001 && heroiXP <= 9000){
    heroiNivel = "Ascendent";
}else if (heroiXP >= 9001 && heroiXP <= 10000){
    heroiNivel = "Imortal";
}else {
    heroiNivel = "Radiante";
}

// Exibe o nível do herói
console.log(`O herói de nome ${nomeHeroi} é de nível: ${heroiNivel}.`);