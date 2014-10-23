// <script>


$(function () {
    var setIdeaId = function() {
	var container = document.getElementById('campaign-field-container');
	var mutationCallback = function(mutations) {
	    var foundInputs = $(container).find('#cf_543');
	    if (foundInputs.length > 0) {
    		// debug:
		console.log('FOUND:', foundInputs);

		var foundIdeaId = window.location.href.match(/#(.+)/);
		if (foundIdeaId) {
		    var input = foundInputs[0];
		    var ideaId = foundIdeaId[1];
		    input.value = ideaId;
		}
	    }
	};
	var observer = new MutationObserver(mutationCallback);
	observer.observe(container, {childList:true});
    };

    setTimeout(function () {
        var oldEndShowContent = $.fn.nyroModal.settings.endShowContent;
        $.nyroModalSettings({
            endShowContent: function (elts, settings) {
                oldEndShowContent(elts, settings);

                // debug: console.log('nyroModal at', ':', window.location.href);
		setIdeaId();
            }
        })
    }, 500);
});


// </script>
