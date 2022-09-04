import fetch from "node-fetch";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const user = await rl.question('User: ');
const urlRanks = "https://armorydesbuissons.fr/api/rank?name="+user+"";
rl.close();

fetch(urlRanks)
.then((response) => response.json())
.then((data) => {
    let text = JSON.stringify(data);
    let datas = JSON.parse(text);
    let result = datas.result;
    result = result[0];
    try{
        console.log('')
        console.log('\x1b[36m%s\x1b[0m', "Name: ", result.lastPseudo);
        console.log('\x1b[36m%s\x1b[0m', "Division: ", result.division);
        console.log('\x1b[36m%s\x1b[0m', "Rank: ", result.rank);
        console.log('\x1b[36m%s\x1b[0m', "Score: ", result.score);
    } catch(error){
        console.error('\x1b[31m', 'Error', "Player Not Found")
    }
});

