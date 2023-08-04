var cuentas = [
    {nombre: "Mali", saldo: 200, codigo: "101", cuenta: "0111", password: "0110"},
    {nombre: "Gera", saldo: 290, codigo: "101", cuenta: "0222", password: "0220"},
    {nombre: "Maui", saldo: 67, codigo: "101", cuenta: "0033", password: "0330"},
]
let cuentaLogeada = {nombre: "", saldo: 0, codigo: "000", cuenta: "", password: ""}

function añadirCuentas() {
    for (let i in cuentas) {    
        let select = document.getElementById("sMenuCuentas")
        let option = document.createElement('option')
        option.value = cuentas[i].cuenta
        option.text = cuentas[i].cuenta
        document.getElementById("sMenuCuentas").appendChild(option)
    }
}
function validarContraseña(){
    let cuentaIngresada = document.getElementById("sMenuCuentas").value
    let contraseñaIngresada = document.getElementById("inputContraseña").value

    console.log(cuentaIngresada + " "+contraseñaIngresada)

    for (let index = 0; index < cuentas.length; index++) {
        const cuentaEnCurso = cuentas[index];
        if(cuentaEnCurso.cuenta == cuentaIngresada && cuentaEnCurso.password == contraseñaIngresada){
            document.getElementById("Results").innerHTML=""
            cuentaLogeada = cuentaEnCurso
            console.log("Login Exitoso");
            document.getElementById("Opciones").style.display="block"   // Mostramos las opciones de la lista
            let bottonEjecutarOpcion = document.createElement("button")
            bottonEjecutarOpcion.type = "submit"
            bottonEjecutarOpcion.id = "btnEnviar"
            bottonEjecutarOpcion.textContent="Consultar"
            bottonEjecutarOpcion.addEventListener("click",operaciones)
            document.getElementById("MenuOpciones").appendChild(bottonEjecutarOpcion)
            break

        } else if(index == cuentas.length-1){
            console.log("La cuenta o la contraseña es erronea");
        }
    }
}

function operaciones() {

    let opcionElegida = document.getElementById("Opciones").value
    
    document.getElementById("Results").innerHTML=""

    if(opcionElegida == 1){
        let label = document.createElement("label")
        label.innerHTML = "Saldo Actual"
        document.getElementById("Results").appendChild(label)
        let input = document.createElement("Input")
        input.value=cuentaLogeada.saldo
        document.getElementById("Results").appendChild(input)
    
    }else if(opcionElegida == 2){

        if(cuentaLogeada.saldo > 9 && cuentaLogeada.saldo < 990){
            
            let labelIngresarSaldo = document.createElement("label")
            labelIngresarSaldo.innerHTML = "Ingresar saldo"
            document.getElementById("Results").appendChild(labelIngresarSaldo)

            let inputSaldo = document.createElement("Input")
            inputSaldo.value=cuentaLogeada.saldo
            document.getElementById("Results").appendChild(inputSaldo)

            let bottonAgregarSaldo = document.createElement("button")
            bottonAgregarSaldo.type = "submit"
            bottonAgregarSaldo.id = "btnEnviar"
            bottonAgregarSaldo.textContent="Agregar Saldo"
            bottonAgregarSaldo.onclick=()=>{
                cuentaLogeada.saldo += parseInt(inputSaldo.value)
                console.log(cuentaLogeada.saldo)
                window.alert("Nuevo saldo: "+cuentaLogeada.saldo)
            }
            document.getElementById("Results").appendChild(bottonAgregarSaldo)

        }

    }else{

        let labelRetirarSaldo = document.createElement("label")
        labelRetirarSaldo.innerHTML = "Ingresar saldo"
        document.getElementById("Results").appendChild(labelRetirarSaldo)

        let inputSaldoARetirar = document.createElement("Input")
        inputSaldoARetirar.value=cuentaLogeada.saldo
        document.getElementById("Results").appendChild(inputSaldoARetirar)

        let bottonSacarSaldo = document.createElement("button")
        bottonSacarSaldo.type = "submit"
        bottonSacarSaldo.id = "btnEnviar"
        bottonSacarSaldo.textContent="Retirar Saldo"
        bottonSacarSaldo.onclick=()=>{

            let resultadoTemporal = cuentaLogeada.saldo - parseInt(inputSaldoARetirar.value)

            if(resultadoTemporal >= 9){
                cuentaLogeada.saldo -= parseInt(inputSaldoARetirar.value)
                console.log(cuentaLogeada.saldo)
                window.alert("Nuevo saldo: "+cuentaLogeada.saldo)
            }else{
                console.log(cuentaLogeada.saldo)
                window.alert("No se puede retirar ese saldo. Saldo actual: "+cuentaLogeada.saldo)
            }
            
        }
        document.getElementById("Results").appendChild(bottonSacarSaldo)
    }

    
}
