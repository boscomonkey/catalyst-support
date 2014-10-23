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

            // DEBUG: console.log(idx, ':', 'idea ID', ideaId);

            // create element to attach handlers
            var eltHtml = '<a class="nyroModal post" href="http://catalyst.energy.gov/a/showCreateTopic.do?idea='
                + ideaId
                + ' " style="position:absolute;top:200px;text-align:center")>Submit Video Pitch Now!</a>';
            var newElt = $(eltHtml);

            // this handler adds "ideaId" to page URL
            var fnAddJumpId = function() {
                window.location.href = appendJump(ideaId);
            };
            // this handler removes any "ideaId" from page URL
            var fnClearJumpId = function() {
                var href = window.location.href;
                if (href.match(/#/)) {
                    window.location.href = href.replace(/#.*/, '');
                }
            };

            // attach handlers to new element
            //// DEBUG: newElt.hover(fnAddJumpId, fnClearJumpId);
            newElt.click(fnAddJumpId);

            // add new element into correct part of the DOM
            idea.find('.voting').append(newElt);
            newElt.nyroModal();
        });
    }
});


//</script>
