$(document).ready(function () {

    let hour = new Date().getHours();
    let greet = hour < 12 ? "Good Morning" :
                hour < 18 ? "Good Afternoon" :
                "Good Evening";

    $("#greeting").text(greet);

    $("#themeToggle").click(function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text("☀️");
        } else {
            $(this).text("🌙");
        }
    });

    let target = 25000;
    let count = 0;
    let step = target / 100;

    let interval = setInterval(function () {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        $("#balance").text("₹ " + Math.floor(count));
    }, 15);

});