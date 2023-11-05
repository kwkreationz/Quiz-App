$(document).ready(function () {
    var correctAnswer = "Roman Reigns";
    var isAnswered = false;

    $(".option").click(function () {
        if (!isAnswered) {
            $(".option").removeClass("selected");
            $(this).addClass("selected");
            isAnswered = true;
        }
    });

    $("#submit").click(function () {
        if (isAnswered) {
            var selectedOption = $(".option.selected").text();
            var feedback = $("#feedback");

            if (selectedOption === correctAnswer) {
                feedback.text("Correct! Acknowledge Him!.");
                feedback.addClass("correct");
            } else {
                feedback.text("Incorrect. The correct answer is Roman Reigns.");
                feedback.addClass("incorrect");
            }

            // Disable all options
            $(".option").off("click");
            isAnswered = true;
        }
    });
});
