// ==========================================================================
// Marte Strandli — portefølje
// Vanlig JavaScript, ingen rammeverk. Kjøres på hver side via <script src="...">.
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Årstall i bunntekst ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Meny (nedtrekk fra ikonet) ---------- */
  var toggle = document.querySelector('.nav-menu-btn');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Lukk menyen når man klikker en lenke (bytter side).
    // Meny skal IKKE lukkes ved klikk utenfor eller med Escape — kun ved
    // sidebytte eller ved å klikke ikonet igjen (se toggle-lytteren over).
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Bilde-fallback ----------
     Hvis en <img> peker på en fil som ikke finnes ennå (du har ikke lagt
     den inn i /images/ enda), viser vi en enkel plassholder med filnavnet
     i stedet for et knekt bilde-ikon. Så snart du legger til bildet med
     riktig filnavn, dukker det automatisk opp — ingen kode å endre. */
  document.querySelectorAll('.media img').forEach(function (img) {
    function markMissing() { img.classList.add('is-missing'); }
    img.addEventListener('error', markMissing);
    // Sjekk bilder som allerede har feilet før skriptet lastet
    if (img.complete && img.naturalWidth === 0) markMissing();
  });

  /* ---------- Kopier e-post ----------
     Samme interaksjon som på den ekte Framer-siden: en liten boble som
     følger musepekeren og sier "Kopier", som blir svart og sier
     "Kopiert!" når du klikker. */
  document.querySelectorAll('[data-copy-email]').forEach(function (btn) {
    var wrap = btn.closest('.email-copy-wrap');
    var tooltip = wrap ? wrap.querySelector('.copy-tooltip') : null;
    var revertTimer = null;

    // Boblen følger musepekeren horisontalt mens du holder over knappen
    if (wrap && tooltip) {
      wrap.addEventListener('mousemove', function (e) {
        var rect = wrap.getBoundingClientRect();
        tooltip.style.left = (e.clientX - rect.left) + 'px';
        tooltip.style.top = (e.clientY - rect.top) + 'px';
      });
      wrap.addEventListener('mouseleave', function () {
        // Nullstill til "Kopier" når musepekeren forlater knappen
        clearTimeout(revertTimer);
        tooltip.classList.remove('is-copied');
        tooltip.textContent = 'Kopier';
      });
    }

    btn.addEventListener('click', function () {
      var email = btn.getAttribute('data-copy-email');
      var markCopied = function () {
        if (!tooltip) return;
        tooltip.textContent = 'Kopiert!';
        tooltip.classList.add('is-copied');
        clearTimeout(revertTimer);
        revertTimer = setTimeout(function () {
          tooltip.classList.remove('is-copied');
          tooltip.textContent = 'Kopier';
        }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(markCopied).catch(function () {
          window.location.href = 'mailto:' + email;
        });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  });

  /* ---------- Spørsmål/svar-liste (Om meg) ---------- */
  document.querySelectorAll('.qa-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.qa-item');
      var isOpen = item.getAttribute('data-open') === 'true';
      // Lukk alle andre
      document.querySelectorAll('.qa-item').forEach(function (other) {
        other.setAttribute('data-open', 'false');
        other.querySelector('.qa-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

});
