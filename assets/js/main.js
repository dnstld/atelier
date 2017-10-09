var Atelier = {
  instances: {},
  variables: {
    menu: $('#navigations')
  },

  init: function() {
    'use strict';

    Atelier.menuControl();
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

    console.log('----');

    Atelier.variables.menu.removeClass('opened');
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
