let valorHp;
let valorPotencia;
let valorTension;
let valorCorriente;
let frigorias;
let mensaje;
let tipoDeCalculo;
let nuevoCalculo;
let filtrarCalculo;
let filtrarFilter;
let baseDatos = [];

class TipoDeCalculo{
    constructor(tipoCalc, mensaje){
        this.tipoCalc=tipoCalc;
        this.mensaje=mensaje;
    }
}






let option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \n4- Frigorias a Corriente \nPresione X para finalizar.');


while(option != 'X' && option != 'x'){

    switch(option){
        case '1':
            tipoDeCalculo = 'corriente nominal';
            do{
                valorHp = prompt('HP de su motor')
                if(!isNaN(valorHp) == false){
                    alert('solo numeros porfavor')
                }
            }while(!isNaN(valorHp) == false)
            
            
            do{
                tipoDeMotor = prompt('Elegí una opción: \n1- monofasico. \n2 - trifasico.')
                if(!isNaN(tipoDeMotor) == false){
                    alert('solo numeros porfavor')
                }
                if(tipoDeMotor > 2){
                    alert('No mayor a 2')
                }else{
                    calc(valorHp, Number(tipoDeMotor))
                }
            }while(Number(tipoDeMotor) > 2 || !isNaN(tipoDeMotor) == false)
            
            
            function calc(hp, mt){
                if(mt == 1){
                    mensaje = `El consumo de su motor monofasico es de ${Math.floor(hp * 6)} Amperes`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)

                }
                if(mt == 2){
                    mensaje = `El consumo de su motor trifasico es de ${Math.floor(hp * 1.5)} Amperes`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
            }
            break;
        case '2':
            tipoDeCalculo = 'potencia';
            do{
                valorPotencia = prompt('ingrese la potencia')
                if(!isNaN(valorPotencia) == false){
                    alert('solo numeros porfavor')
                }
            }while(!isNaN(valorPotencia) == false)

            do{
                valorTension = prompt('Elegí la Tension: \n1 - 12v. \n2 - 24v. \n3 - 110v. \n4 - 220v. \n5 - 380v.')
                if(!isNaN(valorTension) == false){
                    alert('solo numeros porfavor')
                }
                if(valorTension > 5){
                    alert('No mayor a 5')
                }else{
                    calculadoraPotencia(Number(valorPotencia), Number(valorTension))
                }
            }while(Number(valorTension) > 5 || !isNaN(valorTension) == false)
     
            function calculadoraPotencia(potencia, tension){
                if(tension == 1){
                    mensaje = `el resultado de ${potencia}w dividido 12v es igual a = ${Math.floor(potencia / 12)}A`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 2){
                    mensaje = `el resultado de ${potencia}w dividido 24v es igual a = ${Math.floor(potencia / 24)}A`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 3){
                    mensaje = `el resultado de ${potencia}w dividido 110v es igual a = ${Math.floor(potencia / 110)}A`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 4){
                    mensaje = `el resultado de ${potencia}w dividido 220v es igual a = ${Math.floor(potencia / 220)}A`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 5){
                    mensaje = `el resultado de ${potencia}w dividido 380v es igual a = ${Math.floor(potencia / 380)}A`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
            }

            break;
        case '3':
            tipoDeCalculo = 'corriente';
            do{
                valorCorriente = prompt('ingrese la corriente')
                if(!isNaN(valorCorriente) == false){
                    alert('solo numeros porfavor')
                }
            }while(!isNaN(valorCorriente) == false)
            
            do{
                valorTension = prompt('Elegí la Tension: \n1 - 12v. \n2 - 24v. \n3 - 110v. \n4 - 220v. \n5 - 380v.')
                if(!isNaN(valorTension) == false){
                    alert('solo numeros porfavor')
                }
                if(valorTension > 5){
                    alert('No mayor a 5')
                }else{
                    calculadoraAmperaje(Number(valorCorriente), Number(valorTension))
                }
            }while(Number(valorTension) > 5 || !isNaN(valorTension) == false)

            function calculadoraAmperaje(corriente, tension){
                if(tension == 1){
                    mensaje = `el resultado de ${corriente}A multiplicado 12v es igual a = ${Math.floor(corriente * 12)}W`;
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 2){
                    mensaje = `el resultado de ${corriente}A multiplicado 24v es igual a = ${Math.floor(corriente * 24)}W`; 
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 3){
                    mensaje = `el resultado de ${corriente}A multiplicado 110v es igual a = ${Math.floor(corriente * 110)}W`; 
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 4){
                    mensaje = `el resultado de ${corriente}A multiplicado 220v es igual a = ${Math.floor(corriente * 220)}W`; 
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
                if(tension == 5){
                    mensaje = `el resultado de ${corriente}A multiplicado 380v es igual a = ${Math.floor(corriente * 380)}W`; 
                    alert(mensaje)
                    nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                    baseDatos.push(nuevoCalculo)
                }
            }
            break;
            case '4':
                tipoDeCalculo = 'frigorias';
                do{
                    frigorias = prompt('ingrese las frigorias')
                    if(!isNaN(frigorias) == false){
                        alert('solo numeros porfavor')
                    }
                }while(!isNaN(frigorias) == false)

                do{
                    valorTension = prompt('Elegí la Tension: \n1 - 220v.')
                    if(!isNaN(valorTension) == false){
                        alert('solo numeros porfavor')
                    }
                    if(valorTension > 5){
                        alert('No mayor a 5')
                    }else{
                        calculadoraFrigorias(Number(frigorias), Number(valorTension))
                    }
                }while(Number(valorTension) > 5 || !isNaN(valorTension) == false)

                function calculadoraFrigorias(frigorias, tension){
                    if(tension == 1){
                        mensaje = `el resultado de ${frigorias} frigorias dividido 860 dividido 220 dividido 2 es igual a = ${Math.floor(frigorias / 0.86 / 220 / 2)}A`;
                        alert(mensaje)
                        nuevoCalculo = new TipoDeCalculo(tipoDeCalculo, mensaje);
                        baseDatos.push(nuevoCalculo)
                    }
                }
                break;
        default:
            alert('Elegiste una opcion invalida');
            break; 
        }
        option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \n4- Frigorias a Corriente \nPresione X para finalizar.');
    }

    alert('Ahora podras filtrar los calculos por tipo')
    filtrarCalculo = prompt('Elige una opcion para filtrar: \n1- Filtrar Corriente nominal. \n2- Filtrar Potencia. \n3- Filtrar Amperaje. \n4- Filtrar Frigorias a Corriente \n5- todos los calculos \nPresione X para finalizar.')
    while(filtrarCalculo != 'X' && filtrarCalculo != 'x'){
        switch(filtrarCalculo){
            case '1':
                alert('elegiste Filtrar Corriente nominal')
                alert('si precionas "x" y te vas a la consola veras el resultado')
                filtrarFilter = baseDatos.filter(x => x.tipoCalc == 'corriente nominal')
                console.log(filtrarFilter)
                break;
                case '2':
                    alert('elegiste filtrar potencia')
                    alert('si precionas "x" y te vas a la consola veras el resultado')
                    filtrarFilter = baseDatos.filter(x => x.tipoCalc == 'potencia')
                    console.log(filtrarFilter)
                    break;
                    case '3':
                        alert('has elegido filtrar Amperaje')
                        alert('si precionas "x" y te vas a la consola veras el resultado')
                        filtrarFilter = baseDatos.filter(x => x.tipoCalc == 'corriente')
                        console.log(filtrarFilter)
                        break;
                        case '4':
                            alert('elegiste filtrar frigorias')
                            alert('si precionas "x" y te vas a la consola veras el resultado')
                            filtrarFilter = baseDatos.filter(x => x.tipoCalc == 'frigorias')
                            console.log(filtrarFilter)
                            break;
                            case '5':
                                alert('elegiste ver todos los calculos')
                                alert('si precionas "x" y te vas a la consola veras el resultado')
                console.log(baseDatos)
                break;
            default:
                alert('option incorrecta')
                break;
        }
        filtrarCalculo = prompt('Elige una opcion para filtrar: \n1- Filtrar Corriente nominal. \n2- Filtrar Potencia. \n3- Filtrar Amperaje. \n4- Filtrar Frigorias a Corriente \n5- todos los calculos \nPresione X para finalizar.')
    }


