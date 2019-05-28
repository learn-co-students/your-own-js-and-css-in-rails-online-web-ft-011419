function hideWhenClicked(event0) {
    var $target = $(event.target);
    $target.hide();
}
$('#hide_this').click(hideWhenClicked);