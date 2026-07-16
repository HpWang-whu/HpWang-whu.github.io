// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()

    $('.publication-filters').on('click', '.publication-filter', function () {
        var $button = $(this)
        var filter = $button.data('filter')
        var $card = $button.closest('.bg-white')

        $button.siblings().removeClass('active').attr('aria-pressed', 'false')
        $button.addClass('active').attr('aria-pressed', 'true')

        $card.find('.publication-filter-item').each(function () {
            var shouldShow = filter === 'all' || $(this).data('category') === filter
            $(this).toggle(shouldShow)
        })
    })
})
