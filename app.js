'use stric';

var perHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shop = [];
var contanier = document.getElementById('city');
var table1 = document.createElement('table');
contanier.appendChild(table1);

function Shop(name, max, min, avarege) {
    this.name = name;
    this.cookiePerHour = [];
    this.max = max;
    this.min = min;
    this.avarege = avarege;
    this.randCoustm = 0;

    this.totalCookies = 0;
    shop.push(this);
}
function tableHeaderRow() {

    var tr1 = document.createElement('tr');
    table1.appendChild(tr1);
    var th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = "NamOfShop";

    for (var i = 0; i < perHour.length; i++) {
        var th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = perHour[i];
    }
    var th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = "Total";
}


Shop.prototype.tableDataRow = function () {
    var tr2 = document.createElement('tr');
    table1.appendChild(tr2);
    tr2.textContent = this.name;
    for (var i = 0; i < perHour.length; i++) {
        var td1 = document.createElement('td');
        tr2.appendChild(td1);
        td1.textContent = this.cookiePerHour[i];
        this.totalCookies += this.cookiePerHour[i];
    }
    var th2 = document.createElement('td');
    tr2.appendChild(th2);
    th2.textContent = this.totalCookies;



}
function totalOfTotal() {
    var totalR1 = document.createElement('tr');
    table1.appendChild(totalR1);
    var totalD1 = document.createElement('td');
    totalR1.appendChild(totalD1);
    totalD1.textContent = "Total";
    console.log(totalD1);
    var totaaal = 0;
    for (var i = 0; i < perHour.length; i++) {
        var totalOfFooter = 0;
        var tD1 = document.createElement('td');
        totalR1.appendChild(tD1);
        for (var j = 0; j < shop.length; j++) {
            totalOfFooter += shop[j].cookiePerHour[i];
        }
        tD1.textContent = totalOfFooter;
        totaaal += totalOfFooter;
    }
    var tDTotal = document.createElement('td');
    totalR1.appendChild(tDTotal);
    tDTotal.textContent = totaaal;



}

Shop.prototype.randCookie = function () {
    this.randCoustm = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    return this.randCoustm;
}

Shop.prototype.numOfCookie = function () {
    for (var j = 0; j < perHour.length; j++) {
        var result = Math.floor(this.randCookie() * this.avarege);
        this.cookiePerHour.push(result);
    }
}

var seattl = new Shop('Seattl', 65, 23, 6.3);
var tokyo = new Shop('Tokyo', 24, 3, 1.2);
var dubai = new Shop('Dubai', 38, 11, 3.7);
var paris = new Shop('Paris', 38, 20, 2.3);
var lima = new Shop('Lima', 16, 2, 4.6);

var myform = document.getElementById('NewShop');
myform.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    var name = event.target.name.value;
    console.log(name);
    var max = event.target.max.value;
    console.log(max);
    var min = event.target.min.value;
    console.log(min);
    var avarege = event.target.avarege.value;
    console.log(avarege);
    var shopObjct = new Shop(name,max,min,avarege);
    // shopObjct.randCookie();
    shopObjct.numOfCookie();
    shopObjct.tableDataRow();
    // shopObjct.totalOfTotal();
    myform.reset();
});


tableHeaderRow();
for (var i = 0; i < shop.length; i++) {
    shop[i].numOfCookie();
    shop[i].tableDataRow();
}
totalOfTotal();


