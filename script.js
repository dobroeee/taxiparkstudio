document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-back]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      if (document.referrer && document.referrer !== location.href) { e.preventDefault(); history.back(); }
    });
  });
});