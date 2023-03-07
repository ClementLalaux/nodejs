import readline from "readline";
import {stdin,stdout} from "process";

const poserUneQuestion = async (question) => {
    console.log(question);
    const readlineInterface = readline.createInterface({
        input : stdin,
        output : stdout
    })
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value

    readlineInterface.close();
    return result

}

let test = await poserUneQuestion("Merci de saisir du texte : ")
console.log("Vous avez saisi : " + test)