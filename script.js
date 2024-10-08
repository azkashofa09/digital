const messages = [
    "inget kata azka jangan nakal",
    "kamu kebanggan banyak orang",
    "aku selalu ada kapan pun kamu mau cerita",
    "inget naila.. ada orang yang pengen liat kamu berhasil",
    "Kamu bisa melakukan apa pun yang kamu impikan!",
    "Selalu ingat, kamu berharga!",
    "Kebaikanmu bisa mengubah dunia!",
    "naila.. ingat kamu kuat!!",
    "naila kamu harus semangat",
    "jangan pikirin omongan orang lain",
    "Teruslah berusaha, hasil yang baik akan datang!"
];

document.getElementById('positiveButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    document.getElementById('message').textContent = message;
});
