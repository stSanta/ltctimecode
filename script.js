(function () {
  const display = document.querySelector(".tc-live");

  if (!display) {
    return;
  }

  const pad = (value) => String(value).padStart(2, "0");

  function renderTimecode() {
    const now = new Date();
    const frame = Math.floor((now.getMilliseconds() / 1000) * 24);
    display.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}:${pad(frame)}`;
  }

  renderTimecode();
  window.setInterval(renderTimecode, 1000 / 12);
})();
