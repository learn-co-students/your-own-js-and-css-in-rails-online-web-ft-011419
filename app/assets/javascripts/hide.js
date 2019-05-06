function hideWhenClicked(event) {

  const clickAction = $(event.target);
  clickAction.hide();
}

$('#hide_this').click(hideWhenClicked);
