// 您好，我是QIUSHUZE
window.addEventListener('scroll', function () {
  const content = document.getElementById('content');
  if (window.scrollY > 3000) {  // 设置滚动距离阈值
    content.classList.add('bg-fade');
  } else {
    content.classList.remove('bg-fade');
  }
});
