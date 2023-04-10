const bikes = [
    {
        nome : 'bici da città',
        peso : 10,
    },
    {
        nome : 'bici da corsa',
        peso : 5,
    },
    {
        nome : 'bici ibrida',
        peso : 8,
    },
    {
        nome : 'mountain bike',
        peso : 9,
    },
    {
        nome : 'bici pieghevole',
        peso : 12,
    },
]

const stamp = document.querySelector('.output')

bikes.map(pesoMin =>{
    const {nome, peso} = pesoMin
    console.log(nome,peso); 
    const output = `
    <div>Nome : ${nome}</div>
    <div>Peso : ${peso}</div> 
    `
    stamp.innerHTML = output
})