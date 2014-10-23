<script>
$(function () {
    setTimeout(function () {
        var oldEndShowContent = $.fn.nyroModal.settings.endShowContent;
        $.nyroModalSettings({
            endShowContent: function (elts, settings) {
                oldEndShowContent(elts, settings);
                alert('hello');
            }
        })
    }, 500);
});
</script>
