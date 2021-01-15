$(document).ready(function(){

    $('.reset_button' ).click(function() {
        location.reload();
    });

    let selectedValue;
    let selectArray = [];
    let selectedType1;
    let selectedType2;
    let selectedType3;

    $('.select_flight' ).click(function() {
        $('.flight').css( "display", "flex" );
        $('.select_all_inclusive').css( "visibility", "hidden" );
        $('.select_cruise').css( "visibility", "hidden" );
        $('.select_tour').css( "visibility", "hidden" );
        $('.question').css( "visibility", "hidden" );
    });

    $('.select_all_inclusive' ).click(function() {
        $('.all_inclusive').css( "display", "flex" );
        $('.select_flight').css( "visibility", "hidden" );
        $('.select_cruise').css( "visibility", "hidden" );
        $('.select_tour').css( "visibility", "hidden" );
        $('.question').css( "visibility", "hidden" );
    });

    $('.select_cruise' ).click(function() {
        $('.cruise').css( "display", "flex" );
        $('.select_flight').css( "visibility", "hidden" );
        $('.select_all_inclusive').css( "visibility", "hidden" );
        $('.select_tour').css( "visibility", "hidden" );
        $('.question').css( "visibility", "hidden" );
    });

    $('.select_tour' ).click(function() {
        $('.tour').css( "display", "flex" );
        $('.select_flight').css( "visibility", "hidden" );
        $('.select_all_inclusive').css( "visibility", "hidden" );
        $('.select_cruise').css( "visibility", "hidden" );
        $('.question').css( "visibility", "hidden" );
    });

    $('.domestic_flight' ).click(function() {
        $('.domestic').css( "display", "flex" );
        $('.trans_border_flight').css( "visibility", "hidden" );
        $('.international_flight').css( "visibility", "hidden" );
        $('.question2').css( "visibility", "hidden" );
    });

    $('.trans_border_flight' ).click(function() {
        $('.transborder').css( "display", "flex" );
        $('.domestic_flight').css( "visibility", "hidden" );
        $('.international_flight').css( "visibility", "hidden" );
        $('.question2').css( "visibility", "hidden" );
    });

    $('.international_flight' ).click(function() {
        $('.international').css( "display", "flex" );
        $('.domestic_flight').css( "visibility", "hidden" );
        $('.trans_border_flight').css( "visibility", "hidden" );
        $('.question2').css( "visibility", "hidden" );
    });

    $('.search_flight1').click(function(){
        window.open("https://www.staralliance.com/en/home");
    })

    $('.search_flight2').click(function(){
        window.open("https://www.skyteam.com/en/about");
    })

    $('.search_flight3').click(function(){
        window.open("https://www.oneworld.com/members");
    })

    $('.mexico_ai' ).click(function() {
        $('.mexico').css( "display", "flex" );
        $('.dominica_ai').css( "visibility", "hidden" );
        $('.cuba_ai').css( "visibility", "hidden" );
        $('.other_ai').css( "visibility", "hidden" );
        $('.question2').css( "visibility", "hidden" );
    });

    $('.dominica_ai' ).click(function() {
        $('.dr').css( "display", "flex" );
        $('.mexico_ai').css( "visibility", "hidden" );
        $('.cuba_ai').css( "visibility", "hidden" );
        $('.other_ai').css( "visibility", "hidden" );
        $('.question2').css( "visibility", "hidden" );
    });

    $('.cuba_ai' ).click(function() {
        $('.cuba').css( "display", "flex" );
        $('.mexico_ai').css( "visibility", "hidden" );
        $('.dominica_ai').css( "visibility", "hidden" );
        $('.other_ai').css( "visibility", "hidden" );
        $('.question2').css( "visibility", "hidden" );
    });

    $('.cruise_a' ).click(function() {
        $('.cruise_area').css( "display", "flex" );
        $('.cruise_a').css( "visibility", "hidden" );
        $(this).css( "visibility", "visible" );
        $('.question2').css( "visibility", "hidden" );
    });

    $(document).on('click', '#selector', function() {
        selectedValue = $(this).data("value");
        selectArray = selectedValue.split("_");
        selectedType1 = selectArray[0];
        selectedType2 = selectArray[1];
        selectedType3 = selectArray[2];
        sessionStorage.setItem("selectedType1", JSON.stringify(selectedType1));
        sessionStorage.setItem("selectedType2", JSON.stringify(selectedType2));
        sessionStorage.setItem("selectedType3", JSON.stringify(selectedType3));
        setTimeout(function(){
            location.href="info.html";
        }, 500)
    });

});


