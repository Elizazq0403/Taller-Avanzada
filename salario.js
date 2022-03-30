let navesVendidas,comision
let salario = 0; comision = 0; navesVendidas = 0;

    navesVendidas = 5;

    if(navesVendidas>1){
        comision=(navesVendidas * 1425000);
    } else {
        comision=0;
    }

salario= (3500000) + (comision);

console.log(`El salario total devengado del Vendedor1 fue ${salario}`);


