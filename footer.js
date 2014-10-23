// <script>


$(function () {
    setTimeout(function () {
        var oldEndShowContent = $.fn.nyroModal.settings.endShowContent;
        $.nyroModalSettings({
            endShowContent: function (elts, settings) {
                oldEndShowContent(elts, settings);

                console.log('nyroModal at', ':', window.location.href);
            }
        })
    }, 500);
});


// </script>
