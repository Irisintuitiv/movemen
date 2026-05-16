
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
