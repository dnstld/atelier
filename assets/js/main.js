var Atelier = {
  instances: {},
  variables: {
    menu: $('#navigations')
  },

  init: function() {
    'use strict';

    Atelier.menuControl();
    Atelier.slideshow();
  },

  menuControl: function() {
    'use strict';

    var viewport = $(window).width();

    console.log('resize: ' + viewport);

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
}

$(document).ready(function() {
  'use strict';

  Atelier.init();
});
$(window).resize(function() {
  'use strict';

  Atelier.menuControl();
});
