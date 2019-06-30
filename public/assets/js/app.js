$(document).ready(function () {
    $("#enter-burger").on("submit", function (event) {
        event.preventDefault();
        const newBurger = $("#new-burger").val().trim();

        data = {
            burger_name: newBurger
        };
        $.post("/api/addburger", data,
            function (response) {
                // Reload the page to get the updated list
                window.location.href = "/";

            }
        );
    });

    $(".update-deboured").on("click", function (event) {
        event.preventDefault();
        const id = $(this).attr("id");
        const dataCustomer = { name: $(`#eater-name${id}`).val() };

        if (name !== null) {

            $.post("/api/postcustomer", dataCustomer, function (result) {
                const dataBurger = { id: id, CustomerId: result.id };
                $.ajax("/api/putburger", {
                    type: "PUT",
                    data: dataBurger
                }).then(
                    function (result) {
                        location.reload();
                    }
                );


            });
        }
    });
});
