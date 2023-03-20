$(document).ready(function () {
  $(".cadastra").on("click", function (e) {
    e.preventDefault();

    const nameTarefa = $("#nomeTarefa").val();
    const li = document.createElement("li");
    li.innerHTML = `${nameTarefa}`;
    $("ul").append(li);
    $("#nomeTarefa").val("");
    $(li).click(function () {
      $(li).toggleClass("feito");
    });
  });
});
