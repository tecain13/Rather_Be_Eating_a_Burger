// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).children(".burger_id").val();

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var burger_name = $("#ca").val().trim();
        burger_name = { "burger_name": burger_name }

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger_name
        }).then(
            function () {
                console.log("created new burger"); location.reload();
            }
        );
    });


});