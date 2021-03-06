/* jQuery and JavaScript code here for lab6-1.html */
window.addEventListener("load", function(){

    $("#msgArea").attr("placeholder", "My class is " + $("#msgArea").attr("class"));
    $("button").css("background-color", "red");
    $("body").css("background-color","ivory");
    $(".center-icons").addClass("selected");
    $(".panel")
    .on("click", function(e){
        $("#message").html("You clicked this panel");
    })
    .on("mousemove", function(e){
        $("#message").html("x="+e.clientX+" y="+e.clientY);
    })
    .on("mouseout", function(e){
        $("#message").html("The mouse has left.");
    });
    $("#panel-2").append($('<img src="images/art/thumbs/13030.jpg">'));
    $('.img-responsive').on('mouseover', function(e){
        var src = $(this).attr("src")
        var alt = $(this).attr("alt")
        var newsrc = src.replace("small", "medium");
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        var parent = $(this.parentNode);
        preview.css("top", "150px");
        parent.prepend(preview);
        $(this).addClass("gray");
        preview.fadeIn(1000);
        //console.log($(this.parentNode));    
    });

    $('.img-responsive').on('mouseleave', function(e){
        $('#preview').remove();
        $('.gray').removeClass("gray");
    });
    $("#pageTitle").html("Lab 6 - DOM Manipulation with jQuery");
});