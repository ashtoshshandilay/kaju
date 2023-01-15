function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function varstatus(variantid){
  $(".variant_active").removeClass("variant_active");
  $("."+variantid).addClass("variant_active");
  $(".product-buy-now-button").prop('disabled', false);
  //document.getElementById("product-buy-now-button").disabled = false;
}

function paystatus(payid){
  $(".payment_check").removeClass("payment_check");
  $("."+payid).addClass("payment_check");
}