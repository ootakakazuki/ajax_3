
$(function () {
    $("#btn1").on('click', function () {
      $.ajax({
        url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
        dataType: 'jsonp',
      }).then(
        function (data) {
          if (data.results) {
              console.log(data)
            let result = data.results[0];
            $('#prefecture').val(result.address1);
            $('#city').val(result.address2);
            $('#address').val(result.address3);
          }
        }
      );
    });
  });