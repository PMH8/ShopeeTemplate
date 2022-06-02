
$(document).ready(function() {
    $(".header__navbar-user-item__logout").click(function(e){
        e.preventDefault();
        $(".header__navbar-user").css("display","none");
        $("li.header__navbar-item__login,li.header__navbar-item__logout").css("display","inline-block")
    })
    
  });