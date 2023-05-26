var nome
var selecao 
var selecaodisciplina
var selecaomencao

function cadastrar() {
    nome = document.getElementById('inputnome').value 
    document.getElementById('nomealuno').textContent = nome

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    selecao = document.getElementById('mencao')
    selecaomencao = selecao.options[selecao.selectedIndex].value

    localStorage.setItem(selecaodisciplina selecaomencao)
    )

function listar() {
    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    localStorage.getItem(selecaodisciplina)

    document.getElementById('exibirdisciplina').textContent = selecaodisciplina
}
