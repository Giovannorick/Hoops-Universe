$(document).ready(function () {
  $(".buy-button").click(function () {
    const productName = $(this).data("product-name");
    const productPrice = $(this).data("product-price");
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    window.location.href = "purchase-product.html";
  });
});
