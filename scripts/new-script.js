document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.foodies-blocks')
    if (!container) return

    var filter = document.getElementById('foodies-filter')
    // grab all the rows under your block
    var rows   = Array.prototype.slice.call(
                    container.querySelectorAll('[data-category]')
                 )

    function updateRowDirections() {
        // only the ones not hidden
        var visible = rows.filter(function(r) {
            return window.getComputedStyle(r).display !== 'none'
        })
        // toggle .reverse on every 2nd visible
        visible.forEach(function(r, i) {
            r.classList.toggle('reverse', i % 2 === 1)
        })
    }

    function applyFilter() {
        var v = filter.value
        rows.forEach(function(r) {
            r.style.display = (!v || r.getAttribute('data-category') === v)
                              ? '' : 'none'
        })
        updateRowDirections()
    }

    filter.addEventListener('change', applyFilter)
    // run once on page load
    applyFilter()
})
