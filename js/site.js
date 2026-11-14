// 하위 페이지 공통: 모바일 메뉴 열고 닫기
(function(){
  var h=document.getElementById('hamburger'),m=document.getElementById('mobileMenuFull'),c=document.getElementById('mmfClose');
  if(!h||!m)return;
  function set(open){m.classList.toggle('open',open);h.classList.toggle('open',open);h.setAttribute('aria-expanded',open?'true':'false');h.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');document.body.style.overflow=open?'hidden':'';}
  h.addEventListener('click',function(){set(!m.classList.contains('open'));});
  if(c)c.addEventListener('click',function(){set(false);});
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();
