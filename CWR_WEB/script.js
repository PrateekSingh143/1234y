$(document).ready(function () {

    $('.hex').click(function () {
      var color = 'aqua';
      switch($(this).index())
          {
        case (0):
          color = 'orange';
          break;
        case (1):
          color = 'yellow';
          break;
        case (2):
          color = 'white';
          break;
        case (3):
          color = 'blue';
          break;
        case (4):
          color = 'red';
          break;
        case (5):
          color = 'purple';
          break;
        case (6):
          color = 'lime';
          break;
      }
  
      $(this).css({
        'box-shadow': 'inset 0px 20px 20px -20px ' + color + ', inset 0px -20px 20px -20px ' + color + '',
        'border-bottom': 'solid 1px ' + color + '',
        'border-top': 'solid 1px ' + color + '',
        'color': color
      });
    });
  
    $('.hex').mouseout(function () {
      $(this).removeAttr('style');
    });
  });