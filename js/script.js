//Criando tags
let $body = document.querySelector("body");
let $label = document.createElement("label");
let $input = document.createElement("input")
let $span = document.createElement("span");
let $ionIcon = document.createElement("ion-icon");
let $img = document.createElement("img");

//Atributos
$input.setAttribute("type", "checkbox");
$ionIcon.setAttribute("name", "bulb-outline");
$img.setAttribute("src", "img\\bulb_off.jpg");

//Appends
$span.append($ionIcon);
$label.append($input);
$label.append($span);
$body.append($label);
$body.append($img);

//Função
$input.onchange = function(){

    if($img.getAttribute("src") == "img\\bulb_off.jpg"){
        $img.setAttribute("src", "img\\bulb_on.jpg");
    }
    else{
        $img.setAttribute("src", "img\\bulb_off.jpg");
    }
}