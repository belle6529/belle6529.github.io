$(document).ready(function() {
    $('li.change_active').on('click', function(){
        $('li.change_active').removeClass('active');
       $(this).addClass('active');
    });
    $('.skill_content').waypoint(function(){
        $(this).addClass('in');
      },{offset:'90%'});
    $('.about_content').children().waypoint(function(){
        $(this).addClass('in');
    },{offset: '90%'});
});
