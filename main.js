
function validador(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    if(email === ''){
        window.alert("Preencha o campo email por favor");
        email = null;
    }else if(password === ''){
        window.alert("Preencha o campo senha por favor")
        password = null;
    }
   

}
function validador2(){
    const email = document.getElementById('email2').value;
    const password = document.getElementById('pwd2').value;
    const telefone = document.getElementById('telefone')
    const termo = document.getElementById('invalidCheck2').value;
    
    if(email === ''){
        window.alert("Preencha o campo email por favor");
        email = null;
    }else if(password === ''){
        window.alert("Preencha o campo senha por favor");
        password = null;
    }else if(telefone === ''){
        window.alert("Prencha o campo telefone por favor");
        telefone = null;
    }

}

