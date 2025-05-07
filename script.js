const exibir = document.getElementById("exibir");
const gerar = document.getElementById("gerar");

const citacoes = [
    "A persistência realiza o impossível. - Albert Einstein",
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "O sucesso não é final, o fracasso não é fatal: o que conta é a coragem de continuar. - Winston Churchill",
    "A imaginação é mais importante que o conhecimento. - Albert Einstein",
    "Para ter sucesso, sua vontade de vencer deve ser maior do que seu medo de falhar. - Bill Cosby",
    "Não espere por oportunidades extraordinárias. Agarre as ocasiões comuns e as faça grandes. Homens fracos esperam por oportunidades; homens fortes as criam. - Orison Swett Marden",
    "Acredite em seus sonhos e eles se tornarão realidade. Acredite em si mesmo e você também. - Autor Desconhecido",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
];

gerar.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * citacoes.length)
    const citacoesAleatorias = citacoes[randomIndex]
    exibir.textContent = citacoesAleatorias
})

function citacaoInicial() {
    const randomIndex = Math.floor(Math.random() * citacoes.length)
    exibir.textContent = citacoes[randomIndex]
}

window.onload = citacaoInicial