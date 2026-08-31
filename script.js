document.addEventListener('DOMContentLoaded', () => {
  const yearLabel = document.querySelector('.brand');

  if (yearLabel) {
    yearLabel.addEventListener('click', () => {
      document.body.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
