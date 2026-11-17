// 유입 경로 첫 기록(모든 페이지 공통). 개인정보처리방침 제9조 ②.
// 탭 세션에서 처음 들어온 페이지, 직전 주소, utm 값을 한 번만 sessionStorage에 저장한다.
// AI 답변의 링크로 하위 페이지에 먼저 들어온 뒤 첫 화면 문의 양식으로 옮겨 가도 첫 값이 남는다.
// 쿠키는 쓰지 않고, 값은 문의 양식을 보낼 때에만 함께 전송된다.
(function(){
  var KEY = 'mf_first_touch';
  function now(){
    var pairs = [];
    new URLSearchParams(location.search).forEach(function(v, k){ if (k.toLowerCase().indexOf('utm_') === 0) pairs.push([k, v]); });
    var src = pairs.filter(function(p){ return p[0].toLowerCase() === 'utm_source'; })[0];
    return {
      referrer: document.referrer || '',
      landing: location.origin + location.pathname + location.search,  // # 부분은 빼고 기록
      utm: pairs.map(function(p){ return p[0] + '=' + p[1]; }).join('&'),
      utmSource: src ? src[1] : ''
    };
  }
  var t = null;
  try { t = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (_) { t = null; }
  if (!t || typeof t !== 'object') {
    t = now();
    try { sessionStorage.setItem(KEY, JSON.stringify(t)); } catch (_) { /* 저장소를 못 쓰면 이 페이지 값만 쓴다 */ }
  }
  window.mfFirstTouch = t;
})();
