const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  

function buscaCortePorId(id) { 
    let qualCorte= []

    for (let i = 0; i < barbearia.cortes.length; i++){
            qualCorte = barbearia.cortes[i];
            if (qualCorte.id === id) {

                return qualCorte
            }
        }return "Corte não encontrado"
}


function buscaBarbaPorId(id) {
    let qualBarba = []

    for (let i = 0; i < barbearia.barbas.length; i++){
        qualBarba = barbearia.barbas[i];
        if (qualBarba.id === id) {

            return qualBarba
        }
    }return "Barba não encontrada"
}


function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return "Estamos abertos"

    }return "Estamos fechados"
}


function retornaTodosCortes() {
    let todosOsCortes = [];

    for (let i = 0; i < barbearia.cortes.length; i++) {
        todosOsCortes.push({tipo: barbearia.cortes[i].tipo, valor: barbearia.cortes[i].valor});
    }

    return todosOsCortes;
}

function retornaTodasBarbas() {
    let todasAsBarbas = [];

    for (let i = 0; i < barbearia.barbas.length; i++) {
        todasAsBarbas.push({tipo: barbearia.barbas[i].tipo, valor: barbearia.cortes[i].valor});
    }

    return todasAsBarbas;
}




function criaPedido(nomeCliente, corteId, barbaId) {
   
    let servicoDeCorte = buscaCortePorId(corteId);
    let servicoDeBarba = buscaBarbaPorId(barbaId);

   
        let pedido = {
            nome: nomeCliente,
            pedidoCorte: servicoDeCorte.tipo,
            pedidoCortePreco: servicoDeCorte.valor,
            pedidoBarba: servicoDeBarba.tipo,
            pedidoBarbaPreco: servicoDeBarba.valor
        };

        return pedido;
    
    }

console.log(meuPedido);

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].valor = valor;
            lista[i].tipo = tipo;
            return lista;  
        }
    }
}


function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}


