'usestrict';
{
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      let target = document.querySelector(link.hash),
      adjust = 120,
      offset = window.pageYOffset + target.getBoundingClientRect().top - adjust
      
      scrollTo({
        top: offset,
        behavior: 'smooth'
      })
    })
  })
}