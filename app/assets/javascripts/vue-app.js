$(document).on("turbolinks:load", function() {
  var app = new Vue({
    el: "#body",
    data: {
      greeting: "Hello ROR World!"
    }
  })
})
