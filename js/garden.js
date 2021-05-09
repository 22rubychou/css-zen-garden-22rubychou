$(window).scroll(function () {
  let scrollval = $(this).scrollTop();
  $('.summary-text').css('transform', 'translate(0px,-' + scrollval /2.8  + '%)')
  $('.download').css('transform', 'translate(0px,-' + scrollval  + '%)')
  $('#zen-summary::after').css('transform', 'translate(0px,-' + scrollval + '%)')
//$('#zen-preamble p ').css('transform', 'translate(-' + scrollval/30 + '%,0px)')
  
})

const cursor = document.querySelector('.cursor')
document.addEventListener('mouseover',(e) => {
  cursor.style.left = e.pageX +'px';
  cursor.style.top = e.pageY +'px';
})


let nowloc = 0;
    $(window).on('scroll', function () {
      nowloc = $(window).scrollTop()
      if (nowloc >= $('#zen-preamble h3').scrollTop() && nowloc <= ($('#zen-preamble h3').scrollTop()+1600)) {
        $('#zen-preamble h3').css({"color":"turquoise"})
      }else{
        $('#zen-preamble h3').css({"color":"black"})
      }
      
      if(nowloc >= ($('#zen-preamble p').scrollTop()+1600)){
        $('#zen-preamble p').css({"color":"turquoise"})
      }else{
        $('#zen-preamble p').css({"color":"black"})
      }

      if(nowloc >= $('#zen-explanation').scrollTop()+2350 && nowloc < $('#zen-explanation').scrollTop()+4850){
        $('.cursor').css({"opacity":1})
      }else{
        $('.cursor').css({"opacity":0})
      }
      console.log(nowloc)
    })

