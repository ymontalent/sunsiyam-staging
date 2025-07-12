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

document.addEventListener('DOMContentLoaded', function() {
  // 1. grab all gallery links
  var links = Array.from(document.querySelectorAll('.gallery-link'));
  if (!links.length) return;
  var parent = links[0].parentElement;

  // 2. create our container and grid elements
  var wrapper = document.createElement('div');
  wrapper.className = 'container';
  var grid = document.createElement('div');
  grid.className = 'grid';

  // 3. wrap each link in a grid-item and migrate data-section → data-category
  links.forEach(function(link) {
    var section = link.getAttribute('data-section');
    var item = document.createElement('div');
    item.classList.add('grid-item','transition');
    item.setAttribute('data-category', section);

    link.parentNode.insertBefore(item, link);
    item.appendChild(link);
    grid.appendChild(item);
  });

  // 4. build filters dynamically
  var filters = [
    { f: '*', label: translations.allFilter, active: true }
  ];

  // get each unique section
  var sections = Array.from(new Set(
    links.map(function(link) {
      return link.getAttribute('data-section');
    })
  ));

  sections.forEach(function(section) {
    // find the first link with this section
    var link = links.find(function(l) {
      return l.getAttribute('data-section') === section;
    });
    // use its data-name (fallback to section key)
    var name = link.getAttribute('data-name') || section;
    filters.push({
      // note single-quotes inside the selector string
      f: "[data-category='" + section + "']",
      label: name
    });
  });

  // 5. render the <ul> from our filters array
  var ul = document.createElement('ul');
  ul.className = 'filter-button-group';
  filters.forEach(function(opt) {
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.setAttribute('data-filter', opt.f);
    btn.textContent = opt.label;
    if (opt.active) btn.classList.add('active');
    li.appendChild(btn);
    ul.appendChild(li);
  });

  // 6. dump everything into the wrapper and append into DOM
  wrapper.appendChild(ul);
  wrapper.appendChild(grid);
  parent.appendChild(wrapper);
});




window.addEventListener('load', function() {
  // 0. SHOW A LOADING OVERLAY
  var overlay = document.createElement('div');
  overlay.id = 'loading-overlay';
  overlay.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(overlay);

  // 1. Grab the grid
  var grid = document.querySelector('.grid');

  // 2. Init Isotope
  var iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    getSortData: {
      category: '[data-category]'
    },
    masonry: { gutter: 10 }
  });

  // 3. As each image loads, relayout; when all are done, remove overlay
  imagesLoaded(grid)
    .on('progress', function() {
      iso.layout();
    })
    .on('always', function() {
      overlay.parentNode.removeChild(overlay);
      iso.layout();
    });

  // 4. Wire up your filter buttons…
  document.querySelector('.filter-button-group')
    .addEventListener('click', function(e) {
      if (e.target.tagName !== 'BUTTON') return;
      var filterVal = e.target.getAttribute('data-filter');
      iso.arrange({ filter: filterVal });

      // toggle active class
      Array.from(this.querySelectorAll('button'))
        .forEach(function(btn) { btn.classList.remove('active'); });
      e.target.classList.add('active');
    });
});

