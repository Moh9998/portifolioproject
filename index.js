function menu() {
  const nav = document.getElementById('nav-header');
  nav.style.display = 'flex';
  const icon = document.getElementById('close-icon');
  const burger = document.getElementById('burger');
  burger.style.display = 'none';
  icon.style.display = 'inline-block';
  document.getElementById('img-deco1').style.display = 'block';
  document.getElementById('img-dots').style.display = 'block';
  document.getElementById('img-deco2').style.display = 'block';
}

function closeMenu() {
  const nav = document.getElementById('nav-header');
  nav.style.display = 'none';
  const icon = document.getElementById('close-icon');
  const burger = document.getElementById('burger');
  burger.style.display = 'flex';
  icon.style.display = 'none';
  document.getElementById('img-deco1').style.display = 'none';
  document.getElementById('img-dots').style.display = 'none';
  document.getElementById('img-deco2').style.display = 'none';
}
