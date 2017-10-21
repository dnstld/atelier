// App
// menu flags
function menu(id) {

    for(i=1;i<=3;i++) {

        var div = document.getElementById("conteudo"+i);

        if(i == id)
        
        {
            div.style.display = "block"
        }
        
        else
        
        {
            div.style.display = "none"
        }
    }
};

// menu flags
// add, remove "active" class
$(function() {

    var lista = $('.nav-tabs li');

    lista.click(function(e) {

        lista.each( function() {

            if (this == e.currentTarget) {
        
                $(this).toggleClass('active');
        
            } else  {
                
                $(this).removeClass('active');
        
            }
        })

    });

    //Menu mobile
    $( "#change-hamburguer" ).click(function() {

        $( "#menu-list" ).toggle( "slow");
        
    });

    //Link servicos
    $('#saiba-mais').click(function() {

        window.location='os-servicos.html';

    });

    

    // validate the comment form when it is submitted
    $("#form-birthday").validate({
        rules: {
            nameBirthday: {
                required: true,
                minlength: 3
            },
            emailBirthday: {
                required: true,
                email: true
            },
            phoneBirthday: {
                required: true,
                minlength: 13
            },
            dateBirthday: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            nameBirthday: {
                required: "Por favor, coloque seu nome.",
                minlength: "Seu nome deve consistir pelo menos 3 caracteres"
            },
            emailBirthday: "Por favor, coloque um email válido!",
            phoneBirthday: {
                required: "Por favor, coloque seu telefone.",
                minlength: "Por favor, coloque um telefone válido"
            },
            dateBirthday: {
                required: "Por favor, coloque sua data de nascimento;",
                minlength: "Por favor, coloque uma data válida"
            }
        }
    });

    $("#form-lottery").validate({
        rules: {
            nameLottery: {
                required: true,
                minlength: 3
            },
            emailLottery: {
                required: true,
                email: true
            },
            phoneLottery: {
                required: true,
                minlength: 13
            },
            dateLottery: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            nameLottery: {
                required: "Por favor, coloque seu nome.",
                minlength: "Seu nome deve consistir pelo menos 3 caracteres"
            },
            emailLottery: "Por favor, coloque um email válido!",
            phoneLottery: {
                required: "Por favor, coloque seu telefone.",
                minlength: "Por favor, coloque um telefone válido"
            },
            dateLottery: {
                required: "Por favor, coloque sua data de nascimento;",
                minlength: "Por favor, coloque uma data válida"
            }
        }
    });

    $("#form-womanDay").validate(
        {
        rules: {
            nameWomanDay: {
                required: true,
                minlength: 3
            },
            emailWomanDay: {
                required: true,
                email: true
            },
            phoneWomanDay: {
                required: true,
                minlength: 13
            },
            dateWomanDay: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            nameWomanDay: {
                required: "Por favor, coloque seu nome.",
                minlength: "Seu nome deve consistir pelo menos 3 caracteres"
            },
            emailWomanDay: "Por favor, coloque um email válido!",
            phoneWomanDay: {
                required: "Por favor, coloque seu telefone.",
                minlength: "Por favor, coloque um telefone válido"
            },
            dateWomanDay: {
                required: "Por favor, coloque sua data de nascimento;",
                minlength: "Por favor, coloque uma data válida"
            }
        }
    });

    $('.form-control-date').mask('00/00/0000');
    
    
    var options =  {
        onKeyPress: function(phone, e, field, options) {
            var masks = ['(00) 00000000', '(00) 000000000'];
            var mask = (phone.length>7) ? masks[1] : masks[0];
            $('.form-control-phone').mask(mask, options);
        }};
        $('.form-control-phone').mask('(00) 00000000', options);
    });

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
