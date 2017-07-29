function changeClass(){
  $(this).prev().toggleClass('active');
}
$(function(){
  $('div .blue-part').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
});
