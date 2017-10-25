function dinamicData_templateServicesCard() {

    return "<div class=\"services-card\"><ul class=\"card-list\">"+
        "[template_item]"+
    "</ul></div>";


};

function dinamicData_templateCardsItens() {

    return "<li class=\"cards-items\">"+
            "<h2 class=\"service-name\">[service]</h2>"+
            "<p class=\"description\">[genre]</p>"+
            "<p class=\"value\">[value]</p>"+
        "</li>";


};

function dinamicData_templateGalleryList() {

    return "<ul class=\"gallery-list\">"+
                "[template_item]"+
            "</ul>";

};

function dinamicData_templateGalleyItem() {

    return "<li class=\"gallery-item\">"+
                "<figure>"+
                    "<a data-fancybox=\"gallery\" href=\"[urlPhoto]\">"+
                        "<img src=\"[urlPhoto]\" alt=\"Cliente\">"+
                    "</a>"+
                "</figure>"+
            "</li>";

};

function dinamicData_templateRecipeServices() {

    return "<div class=\"recipe-services\">"+
                "[template_item]"+
            "</div>";

}

function dinamicData_templateRecipeItens() {

    return "<div class=\"recipe-item\">"+
                "<div class=\"border-boxe-image\">"+
                    "<figure class=\"boxe-image\">"+
                        "<a data-fancybox=\"gallery\" href=\"[urlPhoto]\"><img src=\"[urlPhoto]\" alt=\"Layout\"></a>"+
                        "<figcaption class=\"texto-imagem\">[title]</figcaption>"+
                    "</figure>"+
                "</div>"+
            "</div>";

}
