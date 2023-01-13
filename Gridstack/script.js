var grid = jQuery('.grid-stack').gridstack();


$('#save-layout').click(function() {
  var layout = JSON.stringify(grid.gridstack('toJson'));
});

$('#add-widget').click(function() {
  var widget = {
    x: 0,
    y: 0,
    width: 2,
    height: 2,
    content: '<div>New Widget</div>'
  }
  grid.gridstack().addWidget(widget);
});

$('#remove-widget').click(function() {
  var selectedWidget = grid.gridstack('getSelectedWidget');
  grid.gridstack().removeWidget(selectedWidget);
});
