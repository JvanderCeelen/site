var blog = {

    init: function() {
        blog.attachHandlers();
        blog.buildArticleIndex();
    },

    attachHandlers: function() {
        $('body').on('click', 'p.index', blog.scrollToArticle);
    },

    buildArticleIndex: function() {
        $('h2').each(function(i, element) {
            $('.article__index').append('<p class="index">' + $(element).text() + '</p>');
        });
    },

    scrollToArticle: function(event) {
        $('article h2').each(function(index, element) {

            if (element.innerText === event.target.innerText) {
                $('html').animate({
                    scrollTop: element.offsetTop - 70
                }, 1000);
            }
        });
    },
}

$(document).ready(function() {
    blog.init();
});
