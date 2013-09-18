$(document).ready(function() {
 $('#sr-sidebar').affix({
    offset: {
      top: 71
    , bottom: function () {
            return (this.bottom = $('#sr-footer').outerHeight(true))
          }
    }
  })
})
