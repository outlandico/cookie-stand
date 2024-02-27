// Function to generate a random number between min and max (inclusive)
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to convert 24-hour format to 12-hour format with AM/PM
function formatHour(hour) {
    return hour % 12 === 0 ? 12 : hour % 12;
}

// Function to determine AM or PM based on the hour
function getAMPM(hour) {
    return hour < 12 ? "AM" : "PM";
}

// Object representing different locations for each city
let locations = {
    seattle: { 
        name: "Seattle", 
        minCustomers: 23, 
        maxCustomers: 65,
        avgCookiesPerSale: 6.3,
        hourlySales: []
    },
    tokyo: { 
        name: "Tokyo", 
        minCustomers: 3, 
        maxCustomers: 24,
        avgCookiesPerSale: 1.2,
        hourlySales: []
    },
    dubai: { 
        name: "Dubai", 
        minCustomers: 11, 
        maxCustomers: 38,
        avgCookiesPerSale: 3.7,
        hourlySales: []
    },
    paris: { 
        name: "Paris", 
        minCustomers: 20, 
        maxCustomers: 38,
        avgCookiesPerSale: 2.3,
        hourlySales: []
    },
    lima: { 
        name: "Lima", 
        minCustomers: 2, 
        maxCustomers: 16,
        avgCookiesPerSale: 4.6,
        hourlySales: []
    }
};

// Simulate hourly sales for each location from 6:00 AM to 8:00 PM
for (let city in locations) {
    const location = locations[city];
    for (let hour = 6; hour <= 20; hour++) {
        const simulatedCustomers = getRandomNumberBetween(location.minCustomers, location.maxCustomers);
        const cookiesSold = Math.round(simulatedCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(cookiesSold);
    }
}

// Display the simulated sales data as unordered lists in the browser
for (let city in locations) {
    const location = locations[city];
    const salesDataDiv = document.createElement("div");
    salesDataDiv.innerHTML = `<h2>${location.name}</h2>`;
    const salesList = document.createElement("ul");
    for (let hour = 6; hour <= 20; hour++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Hour ${formatHour(hour)} ${getAMPM(hour)}: ${location.hourlySales[hour - 6]} cookies sold`;
        salesList.appendChild(listItem);
    }
    salesDataDiv.appendChild(salesList);
    document.body.appendChild(salesDataDiv);
}

