let repartoCalc = document.getElementById('repartoCalc')

repartoCalc.addEventListener('submit', calcReparto)

function getValues() {
    let zona = document.getElementById('zona').value,
        entregas = document.getElementById('entregas').value,
        cajas = document.getElementById('cajas').value,
        pallets = document.getElementById('pallets').value,
        peso = document.getElementById('peso').value

    return { zona, entregas, pallets, cajas, peso }
}

function calcReparto(e) {
    e.preventDefault();

    const { zona, entregas, pallets, cajas, peso } = getValues()

    let bultos = parseInt(pallets) + parseInt(cajas)
    let costo = parseInt(peso) * 14

    UI(zona, entregas, costo)
}

function UI(zona, entregas, costo) {
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML += `
    <div class="container-data row">
      <div class="col s4">
        <h6>${zona}</h6>
      </div>
      <div class="col s4">
        <h6>${entregas}</h6>
      </div>
      <div class="col s4">
        <h6 id="costo"><strong>${costo}</strong></h6> 
      </div>
    </div>
  `
    result.appendChild(dataPrint)

    reset()
}

function reset() {
    document.getElementById('repartoCalc').reset()
}

function balanceColours() {

    const { costo } = getValues()


    if (costo < 0) {
        document.getElementById('costo').classList.add('red')
    }
    else if (costo > 0) {
        document.getElementById('costo').classList.add('green')
    }
}