import Swal from 'sweetalert2';

const formatearDinero = valor => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(valor);
}

const calcularTotal = (cantidad, meses) => {
    let total = 0;

    if(cantidad < 5000){
        total = cantidad * 1.5;
    }else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    }else{
        total = cantidad * 1.2;
    }

    if(meses === 6){
        total = total * 1.1;
    }else if(meses === 12){
        total = total * 1.2;
    }else if(meses === 24){
        total = total * 1.5;
    }

    return total;
}

const alerta = function(titulo, texto, icono){
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        confirmButtonText: 'ok'
    });
}

export {
    formatearDinero,
    calcularTotal,
    alerta
};