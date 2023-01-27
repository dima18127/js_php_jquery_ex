// ex 2.1

$(function () { 
    $('body > .container').append($('h3:eq(2)').css('color', 'green').append("!!!"))
});

// ex 2.2
$(function () {
    // $('li').text()
    // $('li').text().match(/[^0-9\.\,]/g, '');
});
$(function () {
    function recursiveReplace(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = node.nodeValue.replace("пункт №", "");
        } else if (node.nodeType == Node.ELEMENT_NODE) {
            $(node).contents().each(function () {
                recursiveReplace(this);
            });
        }
    }
    
    recursiveReplace(document.body);
    $('ul').text(function(i, text) { return html.replace('пункт',"۱");});

    // $('ul').each(function (index, elem) {
    //     $(this).html(  $(this).html().replace('пункт №'," "))
    //     console.log($(this));
    // });
    // $('ul > li> li').each(function (index, elem) {
    //     $(this).html(  $(this).html().replace('пункт №'," "))
    //     console.log($(this));
    // });
    
});
