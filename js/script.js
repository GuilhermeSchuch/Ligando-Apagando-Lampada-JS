//Criando tags
let $body = document.querySelector("body");
let $label = document.createElement("label");
let $input = document.createElement("input")
let $span = document.createElement("span");
let $ionIcon = document.createElement("ion-icon");
let $img = document.createElement("img");
let opacidade = document.createElement("div");

//Atributos
$input.setAttribute("type", "checkbox");
$ionIcon.setAttribute("name", "bulb-outline");
$img.setAttribute("src", "img\\bulb_off.jpg");
opacidade.setAttribute("class", "opacidade-on");

//Appends
$span.append($ionIcon);
$label.append($input);
$label.append($span);
$body.append($label);
$body.append($img);
$body.append(opacidade);

//Função
$input.onchange = function(){

    if($img.getAttribute("src") == "img\\bulb_off.jpg"){
        $img.setAttribute("src", "img\\bulb_on.jpg");
        $body.setAttribute("class", "background-white");
        opacidade.setAttribute("class", "opacidade-off");
    }
    else{
        $img.setAttribute("src", "img\\bulb_off.jpg");
        $body.setAttribute("class", "background-black");
        opacidade.setAttribute("class", "opacidade-on");
    }
}