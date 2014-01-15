$(".img-thumbnail").on("click", function(){
            console.log(this, this.src);
            
            
        var old_image = $(".detail-img");
        var new_img = $("<img class='detail-img' src='"+this.src+"'/ >");
        old_image.replaceWith(new_img);
        
        $("#detail-view").fadeIn();
           
        });
        
        $("#detail-view").on("click", function(){
            //$(this).css("display", "none");
            $(this).fadeOut(1000);
        })