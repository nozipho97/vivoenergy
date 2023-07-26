
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".user-form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            const userData = {
                firstName: formData.get("fname"),
                lastName: formData.get("lname"),
                email: formData.get("email"),
                dateTime: formData.get("datetime"),
                contentViewed: form.elements["content-viewed"].checked
            };

            // Here, you can send the 'userData' to your server or database
            // using an API call or any other preferred method.

            // For demonstration purposes, let's log the data to the console:
            console.log(userData);

            // Optionally, you can provide feedback to the user that they have successfully registered.
            alert("You have successfully registered for the course!");
            form.reset();
        });
    });
