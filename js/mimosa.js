vezes_clicado = 1
var variavel;


function animacao_mimosa(){
    if(vezes_clicado % 2 === 0){
        document.getElementById("callout").style.display = "none";
        document.getElementById("mimosa").style.animationIterationCount = "infinite";
        document.getElementById("mimosa").style.right = 40 + "px";
        vezes_clicado = vezes_clicado + 1;
        reset_falas_mimosa();
        return vezes_clicado 
        
    }
    else{
        document.getElementById("callout").style.display =  "block";
        document.getElementById("mimosa").style.animationIterationCount = 0;
        document.getElementById("mimosa").style.right = 225 + "px";
        vezes_clicado = vezes_clicado + 1;
        falas_mimosa();
        return vezes_clicado
        
    }

    
    
    
}


function falas_mimosa(){

    
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "Olá meu nome é Mimosa, muuuuito prazer!"; },100);
    
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "Eu fazia muuuuuito leite, até que um dia eu comecei a sentir dor e meu leite estava ruim."; },1800);
    
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "Um dia, meu dono chegou com uma caneca diferente. Alguns minutos depois de colocarem meu leite nessa caneca, algo aconteceu."; },5000);
        
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "A caneca soltou uma luzinha e o celular do meu dono apitou. Ele olhou o celular e então ele olhou pra mim e disse:"; },10000);
        
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "'Mimosinha minha querida, acho que sabemos o que você tem. Vamos trazer você de volta pra sua época de ouro.'"; },16000);
        
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "Então, depois disso um veterinário veio aqui e fizeram uns exames."; },20000);
            
        variavel = setTimeout(function(){ 
            document.getElementById("bubble").textContent = "Me deram alguns remédios e então melhorei e voltei à minha época de ouro. Muuuuito obrigado uaiCup!!"; },23000);

        }


function reset_falas_mimosa(){
    document.getElementById("bubble").textContent.remove();
    clearTimeout(variavel);
    variavel = "";
}
    
