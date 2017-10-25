//Json dinamic

function dinamicData(pageName, jsonName) {

    var template_content = "",
        template_item = "",
        dinamic_content = "",
        dinamic_item = "",
        template_final = "";

    switch(pageName) {

        case "os-servicos.html":
            template_content = dinamicData_templateServicesCard();
            template_item = dinamicData_templateCardsItens();
        break;

        case "as-fotos.html":
            template_content = dinamicData_templateGalleryList();
            template_item = dinamicData_templateGalleyItem();
        break;

        case "o-atelier.html":
            template_content = dinamicData_templateRecipeServices();
            template_item = dinamicData_templateRecipeItens();
        break;

        case "index.html":
            template_content = dinamicData_templateServicesCard();
            template_item = dinamicData_templateCardsItens();
        break;

    }

    try {

        $.getJSON( jsonName, function( data ) {

            var count_refresh = 0;
            var count = 0;
            var count_case = 0;
            var count_default = true;

            $.each( data, function( key, val ) {
    
                count_refresh = 0;
                dinamic_item = "";
                
                switch(pageName) {

                    case "os-servicos.html":

                        dinamic_item += template_item.replace("[service]", val.service);
                        dinamic_item = dinamic_item.replace("[genre]", val.genre);
                        dinamic_item = dinamic_item.replace("[value]", val.value);
                        count_case = 3;

                        if(count <= count_case) {

                            dinamic_content += dinamic_item
                            
                        }

                    break;

                    case "as-fotos.html":
                        
                        dinamic_item += template_item.replace("[urlPhoto]", val.url);
                        dinamic_item = dinamic_item.replace("[urlPhoto]", val.url);
                        dinamic_item = dinamic_item.replace("[name]", val.name);
                        count_case = data.length -1;
                        count_default = false;

                        dinamic_content += dinamic_item

                    break;

                    case "o-atelier.html":

                        dinamic_item += template_item.replace("[urlPhoto]", val.url);
                        dinamic_item = dinamic_item.replace("[urlPhoto]", val.url);
                        dinamic_item = dinamic_item.replace("[title]", val.title);
                        count_case = data.length -1;
                        count_default = false;

                        dinamic_content += dinamic_item

                    break;

                    case "index.html":

                        dinamic_item += template_item.replace("[service]", val.service);
                        dinamic_item = dinamic_item.replace("[genre]", val.genre);
                        dinamic_item = dinamic_item.replace("[value]", val.value);
                        count_case = 3;
                        limite = 2;

                        if(count <= count_case) {

                            dinamic_content += dinamic_item
                            
                        }

                    break;

                }

                if(count == count_case ) {

                    template_final += template_content.replace("[template_item]", dinamic_content);
                    count = 0;
                    count_refresh = count_default ? 1 : 0;
                    dinamic_content = "";

                }
            
                if(count_refresh == 0) {
                    count++;
                }
            
            });

            $("#services-cards").html(template_final);
            $("#gallery-list").html(template_final);
            $("#recipe-services").html(template_final);
        
        });

    }
    catch (e) {

        console.log(e)

    };

};