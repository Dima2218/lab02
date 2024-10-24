document.getElementById("start-btn").addEventListener("click", function() {
    const name = prompt("Як вас звати?");
    let age;
    do {
        age = prompt("Скільки вам років?");
    } while (isNaN(age) || age === "");

    if (age >= 18) {
        alert("Вітаємо, " + name + "! Ви досягли повноліття.");
    } else {
        alert("Вибачте, " + name + ", ви ще не досягли повноліття.");
    }

    const continueSurvey = confirm("Чи хочете ви продовжити опитування?");

    if (continueSurvey) {
        const favoriteColor = prompt("Який ваш улюблений колір?") ?? "не вказано";
        const hobby = prompt("Яке у вас хобі?") ?? "не вказано";

        alert(`Інформація про вас:
        Ім'я: ${name}
        Вік: ${age}
        Улюблений колір: ${favoriteColor}
        Хобі: ${hobby}`);
    } else {
        alert("Дякуємо, що витратили час на опитування, " + name + "!");
    }
});