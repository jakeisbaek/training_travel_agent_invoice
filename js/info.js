$(document).ready(function(){
    let selectedType1 = sessionStorage.getItem("selectedType1");
    let selectedType2 = sessionStorage.getItem("selectedType2");
    let selectedType3 = sessionStorage.getItem("selectedType3");

    selectedType1 = selectedType1.replace(/^"|"$/g, '');
    selectedType2 = selectedType2.replace(/^"|"$/g, '');
    selectedType3 = selectedType3.replace(/^"|"$/g, '');
    
    if(selectedType1 === "Flight") {
        $('.a').text(selectedType1);
        $('.b').text(selectedType2);
        $('.c').text(selectedType3);

        if(selectedType3 === "other") {
            $('.c').text("non-preferred airlines");
        }

        if(selectedType3 !== "Air Canada") {
            $('.pic1').css("background-image", "url('assets/info_flight1.jpg')");
        }

        if(selectedType3 !== "Air Canada") {
            $('.pic2').css("background-image", "url('assets/info_flight2.jpg')");
        }           

    }else if(selectedType1 === "All Inclusive") {
        $('.a').text(selectedType1 + " Vacations");
        $('.c').text(selectedType3 + " in " + selectedType2);
        $('.pic1').css("background-image", "url('assets/info_ai1.jpg')");
        $('.pic1>h1').text("Airport");
        $('.pic2').css("background-image", "url('assets/info_ai2.jpg')");
        $('.pic2>h1').text("Transfer");
        $('.pic3').css("background-image", "url('assets/info_ai3.jpeg')");
        $('.pic3>h1').text("Beach");

        if(selectedType2 === "Other Country") {
            $('.c').text("exotic area");
        }

    }else if(selectedType1 === "Cruise") {
        $('.a').text(selectedType1);
        $('.c').text(" visiting " + selectedType2);
        $('.pic1').css("background-image", "url('assets/info_c1.jpg')");
        $('.pic1>h1').text("Cruiselines");
        $('.pic2').css("background-image", "url('assets/info_c2.jpg')");
        $('.pic2>h1').text("Destinations");
        $('.pic3').css("background-image", "url('assets/info_c3.jpg')");
        $('.pic3>h1').text("Deck plan");

    }else {
        $('.a').text(selectedType1);
        $('.c').text(" visiting " + selectedType2);
        $('.pic1').css("background-image", "url('assets/info_flight1.jpg')");
        $('.pic1>h1').text("Flights");
        $('.pic2').css("background-image", "url('assets/info_t1.jpeg')");
        $('.pic2>h1').text("Destinations");
        $('.pic3').css("background-image", "url('assets/info_t2.jpg')");
        $('.pic3>h1').text("Accommodations");
        $('.pic3>h1').css("font-size", "30px");

        if(selectedType2 === "other") {
            $('.c').text(" visiting exotic countries" );
        }
    }
    $('.pic1').click(function(){
        if(selectedType3 === "Air Canada") {
            window.open("https://www.aircanada.com/ca/en/aco/home.html#/");
        }else if(selectedType3 === "Westjet") {
            window.open("https://www.westjet.com/en-ca/index");
        }else if(selectedType1 === "Flight"){
            window.open("https://www.flightcentre.ca/");
        }else if(selectedType1 === "All Inclusive"){
            window.open("https://www.sleepinginairports.net/");
        }else if(selectedType1 === "Cruise"){
            window.open("https://www.flightcentre.ca/cruises/");
        }else {
            window.open("https://www.flightcentre.ca/");
        }
    });  

    $('.pic2').click(function(){
        if(selectedType1 === "Flight"){
            window.open("https://www.seatguru.com/");
        }else if(selectedType1 === "All Inclusive") {
            window.open("https://www.viator.com/Caribbean-tours/Airport-and-Ground-Transfers/d4-g15-c52");
        }else {
            window.open("https://www.flightcentre.ca/destination");
        }

    });  

    $('.pic3').click(function(){

        if(selectedType3 === "Air Canada") {
            window.open("https://www.aircanada.com/ca/en/aco/home/fly/premium-services/maple-leaf-lounges.html");
        }else if(selectedType1 === "Flight") {
            window.open("https://www.prioritypass.com/");
        }else if(selectedType1 === "All Inclusive") {
            window.open("https://www.tripadvisor.com/");
        }else if(selectedType1 === "Cruise"){
            window.open("https://www.cruisedeckplans.com/DP/deckplans/index.php");
        }else {
            window.open("https://www.flightcentre.ca/tours/");
        }
        
    });

    $(".link_invoice").click(function() {
            
            setTimeout(function(){
                location.href="invoice.html";
            }, 500)
        });


    });