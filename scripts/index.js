$(window).on('load', function() {

  $('.btn').mouseup(function() { this.blur() })

  const buttonClose = document.querySelector('.btn-close');
  buttonClose.addEventListener('click', () => {
    const modal = document.getElementById('myModal');
    console.log(modal);
    modal.classList.remove('show');
    modal.classList.add('hide');
  })

  $('.btn-warning')
    .click(function() {
      if($('#text:visible').length > 0) {
        $('#text').hide();  
      } else {
        $('#text').show();
      }
    });

  $('.btn-success')
    .click(function() {
      if ($('#dashed-border').hasClass('order-first')) {
        $('#dashed-border').removeClass('order-first');
      } else {
        $('#dashed-border').addClass('order-first');
      }
    });

  $('#open-second-page').click(function() {
    window.open('../pages/second-page.html', '_blank');
  });

  $('form').submit(function(event) {
    event.preventDefault();

    const select1Value = $('#select1').val();
    const select2Value = $('#select2').val();
    const select3Value = $('#select3').val();
    const select4Value = $('#select4').val();
    const select5Value = $('#select5').val();
    const textarea1Value = $('#textarea1').val();
    const textarea2Value = $('#textarea2').val();

    const jsonData = {
      select1: select1Value,
      select2: select2Value,
      select3: select3Value,
      select4: select4Value,
      select5: select5Value,
      textarea1: textarea1Value,
      textarea2: textarea2Value
    };

    const jsonString = JSON.stringify(jsonData);

    $('#output').text(jsonString);

    $.ajax({
      type: 'GET',
      url: '../server/server.php',
      data: jsonData,
      success: function(response) {
        alert('Ответ сервера: ' + response);
      },
      error: function() {
        alert('Произошла ошибка при отправке запроса.');
      }
    });
  });
});
