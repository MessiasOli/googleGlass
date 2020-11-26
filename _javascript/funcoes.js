function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}

document.getElementById("menu").onmouseout = function(){
    var html = document.URL;
    if(html.includes("index"))
        document.getElementById("icone").src = "_imagens/glass-oculos-preto-peq.png";
    if(html.includes("specs"))
        document.getElementById("icone").src = "_imagens/especificacoes.png";
    if(html.includes("multimidia"))
        document.getElementById("icone").src = "_imagens/multimidia.png";
    if(html.includes("google-glass"))
        document.getElementById("icone").src = "_imagens/glass-oculos-preto-peq.png";
    if(html.includes("fotos"))
        document.getElementById("icone").src = "_imagens/fotos.png";
    if(html.includes("fale-conosco"))
        document.getElementById("icone").src = "_imagens/contato.png";
}