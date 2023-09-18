//CRIAR OBJETOS E VARIÁVEIS
const obj_html_body = document.querySelector("body");
const obj_exibe_data = document.querySelector("#exibe_data");
const obj_form_importar = document.querySelector("#form_importar");
const obj_form_saldo = document.querySelector("#form_saldo");
const obj_form_extrato = document.querySelector("#form_extrato");
const obj_link_importar = document.querySelector("#link_importar");
const obj_link_saldo = document.querySelector("#link_saldo");
const obj_link_extrato = document.querySelector("#link_extrato");
const obj_link_home = document.querySelector("#link_home");
const obj_home = document.querySelector("#home");
const obj_imp = document.querySelector("#imp");
const obj_res_imp = document.querySelector("#res_imp");
const obj_saldo = document.querySelector("#saldo");
const obj_ext = document.querySelector("#ext");
const obj_res_ext = document.querySelector("#res_ext");

const obj_input_sel_arq = document.querySelector("#input_sel_arq");
const obj_tab_geral = document.querySelector("#tab_geral");
const conteudo_arq = FileReader();


//EVENTO
obj_html_body.addEventListener('load', funPreencherData(), funLimparFormularios());

obj_link_importar.addEventListener('click', function (){
    funExibir("#imp");
    funTelaResImp();
});
obj_link_saldo.addEventListener('click', function (){
    funExibir("#saldo");
    funTelaSaldo();
});
obj_link_extrato.addEventListener('click', function (){
    funExibir("#ext");
    funTelaExtrato();
});
obj_link_home.addEventListener('click', function (){
    funEsconderTudo();
    funTelaHome();
});

//FUNÇÕES
function funPreencherData(){
    let data_hora = new Date;
    obj_exibe_data.innerHTML = data_hora.toLocaleDateString('pt-br');
}

function funLimparFormularios(){
    obj_form_importar.reset();
    obj_form_importar.reset();
    obj_form_importar.reset();
}

function funEsconderTudo(){
    obj_home.setAttribute('class', 'esconde');
    obj_imp.setAttribute('class', 'esconde');
    obj_res_imp.setAttribute('class', 'esconde');
    obj_saldo.setAttribute('class', 'esconde');
    obj_ext.setAttribute('class', 'esconde');
    obj_res_ext.setAttribute('class', 'esconde');
}

function funExibir(par_tela){
    funEsconderTudo();
    document.querySelector(par_tela).setAttribute('class', 'container');
}

function funTelaHome(){
    obj_home.setAttribute('class', 'exibe');
}

function funTelaResImp(){
    obj_res_imp.setAttribute('class', 'container');
}
