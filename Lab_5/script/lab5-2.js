function navigate (node) {
    if( node.childNodes.length == 1 && node.childNodes[0].nodeName == "#text"){
        createText(node);
        return;
    }
    if( node.childNodes.length == 0){
        if( node.nodeName == "#text"){
        }else{
            createText(node);
        }
    }else{
        createText(node);
        for( var i = 0; i < node.childNodes.length; i ++){
            //console.log(node.nodeName + " " + i + "/" + node.childNodes.length);
            navigate(node.childNodes[i]);
            //console.log(node.nodeName + " " + i + "/" + node.childNodes.length);
        }
    }
}

function createText(node){
    if( node.nodeName != "SPAN"){
        var newNode = document.createElement("span");
        newNode.innerHTML = node.nodeName;
        newNode.className = "hoverNode";
        node.appendChild(newNode);
        newNode.addEventListener("mousedown", clickFunction);
    }
}

function clickFunction(e) {
    var element = e.target.innerHTML;
    var id = e.target.parentNode.id;
    var outputId = (id == "") ? "No ID on tag" : id;
    alert("innerHTML: " + element +"\nID:" + outputId);
}

window.addEventListener("load", function() {
    var content = document.querySelectorAll("body > *");
    for( var i=0; i<content.length; i++){
        navigate(content[i]);
    }

});