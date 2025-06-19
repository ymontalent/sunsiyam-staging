document.addEventListener('DOMContentLoaded', function () {
const currentUrl = window.location.href;
const urlObj = new URL(currentUrl);

// List of language prefixes you want to support
const languages = ['/fr/', '/ar/', '/de/', '/es/', '/zh/', '/ru/'];

// Find if the current path starts with any of the supported languages
const currentLang = languages.find(lang => urlObj.pathname.startsWith(lang));

if (!currentLang) {
  console.log('Page is not a language-specific version. No links changed.');
  return;
}

const origin = urlObj.origin;

document.querySelectorAll('a[href]').forEach(function (link) {
  const href = link.getAttribute('href');

  // Skip if it already includes the current language
  if (href.includes(currentLang)) return;

  let newHref = href;

  // Handle absolute links with same origin
  if (href.startsWith(origin)) {
    const path = href.replace(origin, '');
    newHref = origin + currentLang + path.replace(/^\//, '');
  }
  // Handle root-relative links (e.g., "/something")
  else if (href.startsWith('/')) {
    newHref = currentLang + href.replace(/^\//, '');
  }

  // Update href only
  link.setAttribute('href', newHref);
});

});


document.addEventListener('DOMContentLoaded', function () {
  // Adding links inside language switcher
  const html = document.documentElement;
  const languageButton = document.querySelector('.header__language-selected');
  const languageList = document.querySelector('.header__language-select');

  if (!html || !languageButton || !languageList) return;

  const languageMap = {
    'en': 'EN',
    'ar': 'AR',
    'zh': 'ZH',
    'fr': 'FR'
    //'de': 'DE',
    //'es': 'ES',
    //'ru': 'RU'
  };

  const languagesLinks = Object.values(languageMap); // EN, AR, etc.

  const currentLangClass = Object.keys(languageMap).find(lang => html.classList.contains(lang));
  if (!currentLangClass) {
    console.log('No recognized language class on <html>.');
    return;
  }

  const currentLangCode = languageMap[currentLangClass];

  // Update the button text
  languageButton.textContent = currentLangCode;

  // Build known language codes for detection
  const knownLanguageCodes = Object.keys(languageMap);

  const links = languageList.querySelectorAll('a');

  links.forEach(function (link) {
    const targetLangCode = link.textContent.trim().toLowerCase(); // e.g., 'fr', 'ar', etc.
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);

    let pathParts = urlObj.pathname.split('/').filter(Boolean); // remove empty parts

    // Check if first part is a known language code
    if (pathParts.length > 0 && knownLanguageCodes.includes(pathParts[0].toLowerCase())) {
      pathParts.shift(); // Remove it (always remove existing language code)
    }

    if (targetLangCode !== 'en') {
      // If target language is NOT English, add it at the start
      pathParts.unshift(targetLangCode);
    }
    // If targetLangCode is 'en', we don't insert anything → default path

    const newPath = '/' + pathParts.join('/');
    const newUrl = urlObj.origin + newPath + urlObj.search + urlObj.hash;

    // Set the new href
    link.setAttribute('href', newUrl);
  });

  // After setting all hrefs, remove the current language link from dropdown
  const listItems = languageList.querySelectorAll('li');
  listItems.forEach(function (li) {
    const a = li.querySelector('a');
    if (a && a.textContent.trim().toUpperCase() === currentLangCode) {
      li.remove();
    }
  });
  
});
