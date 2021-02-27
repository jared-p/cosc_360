function setColour(e){
    if( e.target.type != "submit" && e.target.type != "reset"){
        if ( e.target.value == ""){
            e.target.style.backgroundColor = "red";
        }else{
            e.target.style.backgroundColor = "white";
        }
    }
}
function selectColour(e){
    if( e.target.value == "Choose country" || e.target.value == "Choose continent")
        e.target.style.backgroundColor = "red";
    else
        e.target.style.backgroundColor = "white";
}
function validateForm(e){
    var req = document.querySelectorAll(".required");
    for( i = 0; i < req.length; i++){
        if( req[i].value == "")
            e.preventDefault();
    }
}
window.addEventListener("load", function(){
    var blank_field = document.querySelectorAll("input");
    for(i=0; i<blank_field.length; i++){
        if (blank_field[i].value == "" &&  blank_field[i].type != "submit" && blank_field[i].type != "reset"){
            blank_field[i].style.backgroundColor = "red";
        }
        if( blank_field[i].type == "text"){
            blank_field[i].addEventListener( "keydown", setColour);
            blank_field[i].addEventListener( "keyup", setColour);    
        }
        blank_field[i].addEventListener( "change", setColour);
    }
    var textNode = document.querySelector("textarea");
    if( textNode.value == "")
        textNode.style.backgroundColor = "red";
    textNode.addEventListener("keydown", setColour);
    textNode.addEventListener("keyup", setColour);
    var select = document.querySelectorAll("select");
    for( i = 0; i < select.length ; i++){
        if(select[i].value == "Choose continent" || select[i].value == "Choose country")
            select[i].style.backgroundColor = "red";
        select[i].addEventListener("change", selectColour);
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
    var req = document.querySelectorAll(".required");
    for ( i = 0; i < req.length; i++)
        req[i].addEventListener("change", validateForm);
    
});