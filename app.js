'use stric';


var perHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shop(name, max, min, avarege) {
    this.name = name;
    this.numOfCookie = [];
    this.max = max;
    this.min = min;
    this.avarege = avarege;
    this.randCookie = 0;
    this.totalCookie = 0;
}
 Shop.prototype.getRandomCookie = function(min,max){
     this.numOfCookie = Math.floor(Math.random() * (this.max - this.min)) + this.min

 }

 Shop.prototype.render = function () {
        var contanier = document.getElementById('City');
        var articalE1 = document.createElement('article');
        contanier.appendChild(articalE1);
        var h2E1 = document.createElement('h2');
        articalE1.appendChild(h2E1);
        h2E1.textContent = this.name;
        var pE1 = document.createElement('p');
        articalE1.appendChild(pE1);
        var ulE1 = document.createElement('ul');
        articalE1.appendChild(ulE1);
        for (var i = 0; i < perHour.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
            this.totalCookie = this.totalCookie + this.randCookie;
            this.numOfCookie.push(this.randCookie);
            this.numOfCookie.push();
            liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
        }
        var liE2 = document.createElement('li');
        ulE1.appendChild(liE2);
        liE2.textContent = `Total : ${this.totalCookie} cookies`;

 }

 var seattl = new Shop('Seattl',65,23,6.3);
 seattl.getRandomCookie(65,23);
 seattl.render();



//    render = function (max, min, avarege) {
//     var contanier = document.getElementById('City');
//     var articalE1 = document.createElement('article');
//     contanier.appendChild(articalE1);
//     var h2E1 = document.createElement('h2');
//     articalE1.appendChild(h2E1);
//     h2E1.textContent = this.name;
//     var pE1 = document.createElement('p');
//     articalE1.appendChild(pE1);
//     // var ulE1 = document.createElement('ul');
//     // articalE1.appendChild(ulE1);
//     var tableE1 = document.createElement('table');
//     contanier.appendChild(tableE1);
//     var trE1 = document.createElement('tr');
//     tableE1.appendChild(trE1);
//     var thE1 = document.createElement('th');
//     trE1.appendChild(thE1);
//     for (var i = 0; i < perHour.length; i++) {
//         // var liE1 = document.createElement('li');
//         // ulE1.appendChild(liE1);
//         this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
//         this.totalCookie = this.totalCookie + this.randCookie;
//         thE1.textContent = this.randCookie;
//         console.log(thE1);
        // this.numOfCookie.push(this.randCookie);
        // this.numOfCookie.push();
        // liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
    
    // var liE2 = document.createElement('li');
    // ulE1.appendChild(liE2);
    // liE2.textContent = `Total : ${this.totalCookie} cookies`;




    // name: 'Seattl',
    // numOfCookie: [],
    // max: 65,
    // min: 23,
    // avarege: 6.3,
    // randCookie: 0,
    // totalCookie: 0,
    // function(max, min, avarege) {
    //     var contanier = document.getElementById('City');
    //     var articalE1 = document.createElement('article');
    //     contanier.appendChild(articalE1);
    //     var h2E1 = document.createElement('h2');
    //     articalE1.appendChild(h2E1);
    //     h2E1.textContent = this.name;
    //     var pE1 = document.createElement('p');
    //     articalE1.appendChild(pE1);
    //     // var ulE1 = document.createElement('ul');
    //     // articalE1.appendChild(ulE1);
    //     var tableE1 = document.createElement('table');
    //     contanier.appendChild(tableE1);
    //     var trE1 =document.createElement('tr');
    //     tableE1.appendChild(trE1);
    //     var thE1 = document.createElement('th');
    //     trE1.appendChild(thE1);
    //     for (var i = 0; i < perHour.length; i++) {
    //         // var liE1 = document.createElement('li');
    //         // ulE1.appendChild(liE1);
    //         this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
    //         this.totalCookie = this.totalCookie + this.randCookie;
    //         this.numOfCookie.push(this.randCookie);
    //         this.numOfCookie.push();
    //         // liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
    //     }
    //     var liE2 = document.createElement('li');
    //     ulE1.appendChild(liE2);
    //     liE2.textContent = `Total : ${this.totalCookie} cookies`;
    // }

// seattl.render();

// var tokyo = {
//     name: 'Tokyo',
//     numOfCookie: [],
//     max: 24,
//     min: 3,
//     avarege: 1.2,
//     randCookie: 0,
//     totalCookie: 0,
//     render: function (max, min, avarege) {
//         var contanier = document.getElementById('City');
//         var articalE1 = document.createElement('article');
//         contanier.appendChild(articalE1);
//         var h2E1 = document.createElement('h2');
//         articalE1.appendChild(h2E1);
//         h2E1.textContent = this.name;
//         var pE1 = document.createElement('p');
//         articalE1.appendChild(pE1);
//         var ulE1 = document.createElement('ul');
//         articalE1.appendChild(ulE1);
//         for (var i = 0; i < perHour.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
//             this.totalCookie = this.totalCookie + this.randCookie;
//             this.numOfCookie.push(this.randCookie);
//             this.numOfCookie.push();
//             liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
//         }
//         var liE2 = document.createElement('li');
//         ulE1.appendChild(liE2);
//         liE2.textContent = `Total : ${this.totalCookie} cookies`;
//     }

// }
// tokyo.render();



// var dubai = {
//     name: 'Dubai',
//     numOfCookie: [],
//     max: 38,
//     min: 11,
//     avarege: 3.7,
//     randCookie: 0,
//     totalCookie: 0,
//     render: function (max, min, avarege) {
//         var contanier = document.getElementById('City');
//         var articalE1 = document.createElement('article');
//         contanier.appendChild(articalE1);
//         var h2E1 = document.createElement('h2');
//         articalE1.appendChild(h2E1);
//         h2E1.textContent = this.name;
//         var pE1 = document.createElement('p');
//         articalE1.appendChild(pE1);
//         var ulE1 = document.createElement('ul');
//         articalE1.appendChild(ulE1);
//         for (var i = 0; i < perHour.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
//             this.totalCookie = this.totalCookie + this.randCookie;
//             this.numOfCookie.push(this.randCookie);
//             this.numOfCookie.push();
//             liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
//         }
//         var liE2 = document.createElement('li');
//         ulE1.appendChild(liE2);
//         liE2.textContent = `Total : ${this.totalCookie} cookies`;
//     }
// }
// dubai.render();


// var paris = {
//     name: 'Paris',
//     numOfCookie: [],
//     max: 38,
//     min: 20,
//     avarege: 2.3,
//     randCookie: 0,
//     totalCookie: 0,
//     render: function (max, min, avarege) {
//         var contanier = document.getElementById('City');
//         var articalE1 = document.createElement('article');
//         contanier.appendChild(articalE1);
//         var h2E1 = document.createElement('h2');
//         articalE1.appendChild(h2E1);
//         h2E1.textContent = this.name;
//         var pE1 = document.createElement('p');
//         articalE1.appendChild(pE1);
//         var ulE1 = document.createElement('ul');
//         articalE1.appendChild(ulE1);
//         for (var i = 0; i < perHour.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
//             this.totalCookie = this.totalCookie + this.randCookie;
//             this.numOfCookie.push(this.randCookie);
//             this.numOfCookie.push();
//             liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
//         }
//         var liE2 = document.createElement('li');
//         ulE1.appendChild(liE2);
//         liE2.textContent = `Total : ${this.totalCookie} cookies`;
//     }
// }
// paris.render();


// var lima = {
//     name: 'Lima',
//     numOfCookie: [],
//     max: 16,
//     min: 2,
//     avarege: 4.6,
//     randCookie: 0,
//     totalCookie: 0,
//     render: function (max, min, avarege) {
//         var contanier = document.getElementById('City');
//         var articalE1 = document.createElement('article');
//         contanier.appendChild(articalE1);
//         var h2E1 = document.createElement('h2');
//         articalE1.appendChild(h2E1);
//         h2E1.textContent = this.name;
//         var pE1 = document.createElement('p');
//         articalE1.appendChild(pE1);
//         var ulE1 = document.createElement('ul');
//         articalE1.appendChild(ulE1);
//         for (var i = 0; i < perHour.length; i++) {
//             var liE1 = document.createElement('li');
//             ulE1.appendChild(liE1);
//             this.randCookie = Math.floor(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avarege)
//             this.totalCookie = this.totalCookie + this.randCookie;
//             this.numOfCookie.push(this.randCookie);
//             this.numOfCookie.push();
//             liE1.textContent = `${perHour[i]} : ${this.randCookie} cookies`;
//         }
//         var liE2 = document.createElement('li');
//         ulE1.appendChild(liE2);
//         liE2.textContent = `Total : ${this.totalCookie} cookies`;
//     }
// }
// lima.render();
