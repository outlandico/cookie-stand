let allStores = [];
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
let totalPerHours = Array.from({ length: hours.length }, () => 0); // Initialize array with zeros for total sales per hour
let totalSales = 0;

function Store(Location, minCustomers, maxCustomers, avgCookies) {
    this.location = Location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalSales = 0;
    this.hourlySales = [];

    this.generateSalesData();

    allStores.push(this);
}

Store.prototype.generateSalesData = function() {
    for (let i = 0; i < hours.length; i++) {
        let pretendSales = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
        let hourlySales = Math.floor(pretendSales * this.avgCookies);
        this.hourlySales.push(hourlySales);
        totalPerHours[i] += hourlySales;
        totalSales += hourlySales;
    }
}

function createTableHeader() {
    let header = document.getElementById("salesTableHeader");
    let row = document.createElement("tr");
    header.appendChild(row);

    let location = document.createElement("th");
    location.textContent = "Location";
    row.appendChild(location);

    for (let i = 0; i < hours.length; i++) {
        let th = document.createElement("th");
        th.textContent = hours[i];
        row.appendChild(th);
    }

    let totals = document.createElement("th");
    totals.textContent = "Location Totals";
    row.appendChild(totals);
}

function createTableBody() {
    let body = document.getElementById("salesTableBody");
    allStores.forEach(store => {
        let row = document.createElement("tr");
        body.appendChild(row);

        let locationCell = document.createElement("td");
        locationCell.textContent = store.location;
        row.appendChild(locationCell);

        for (let i = 0; i < store.hourlySales.length; i++) {
            let td = document.createElement("td");
            td.textContent = store.hourlySales[i];
            row.appendChild(td);
        }

        let totalCell = document.createElement("td");
        totalCell.textContent = store.hourlySales.reduce((acc, cur) => acc + cur, 0);
        row.appendChild(totalCell);
    });
}

function createTableFooter() {
    let footer = document.getElementById("salesTableFooter");
    let row = document.createElement("tr");
    footer.appendChild(row);

    let totalLabel = document.createElement("td");
    totalLabel.textContent = "Totals by the hour";
    row.appendChild(totalLabel);

    for (let i = 0; i < totalPerHours.length; i++) {
        let td = document.createElement("td");
        td.textContent = totalPerHours[i];
        row.appendChild(td);
    }

    let mainTotal = document.createElement("td");
    mainTotal.textContent = totalSales;
    row.appendChild(mainTotal);
}

function start() {
    console.log("Starting the process");

    let seattle = new Store("Seattle", 23, 65, 6.3);
    let tokyo = new Store("Tokyo", 11, 42, 2.4);
    let dubai = new Store("Dubai", 10, 38, 3.7);
    let paris = new Store("Paris", 17, 48, 4.5);
    let lima = new Store("Lima", 8, 30, 5.2);

    createTableHeader();
    createTableBody();
    createTableFooter();
}

start();
