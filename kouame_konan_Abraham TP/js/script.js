window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('numberForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const number = document.getElementById('numberInput').value;
        const result = printLetrres(number);
        document.getElementById('result').innerText = `Le nombre entré est: ${result}`;
        setTimeout(() => {
            showModal();
        }, 3000);
        
    });

    function showModal() {
        document.getElementById('questionnaireModal').classList.remove('hidden');
    }
    addModalButton();
    function addModalButton(){
        document.getElementById('addModalButton').addEventListener('click', function() {
            console.log("ok")
            document.getElementById('questionnaireModal').classList.add('hidden');
            const inputs = document.querySelectorAll('#numberForm input');
            inputs.forEach(input => {
                input.value = '';
            });
           
        });
    }
    document.getElementById('closeModalButton').addEventListener('click', function() {
        document.getElementById('questionnaireModal').classList.add('hidden');
    });

})
console.log(navigator.userAgent)
console.log('cookies: '+(navigator.cookieEnabled ? 'enabled' : 'disabled',navigator.cookieEnabled))
console.log("language : ",navigator.language)
console.log("platform : ",navigator.platform)
console.log("plugin : ",navigator.plugins)

console.log('location',window.locationbar)
console.log('name :',window.name)
console.log('outerHeight :',window.outerHeight)
console.log("menu : ",window.menubar)
console.log("opener : ",window.opener)
console.log('anchor', document.anchors)
console.log()
function printLetrres(number) {

    const enLettre = {
        0:'zero', 
        1:'un', 
        2:'deux', 
        3:'trois', 
        4:'quatre', 
        5:'cinq', 
        6:'six', 
        7:'sept', 
        8:'huit', 
        9:'neuf', 
        10:'dix', 
        11:'onze', 
        12:'douze', 
        13:'treize', 
        14:'quatorze', 
        15:'quinze', 
        16:'seize', 
        17:'dix-sept', 
        18:'dix-huit', 
        19:'dix-neuf',
        20:'vingt',
        30:'trente',
        40:'quarante',
        50:'cinquante',
        60:'soixante',
        70:'soixant-dix',
        80:'quatre-vingt',
        90:'quatre-vingt-dix',
        100:'cent',

    }
        const result =  enLettre[number];
        if( enLettre[number]){
            return result
        }
        else{

            let convert = number.toString().split('');
            let indiceOne = parseInt(convert[0]);
            let result = '';
            if(indiceOne){
                if(indiceOne === 7){
                    const initLettre = enLettre[(indiceOne)*10].split('-')[0]
                    result+= initLettre + '-'
                }
                else if (indiceOne === 9){
                     result+= enLettre[(indiceOne-1)*10] + '-'
                }
                else{
                     result+= enLettre[indiceOne*10] + '-'
                }
            }
            let newTab = convert.slice(1);
            for (let i = 0; i < newTab.length; i++) {
                let indice = parseInt(newTab[i]);
                if(indiceOne === 7 || indiceOne === 9){
                    indice += 10
                }
                result += enLettre[indice];
            }
            return result

        }
   

}

