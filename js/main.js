// main.js
document.addEventListener('DOMContentLoaded', () => {

  // Highlight current page link in nav: based on body data-page attribute
  const page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav-list a[data-link]').forEach(a => {
      // Determine whether link href matches data-page; we use href filename vs data-page mapping
      const href = a.getAttribute('href') || '';
      if (href.includes(page) || (page === 'home' && href.includes('index.html'))) {
        a.classList.add('active');
      }
    });
  }

  // Handler for thumbnail links that open centered new window for large images
  document.querySelectorAll('.thumb-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const large = link.getAttribute('data-large');
      if (!large) return;
      // desired large size: 600x400
      const w = 600, h = 400;
      // center on screen
      const left = Math.round((screen.width - w) / 2);
      const top = Math.round((screen.height - h) / 2);
      // open in new window
      const features = `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`;
      const newWin = window.open('', '_blank', features);
      if (!newWin) { alert('Popup blocked. Allow popups for this site or open the image directly.'); return; }

      // Write a minimal HTML with the image centered
      newWin.document.write(`
        <!doctype html><html><head><title>Image</title>
        <style>body{margin:0;display:flex;align-items:center;justify-content:center;background:#000}img{max-width:100%;height:auto}</style>
        </head><body><img src="${large}" alt="Large image"></body></html>
      `);
      newWin.document.close();
    });
  });

    });

