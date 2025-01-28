// 您好，我是QIUSHUZE
window.addEventListener('scroll', function () {
  const content = document.getElementById('content');
  if (window.scrollY > 1500) {  // 设置滚动距离阈值
    content.classList.add('bg-fade');
  } else {
    content.classList.remove('bg-fade');
  }
});

// 欢迎和我取得联系
document.querySelector('.threedimge').addEventListener('mousemove', function (event) {
  const container = this; // .threedimge
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const centerX = width / 1;
  const centerY = height / 1;

  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  const deltaX = (mouseX - centerX) / centerX;
  const deltaY = (mouseY - centerY) / centerY;

  const tiltX = deltaY * 20;
  const tiltY = deltaX * -20;

  container.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

document.querySelector('.threedimge').addEventListener('mouseleave', function () {

  this.style.transform = 'rotateX(0deg) rotateY(0deg)';
});