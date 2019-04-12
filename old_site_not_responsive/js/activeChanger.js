$('.submenu-list-item:not(.active)').on('mouseover', function() {
  $(this).parent().find('.submenu-list-item.active').removeClass('active');
  $(this).parent().find('.submenu-list.active').removeClass('active');    
  $(this).addClass('active');
});
$('.submenu-list-item:not(.active)').on('mouseout', function() {
    $(this).parent().find('.submenu-list:not(.active)').addClass('active');
    $(this).removeClass('active');
});