$('.tab-buttons a').click(function(){
    $(".tab-buttons a").removeClass("active");
    $(this).addClass("active");
    $('.tab').hide();
    $('#tab-'+$(this).attr('data-index')).fadeIn();
});
$('#button-desktop').click(() => {
    if (!window.tnb_keysign) {
        console.log("Keysign is not installed!");
        return
    }
    let amount = $(".tnbc-box h2").text().split(" ")[0];
    let to = $(".tnbc-box input")[0].value;
    let memo = $(".tnbc-box input")[1].value;
    window.tnb_keysign.requestTransfer([{to, amount, memo}], res => console.log(res))
})