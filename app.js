// Data for each location including phone number, hours, and address
const locationsData = {
    seattle: {
        name: "Seattle",
        minCustomers: 23,
        maxCustomers: 65,
        avgCookiesPerSale: 6.3,
        hourlySales: [],
        phoneNumber: "123-456-7890",
        hours: "Mon-Sun: 9:00 AM - 8:00 PM",
        address: "123 Main St, Seattle, WA"
    },
    tokyo: {
        name: "Tokyo",
        minCustomers: 3,
        maxCustomers: 24,
        avgCookiesPerSale: 1.2,
        hourlySales: [],
        phoneNumber: "987-654-3210",
        hours: "Mon-Fri: 10:00 AM - 7:00 PM",
        address: "456 Tokyo St, Tokyo"
    },
    dubai: {
        name: "Dubai",
        minCustomers: 11,
        maxCustomers: 38,
        avgCookiesPerSale: 3.7,
        hourlySales: [],
        phoneNumber: "456-789-0123",
        hours: "Sat-Thu: 8:00 AM - 10:00 PM",
        address: "789 Dubai Ave, Dubai"
    },
    paris: {
        name: "Paris",
        minCustomers: 20,
        maxCustomers: 38,
        avgCookiesPerSale: 2.3,
        hourlySales: [],
        phoneNumber: "789-012-3456",
        hours: "Tue-Sat: 11:00 AM - 9:00 PM",
        address: "567 Paris Blvd, Paris"
    },
    lima: {
        name: "Lima",
        minCustomers: 2,
        maxCustomers: 16,
        avgCookiesPerSale: 4.6,
        hourlySales: [],
        phoneNumber: "321-654-9870",
        hours: "Sun-Wed: 12:00 PM - 6:00 PM",
        address: "234 Lima St, Lima"
    }
};

// Function to generate a random number between min and max (inclusive)
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to simulate hourly sales for each location from 6:00 AM to 8:00 PM
for (let city in locationsData) {
    const location = locationsData[city];
    for (let hour = 6; hour <= 20; hour++) {
        const simulatedCustomers = getRandomNumberBetween(location.minCustomers, location.maxCustomers);
        const cookiesSold = Math.round(simulatedCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(cookiesSold);
    }
}

// Create a table element to display the simulated sales data along with phone number, hours, and address
const table = document.createElement("table");
table.style.borderCollapse = "collapse";

// Create header row for locations, phone number, hours, and address
const headerRow = table.insertRow();
headerRow.style.backgroundColor = "darkgrey";
headerRow.style.color = "white";
headerRow.insertCell().textContent = "Locations";
headerRow.insertCell().textContent = "Phone Number";
headerRow.insertCell().textContent = "Hours";
headerRow.insertCell().textContent = "Address";
for (let hour = 6; hour <= 20; hour++) {
    const hourCell = headerRow.insertCell();
    hourCell.textContent = `${formatHour(hour)} ${getAMPM(hour)}`;
    hourCell.style.backgroundColor = "darkgrey";
    hourCell.style.color = "white";
}

// Create rows for each location with phone number, hours, and address
for (let city in locationsData) {
    const row = table.insertRow();
    const location = locationsData[city];
    const locationCell = row.insertCell();
    locationCell.textContent = location.name;
    locationCell.style.backgroundColor = "white";
    locationCell.style.color = "black";
    row.insertCell().textContent = location.phoneNumber;
    row.insertCell().textContent = location.hours;
    row.insertCell().textContent = location.address;
    for (let hour = 6; hour <= 20; hour++) {
        const cell = row.insertCell();
        cell.textContent = location.hourlySales[hour - 6];
        cell.style.backgroundColor = "white";
        cell.style.color = "black";
    }
}

// Append the table to the document body
document.body.appendChild(table);

// Function to convert 24-hour format to 12-hour format with AM/PM
function formatHour(hour) {
    return hour % 12 === 0 ? 12 : hour % 12;
}

// Function to determine AM or PM based on the hour
function getAMPM(hour) {
    return hour < 12 ? "AM" : "PM";
}
