
function retornarEnLetrasPractico(numero) {
    const enumLista = [
            ["0","cero"],
            ["2","dos"],
            ["1","uno"],
            ["3","tres"],
            ["4","cuatro"],
            ["6","seis"],
            ["5","cinco"],
            ["7","siete"],
            ["9","nueve"],
            ["8","ocho"]];

    let outputArray = []
    const numberString = numero.toString();
    const arrayString = numberString.split("");

    arrayString.forEach(digit => {
        enumLista.forEach((subArray, index) => {
            if(subArray[0] == digit){
                outputArray.push(subArray[1])
            }
        })

    });
    return outputArray;
        

        


}

const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let number = document.getElementById('input-number');
    if(number.value === ''){
        alert('debes ingresar un numero')
    } else {
        let label = document.getElementById('h1-number');
        label.innerText = '';
        let resultado = retornarEnLetrasPractico(number.value);
        resultado.forEach((e) => { 
            label.innerText += ' ' + e;
        })

        console.log(label.textContent);
        form.reset();
        number.focus();
    }
})



