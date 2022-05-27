// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor:["Yellow","Pink","White","Purple"],
    education:[{
        name: "SD 01",
        city: "Jakarta",
        graduate: 2016
    },
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate: 2016,
    },
    {
        name: "SMA 03",
        city: "Jakarta",
        graduate: ""
    },
],
    favoriteRestaurant:["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok"]

    
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 17,
    email: "Wendy@dingdong.com",
    favoriteColor:["Blue", "Black", "Grey"],
    education:[{
        name: "SD 02",
        city: "Jakarta",
        graduate: 2010
    },
    {
        name: "SMP 03",
        city: "Bogor",
        graduate: 2013,
    },
    {
        name: "SMA 01",
        city: "Surabaya",
        graduate: 2016
    },
    {
        name: "Universitas Maju",
        city: "Tangerang"
    },
],
    favoriteRestaurant:["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]

};

function User(inputName, inputGender, inputAge, inputEmail, inputFavoriteColor, inputEducation, inputFavoriteRestaurant) {
    this.name = inputName;
    this.gender = inputGender;
    this.age = inputAge;
    this.email = inputEmail;
    this.favoriteColor = inputFavoriteColor;
    this.education = inputEducation;
    this.favoriteRestaurant = inputFavoriteRestaurant;
}

// console.log(firstUser.education);

const User1 = new User(firstUser.name, firstUser.gender, firstUser.age, firstUser.email, firstUser.favoriteColor, firstUser.education, firstUser.favoriteRestaurant)
const User2 = new User(secondUser.name, secondUser.gender, secondUser.age, secondUser.email, secondUser.favoriteColor, secondUser.education, secondUser.favoriteRestaurant)

let data = {User1, User2};
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [User2, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};