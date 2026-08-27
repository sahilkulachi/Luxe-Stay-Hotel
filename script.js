
const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value;
    const email = bookingForm.querySelector('input[type="email"]').value;
    const dates = bookingForm.querySelectorAll('input[type="date"]');

    const checkIn = dates[0].value;
    const checkOut = dates[1].value;

    if (!name || !email || !checkIn || !checkOut) {
        alert("براہِ کرم تمام معلومات مکمل کریں۔");
        return;
    }

    if (checkOut <= checkIn) {
        alert("Check-out کی تاریخ Check-in کے بعد ہونی چاہیے۔");
        return;
    }

    alert(
        "🎉 Booking Request Sent!\n\n" +
        "Thank you, " + name + "!\n" +
        "We have received your booking request."
    );

    bookingForm.reset();
});

const roomButtons = document.querySelectorAll(".room-card button");

roomButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector("#booking").scrollIntoView({
            behavior: "smooth"
        });
    });
});
