$(document).ready(function () {
  const productName = localStorage.getItem("productName");
  const productPrice = localStorage.getItem("productPrice");
  if (productName && productPrice) {
    $("#product-name span").text(productName);
    $("#product-price span").text(productPrice);
  } else {
    $("#product-name span").text("No product selected");
    $("#product-price span").text("-");
  }
  $("#purchase-form").on("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your transaction!");
    localStorage.removeItem("productName");
    localStorage.removeItem("productPrice");
    window.location.href = "index.html";
  });
});
