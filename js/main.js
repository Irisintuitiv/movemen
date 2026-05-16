
// ─── POPUP ───────────────────────────────────────────────
function openPopup(e) {
  e.preventDefault();
  document.getElementById('signupPopup').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePopup() {
  document.getElementById('signupPopup').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  // Wire all apply-triggering buttons
  document.querySelectorAll(
    'a[href="#apply"], a.nav-cta, a.pkg-cta, a.btn-g[href^="mailto"], a.btn-o[href^="mailto"]'
  ).forEach(function (a) {
    var text = a.textContent.toLowerCase();
    if (!text.includes('contact') && !text.includes('kontakt') && !text.includes('instagram')) {
      a.addEventListener('click', openPopup);
    }
  });

  // Close on backdrop click
  document.getElementById('signupPopup').addEventListener('click', function (e) {
    if (e.target === this) closePopup();
  });

  // Form submit via Formspree
  var form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('.popup-submit');
      btn.style.opacity = '.6';
      btn.disabled = true;
      try {
        var res = await fetch('https://formspree.io/f/erm@irisintuitiv.dk', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          document.getElementById('signupFormInner').style.display = 'none';
          document.getElementById('signupSuccess').style.display = 'block';
        } else {
          btn.style.opacity = '1';
          btn.disabled = false;
          alert('Something went wrong. Please try again.');
        }
      } catch {
        btn.style.opacity = '1';
        btn.disabled = false;
        alert('Something went wrong. Please try again.');
      }
    });
  }
});

// ─── TESTIMONIAL CAROUSEL ─────────────────────────────────
(function(){
  const track = document.getElementById('tTrack');
  const dotsEl = document.getElementById('tDots');
  const slides = track.querySelectorAll('.t-slide-inner');
  const total = slides.length;
  const perView = window.innerWidth > 900 ? 3 : 1;
  let cur = 0;
  const maxSlide = total - perView;

  // Build dots
  for(let i=0;i<=maxSlide;i++){
    const d = document.createElement('div');
    d.className = 't-dot' + (i===0?' active':'');
    d.onclick = ()=>goTo(i);
    dotsEl.appendChild(d);
  }

  function goTo(n){
    cur = Math.max(0, Math.min(n, maxSlide));
    const slideW = track.parentElement.offsetWidth / perView;
    track.style.transform = `translateX(-${cur * slideW}px)`;
    slides.forEach((s,i)=>s.classList.toggle('active', i===cur));
    dotsEl.querySelectorAll('.t-dot').forEach((d,i)=>d.classList.toggle('active',i===cur));
  }

  window.tMove = function(dir){ goTo(cur+dir); }

  // Init first active
  slides[0].classList.add('active');

  // Auto-advance
  setInterval(()=>goTo(cur >= maxSlide ? 0 : cur+1), 5000);
})();
