import { poserUneQuestion } from "./tools/tools.js";

const tableau = [
    ["","",""],
    ["","",""],
    ["","",""]
];
let tour = 0;
let x = 0;
let y = 0;

const verifCaseVide = (tabl) => {
    for(const ta of tabl){
        for(const t of ta){
            if(t == ""){
                return true
            }
        }
    }
    return false
}

const verifLigne = (tabl) => {
        if(tabl[0][0] == tabl[0][1] && tabl[0][0] == tabl[0][2] && tabl[0][0] != "" && tabl[0][1] != "" && tabl[0][2] != ""){
            return true
        }
        if(tabl[1][0] == tabl[1][1] && tabl[1][0] == tabl[1][2] && tabl[1][0] != "" && tabl[1][1] != "" && tabl[1][2] != ""){
            return true
        } 
        if(tabl[2][0] == tabl[2][1] && tabl[2][0] == tabl[2][2] && tabl[2][0] != "" && tabl[2][1] != "" && tabl[2][0] != ""){
            return true
        }
        if(tabl[0][0] == tabl[1][0] && tabl[0][0] == tabl[2][0] && tabl[0][0] != "" && tabl[1][0] != "" && tabl[2][0] != ""){
            return true
        }
        if(tabl[0][1] == tabl[1][1] && tabl[0][1] == tabl[2][1] && tabl[0][1] != "" && tabl[1][1] != "" && tabl[2][1] != ""){
            return true
        } 
        if(tabl[0][2] == tabl[1][2] && tabl[0][2] == tabl[2][2] && tabl[0][2] != "" && tabl[1][2] != "" && tabl[2][2] != ""){
            return true
        }
        if(tabl[0][0] == tabl[1][1] && tabl[0][0] == tabl[2][2] && tabl[0][0] != "" && tabl[1][1] != "" && tabl[2][2] != ""){
            return true
        } 
        if(tabl[0][2] == tabl[1][1] && tabl[0][2] == tabl[2][0] && tabl[0][2] != "" && tabl[1][1] != "" && tabl[2][0] != ""){
            return true
        }
    return false
}

const morpion = async () => {

    while(verifCaseVide(tableau) == true){
        x = await poserUneQuestion(`Joueur  ${tour%2 == 0 ? "X" : "Y"} Entrez une coordonnée x`)
        y = await poserUneQuestion(`Joueur  ${tour%2 == 0 ? "X" : "Y"} Entrez une coordonnée y`)

        while(x<0 || x>2 || y<0 || y>2 || tableau[x][y] != ""){
            x = await poserUneQuestion(`Joueur  ${tour%2 == 0 ? "X" : "Y"} Entrez une coordonnée x`)
            y = await poserUneQuestion(`Joueur  ${tour%2 == 0 ? "X" : "Y"} Entrez une coordonnée y`) 
        }

        tableau[x][y] = tour%2 == 0 ? "X" : "Y"

        for(let ligne of tableau){
            for(let l of ligne){
                process.stdout.write(" |" + l + "| ");
            }
        console.log('\n')   
        }
        if(verifLigne(tableau) == true){
            console.log(`Joueur  ${tour%2 == 0 ? "X" : "Y"} à gagné`);
            break;
        }
        
        tour ++;
    }
}

morpion()