
document.querySelectorAll('.langs img').forEach(img => {
  img.addEventListener('click', () => {
    alert('Смена языка: ' + img.alt);
  });
});
