var Atelier = {
  instances: {},
  variables: {
    menu: $('#navigations')
  },

  init: function() {
    'use strict';

    Atelier.menuControl();
    Atelier.slideshow();
    Atelier.professionals();
    Atelier.tabs();
    Atelier.birthdayValidation();
    Atelier.monthlyValidation();
    Atelier.womenValidation();
    Atelier.facebook();
    Atelier.linkContact();
  },
  menuControl: function() {
    'use strict';

    var viewport = $(window).width();

    if (viewport < 900) {
      Atelier.openMenu();
      Atelier.closeMenu();
    } else {
      Atelier.openedMenu();
    }
  },
  openMenu: function() {
    'use strict';

    var btnOpen = $('#open');

    btnOpen.on('click', function() {
      Atelier.variables.menu.addClass('opened');
      return false;
    });
  },
  closeMenu: function() {
    'use strict';

    var btnClose = $('#close');

    btnClose.on('click', function() {
      Atelier.variables.menu.removeClass('opened');
      return false;
    });
  },
  openedMenu: function() {
    'use strict';

    Atelier.variables.menu.removeClass('opened');
  },
  linkContact: function() {
    'use strict';

    var btnContact = $('#btn-contact');

    btnContact.on('click', function() {
      Atelier.variables.menu.removeClass('opened');

      $('#main').animate({
          scrollTop: $("#contato").offset().top
      }, 1500);
      return false;
    });
  },
  closeMenu: function() {
    'use strict';

    var btnClose = $('#close');

    btnClose.on('click', function() {
      Atelier.variables.menu.removeClass('opened');
      return false;
    });
  },
  slideshow: function() {
    'use strict';

    $('#slideshow-home').vegas({
      slides: [
        { src: '../assets/images/salao.jpg' },
        { src: '../assets/images/salao2.jpg' },
        { src: '../assets/images/salao3.jpg' },
        { src: '../assets/images/salao4.jpg' },
        { src: '../assets/images/salao5.jpg' },
        { src: '../assets/images/salao6.jpg' },
        { src: '../assets/images/salao7.jpg' },
        { src: '../assets/images/salao8.jpg' },
        { src: '../assets/images/salao9.jpg' },
        { src: '../assets/images/salao10.jpg' },
        { src: '../assets/images/salao11.jpg' },
        { src: '../assets/images/salao12.jpg' },
        { src: '../assets/images/salao13.jpg' },
        { src: '../assets/images/salao14.jpg' },
        { src: '../assets/images/salao15.jpg' }
      ],
      animation: 'kenburns'
    });
  },
  professionals: function() {
    'use strict';

    $('#list-proffessionals').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      infinite: true,
      mobileFirst: true,
      centerMode: true,
      dots: true,
      arrows: false,

      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            cssEase: 'linear',
            arrows: true
          }
        }
      ]
    });

    $('#list-galery').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      infinite: true,
      mobileFirst: true,
      centerMode: true,
      dots: true,
      arrows: false,
      adaptiveHeight: true,

      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            cssEase: 'linear',
            arrows: true
          }
        }
      ]
    });
  },
  tabs: function() {
    'use strict';

    $('#tabs').easytabs();
  },
  birthdayValidation: function() {
    'use strict';

    var btnBirthday = $('#btn-birthday'),
        birthdayForm = $('#birthday-form');

    jQuery.validator.setDefaults({
      errorClass: 'errorClass',
      errorElement: 'div',
      validClass: 'validClass'
    });

    btnBirthday.on('click', function() {
      birthdayForm.validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true,
            minlength: 8
          },
          born: {
            required: true,
            minlength: 4
          }
        },
        messages: {
          name: {
            required: 'Qual é seu nome?',
            minlength: jQuery.validator.format('Ele deve conter no mínimo {0} caracteres.')
          },
          email: {
            required: 'Qual é seu e-mail?',
            email: 'Por favor, insira um e-mail válido.'
          },
          phone: {
            required: 'Qual é seu telefone?',
            minlength: jQuery.validator.format('Mínimo {0} números.')
          },
          born: {
            required: 'Qual é sua data de nascimento?',
            minlength: jQuery.validator.format('Mínimo {0} números.')
          }
        },
        highlight: function(element, errorClass, validClass) {
          $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
          $(element).removeClass(errorClass).addClass(validClass);
        },
        submitHandler: function(form) {
          var dados = $(form).serialize();

          $.ajax({
            type: 'POST',
            url: 'birthday.php',
            data: dados,
            dataType: 'text',
            cache: false,
            beforeSend: function() {
              btnBirthday.text('Enviando...');
            },
            complete: function() {
              btnBirthday.text('Aguardando retorno...');
            },
            success: function() {
              setTimeout(function() {
                btnBirthday.addClass('sucesso').text('Você está participanto');

                setTimeout(function() {
                  btnBirthday.removeClass('sucesso').text('Enviar');
                }, 2000);
              }, 2000);

              $('#name, #email, #phone, #born').val('');
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr.status);
              console.log(thrownError);
            }
          });

          return false;
        }
      });
    });
  },
  womenValidation: function() {
    'use strict';

    var btnWomen = $('#btn-women'),
        womenForm = $('#women-form');

    jQuery.validator.setDefaults({
      errorClass: 'errorClass',
      errorElement: 'div',
      validClass: 'validClass'
    });

    btnWomen.on('click', function() {
      womenForm.validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true,
            minlength: 8
          },
          born: {
            required: true,
            minlength: 4
          }
        },
        messages: {
          name: {
            required: 'Qual é seu nome?',
            minlength: jQuery.validator.format('Ele deve conter no mínimo {0} caracteres.')
          },
          email: {
            required: 'Qual é seu e-mail?',
            email: 'Por favor, insira um e-mail válido.'
          },
          phone: {
            required: 'Qual é seu telefone?',
            minlength: jQuery.validator.format('Mínimo {0} números.')
          },
          born: {
            required: 'Qual é sua data de nascimento?',
            minlength: jQuery.validator.format('Mínimo {0} números.')
          }
        },
        highlight: function(element, errorClass, validClass) {
          $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
          $(element).removeClass(errorClass).addClass(validClass);
        },
        submitHandler: function(form) {
          var dados = $(form).serialize();

          $.ajax({
            type: 'POST',
            url: 'women.php',
            data: dados,
            dataType: 'text',
            cache: false,
            beforeSend: function() {
              btnWomen.text('Enviando...');
            },
            complete: function() {
              btnWomen.text('Aguardando retorno...');
            },
            success: function() {
              setTimeout(function() {
                btnWomen.addClass('sucesso').text('Você está participanto');

                setTimeout(function() {
                  btnWomen.removeClass('sucesso').text('Enviar');
                }, 2000);
              }, 2000);

              $('#name, #email, #phone').val('');
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr.status);
              console.log(thrownError);
            }
          });

          return false;
        }
      });
    });
  },
  monthlyValidation: function() {
    'use strict';

    var btnMonthly = $('#btn-monthly'),
        monthlyForm = $('#monthly-form');

    jQuery.validator.setDefaults({
      errorClass: 'errorClass',
      errorElement: 'div',
      validClass: 'validClass'
    });

    btnMonthly.on('click', function() {
      monthlyForm.validate({
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true,
            minlength: 8
          },
          born: {
            required: true,
            minlength: 4
          }
        },
        messages: {
          name: {
            required: 'Qual é seu nome?',
            minlength: jQuery.validator.format('Ele deve conter no mínimo {0} caracteres.')
          },
          email: {
            required: 'Qual é seu e-mail?',
            email: 'Por favor, insira um e-mail válido.'
          },
          phone: {
            required: 'Qual é seu telefone?',
            minlength: jQuery.validator.format('Mínimo {0} números.')
          },
          born: {
            required: 'Qual é sua data de nascimento?',
            minlength: jQuery.validator.format('Mínimo {0} números.')
          }
        },
        highlight: function(element, errorClass, validClass) {
          $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
          $(element).removeClass(errorClass).addClass(validClass);
        },
        submitHandler: function(form) {
          var dados = $(form).serialize();

          $.ajax({
            type: 'POST',
            url: 'monthly.php',
            data: dados,
            dataType: 'text',
            cache: false,
            beforeSend: function() {
              btnMonthly.text('Enviando...');
            },
            complete: function() {
              btnMonthly.text('Aguardando retorno...');
            },
            success: function() {
              setTimeout(function() {
                btnMonthly.addClass('sucesso').text('Você está participanto');

                setTimeout(function() {
                  btnBirthday.removeClass('sucesso').text('Enviar');
                }, 2000);
              }, 2000);

              $('#name, #email, #phone').val('');
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr.status);
              console.log(thrownError);
            }
          });

          return false;
        }
      });
    });
  },
  facebook: function() {
    'use strict';

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}

$(document).ready(function() {
  'use strict';

  Atelier.init();
});
$(window).resize(function() {
  'use strict';

  Atelier.menuControl();
});
