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

// 유튜브 작업 영상: 누를 때만 youtube-nocookie iframe을 불러온다(페이지를 열 때는 유튜브에 연결하지 않음)
(function(){
  document.querySelectorAll('a.yt[data-yt]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('data-yt');
      if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;  // 형식이 다르면 그냥 유튜브 주소로 이동
      e.preventDefault();
      var f=document.createElement('iframe');
      f.className='yt-frame';
      f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';
      f.title=a.getAttribute('data-title')||'YouTube 영상';
      f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen=true;
      f.referrerPolicy='strict-origin-when-cross-origin';
      a.replaceWith(f);
      f.focus();
    });
  });
})();
