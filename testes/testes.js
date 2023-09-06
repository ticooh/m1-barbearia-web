function testar(id){
    if(id == 1){
        let flag = false;
        for(let i = 1 ; i < 5 ; i++){
            console.log(i);
            let retorno = buscaCortePorId(i);
            if(retorno == undefined){
                flag = true;
            }else if(typeof retorno != 'object'){
                flag = true;
            }
            else if(retorno.id != barbearia.cortes[i].id ||
                retorno.tipo != barbearia.cortes[i].tipo ||
                retorno.valor != barbearia.cortes[i].valor
            ){
                flag = true;
            }
        }
        if(flag){
            danger(id);
        }else{
            success(id);
        }

    }else if(id == 2){
        let flag = false;
        for(let i = 1 ; i < 5 ; i++){
            console.log(i);
            let retorno = buscaCortePorId(i);
            if(retorno == undefined){
                flag = true;
            }else if(typeof retorno != 'object'){
                flag = true;
            }
            else if(retorno.id != barbearia.barbas[i].id ||
               retorno.tipo != barbearia.barbas[i].tipo ||
               retorno.valor != barbearia.barbas[i].valor
            ){
                flag = true;
            }
        }
        if(flag){
            danger(id);
        }else{
            success(id);
        }
    }else if(id == 3){
        let retorno = verificaStatusBarbearia();
        if((barbearia.estaAberto && retorno == "Estamos abertos") || !barbearia.estaAberto && retorno == "Estamos fechados"){
            success(id);
        }else if(retorno == undefined){
            danger(id);
        }else{
            danger(id);
        }
    }else if(id == 4){
        let retorno = retornaTodosCortes();
        if(retorno == undefined){
            danger(id);
        }else if(retorno[0].tipo == "Militar" && retorno[3].tipo == "Moicano"){
            success(id);
        }else{
            danger(id);
        }
    }else if(id == 5){
        let retorno = retornaTodasBarbas();
        if(retorno == undefined){
            danger(id);
        }else if(retorno[0].tipo == "Capitão Jack" && retorno[3].tipo == "Barba Baixa"){
            success(id);
        }else{
            danger(id);
        }
    }else if(id == 6){
        let teste1 = criaPedido('Thiago', 2, 2);
        let teste2 = criaPedido('Felipe', 1, 3);

        if(teste1 == undefined || teste2 == undefined || teste3 == undefined){
            danger(id);
        }else{
            let flag = false;
            if( teste1.nome != 'Thiago' || 
                teste1.pedidoCorte != 'Samurai' ||
                teste1.pedidoCortePreco != 35 ||
                teste1.pedidoBarba != 'Van Dyke' ||
                teste1.pedidoBarbaPreco != 20
            ){
                flag == true;
            }else if(teste2.nome != 'Felipe' || 
                teste2.pedidoCorte != 'Militar' ||
                teste2.pedidoCortePreco != 20 ||
                teste2.pedidoBarba != 'Barba Média' ||
                teste2.pedidoBarbaPreco != 20
            ){
                flag == true;
            }

            if(flag){
                danger(id);
            }else{
                success(id);
            }
        }
    }else if(id == 7){

    }else if(id == 8){
        
    }
} 


function danger(id){
    let btn = document.querySelector(`#section_${id} > button`);
    btn.classList.remove('btn-primary');
    btn.classList.remove('btn-success');
    btn.classList.add('btn-danger');
    btn.innerHTML = '❌';
}
function success(id){
    let btn = document.querySelector(`#section_${id} > button`);
    btn.classList.remove('btn-primary');
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-success');
    btn.innerHTML = '✅';
}