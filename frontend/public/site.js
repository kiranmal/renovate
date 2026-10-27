document.addEventListener('DOMContentLoaded', function(){
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: .15 });
    reveals.forEach(el => io.observe(el));
  }
});
