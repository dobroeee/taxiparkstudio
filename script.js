(function () {
  const backButtons = document.querySelectorAll('[data-back]');

  backButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      if (window.history.length > 1) {
        window.history.back();
        return;
      }

      window.location.href = '/taxiparkstudio/';
    });
  });
})();
