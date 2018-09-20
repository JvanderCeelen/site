var blog = {

    init: function() {
        blog.attachHandlers();
        blog.buildArticleIndex();
    },

    attachHandlers: function() {
        $('.index').click(function() {
            blog.scrollToArticle();
        });
    },

    buildArticleIndex: function() {
        $('h2').each(function(index, element) {
            $('.article__index').append('<p class="index">' + $(element).text() + '</p>');
        });
    },

    scrollToArticle: function() {
        console.log('click');
    }
}

$(document).ready(function() {
    blog.init();
});
