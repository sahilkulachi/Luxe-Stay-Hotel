// Luxe Stay Hotel - Booking System

const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value;
    const email = bookingForm.querySelector('input[type="email"]').value;
    const checkIn = bookingForm.querySelectorAll('input[type="date"]')[0].value;
    const checkOut = bookingForm.querySelectorAll('input[type="date"]')[1].value;

    if (!name || !email || !checkIn || !checkOut) {
        alert("براہِ کرم تمام معلومات مکمل کریں۔");
        return;
    }

    if (checkOut <= checkIn) {
        alert("Check-out کی تاریخ Check-in کے بعد ہونی چاہیے۔");
        return;
    }

    alert(
        "Thank you, " + name +
        "! Your booking request has been received."
    );

    bookingForm.reset();
});


// Book Room buttons
const roomButtons = document.querySelectorAll(".room-card button");

roomButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector("#booking").scrollIntoView({
            behavior: "smooth"
        });
    });
});
