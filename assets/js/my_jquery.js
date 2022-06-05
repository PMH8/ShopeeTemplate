

$(document).ready(function () {

    // ---------Click log out-----------
    $(".header__navbar-user-item__logout").click(function (e) {
        e.preventDefault();
        // Hiển thị lại 2 nút login logout
        $(".header__navbar-user").css("display", "none");
        $("li.header__navbar-item__login,li.header__navbar-item__register").css("display", "inline-block")
        // làm mất giỏ hàng đã mua
        $(".header__cart-notice").css("display", "none");
        $(".header__cart-list").css("display", "none");
        // Khi click vào biểu tượng giỏ hàng thì hiện lên form đăng nhập đăng ký
        $(".header__cart-wrap").click(function () {
            displayAuthLogin();
        })

    })
    // -------function xuử lý hiển thị giao diện login,logout----------
    function displayAuthLogin() {
        $(".modal").css("display", "flex");
        $(".modal__overlay").css("display", "block");
        $(".auth-form__login").css("display", "block");
        $(".auth-form__register").css("display", "none");

    }

    function displayAuthRegister() {
        $(".modal").css("display", "flex");
        $(".modal__overlay").css("display", "block");
        $(".auth-form__login").css("display", "none");
        $(".auth-form__register").css("display", "block");

    }
    function displayNoneAuth() {
        $(".modal").css("display", "none");
        $(".modal__overlay").css("display", "none");
    }
    // ---------------Validate Form-----------------
    $(".auth-form__form").validate(
        {
            rules: {
                email: {
                    required: true,
                    // minlength: 2,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength:20,
                    pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/i
                },
                confirm_password: {
                    required: true,
                    minlength: 6,
                    equalTo: "#password"
                }
            },
            messages: {
                email: {
                    required: "Xin hãy nhập email",
                    
                },
                password: {
                    required: "Xin hãy nhập mật khẩu",
                    minlength: "Mật khẩu phải gồm tối thiểu 6 ký tự",
                    maxlength:"Mật khẩu chỉ được tối đa 20 ký tự",
                    pattern:"Mật khẩu cần bao gồm chữ hoa,chứ thường và một ký tự đặc biệt"
                },
                confirm_password : {
                    required : "Xin hãy nhập mật khẩu xác nhận",
                    minlength : "Mật khẩu phải gồm tối thiểu 6 ký tự",
                    equalTo : "Mật khẩu không khớp"
                }
            }
        }
    )
    $("button.btn-register").click(function () {
        $(".auth-form__form").valid();

    })

    // ---------------click vào lớp over lay=>trở về trang chủ,click vào button trở lại để trở lại trang chủ---------------
    $(".auth-form__controls-back ").click(function () {
        displayNoneAuth();
    })
    $(".modal__overlay").click(function () {
        displayNoneAuth();
    })
    // -------Click vaò nút đăng ký ,đăng nhập trên header-----------
    $(".header__navbar-item__register,.auth-form__heading-register").click(function (e) {
        e.preventDefault();
        displayAuthRegister();

    });
    $(".header__navbar-item__login,.auth-form__heading-login").click(function (e) {
        e.preventDefault();
        displayAuthLogin();

    });
    // -------Click to show password--------
    $("#show_password-register").click(function(){
        $(this).is(':checked') ? $('.auth-form__input-password').prop('type', 'text') : $('.auth-form__input-password').prop('type', 'password');
      
    })
    $("#show_password-login").click(function(){
        $(this).is(':checked') ? $('.auth-form__input-password').prop('type', 'text') : $('.auth-form__input-password').prop('type', 'password');
      
    })
    
    // -------option search header-----------
    $(".header__search-optionp-item").click(function () {
        // Lấy giá trị option
        var headerSearchOptionpItem_content = $(this).children().text();
        // Xóa dấu tích ở các option khác đi
        if ($(".header__search-optionp-item").hasClass("header__search-optionp-item--active")) {
            $(".header__search-optionp-item").removeClass("header__search-optionp-item--active");
        }
        // Thêm dấu tích vào option mà user lấy
        $(this).addClass("header__search-optionp-item--active");
        // Gán option vào label 
        $(".header__search-select-label").text(headerSearchOptionpItem_content);

    })
    // ----------Chỉnh màu nút home-filter__btn------------
    $(".home-filter__btn").click(function () {
        // Xoá màu của các khổi 
        $(".home-filter__btn").removeClass("btn-primary");
        // Thêm màu các khôi vào
        $(this).addClass("btn-primary");
    })
    // --------Chỉnh sort giá tiền-------------------
    $(".select-input__item").click(function (e) {
        e.preventDefault();
        $(".select-input-label").text($(this).text());

    })

});