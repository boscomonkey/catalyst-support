//<script>


$(document).ready(function(){

    function appendJump(jumpId) {
        var href = window.location.href;
        if (href.match(/#/)) {
            return href.replace(/#.*/, '#' + jumpId);
        }
        else {
            return href + '#' + jumpId;
        }
    }

    // inject "Submit Video Pitch..." link if this is problems page
    //
    if(window.location.href.match( /catalyst.energy.gov.+discussionID=6952/ )) {
        var listItems = $(".idea");
        listItems.each(function(idx, li) {
            var idea = $(li);
            var ideaId = idea.attr('id');

            // debug: console.log(idx, ':', 'idea ID', ideaId);

            idea
                .find('.voting')
                .append('<a class="nyroModal post" href="http://catalyst.energy.gov/a/showCreateTopic.do?idea='
                        + ideaId
                        + ' " style="position:absolute;top:200px;text-align:center")>Submit Video Pitch Now!</a>');
            $('.nyroModal').nyroModal();
        });
    }
});


//</script>
