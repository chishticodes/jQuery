// $(document).ready(function () {
//   $('.btn').on('dblclick', function () {
//     alert('Handler for `dblclick` called.');
//     // $('.btn').hide();
//   });
// });

// $(document).ready(function () {
//   $("[id^='shiftTime_']").dblclick(function () {
//     alert('hello');
//   });
// });

// $('#target').on('dblclick', function () {
//   console.log('Handler for called.');
// });

$(function () {
  $('#target').on({
    click: function () {
      console.log('hello');
    },
    mouseleave: function () {
      console.log('mouseleave');
    },
  });

  // $('#other').hide(1000);
  // $('#other').show(1000);

  // $('#target').on('click', function () {
  //   $('#other').animate(
  //     {
  //       opacity: 0.5,
  //       height: '150px',
  //       width: '200px',
  //     },
  //     5000
  //   );
  // });
});
