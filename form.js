document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const tableBody = document.getElementById('salesTableBody');

    addButton.addEventListener('click', function() {
        // Create a new row
        const newRow = tableBody.insertRow(tableBody.rows.length - 1); // Insert before the last row (footer)

        // Insert cells for each column
        const locationCell = newRow.insertCell();
        const minCustomersCell = newRow.insertCell();
        const maxCustomersCell = newRow.insertCell();
        const avgCookiesCell = newRow.insertCell();

        // Set default values for the cells (you can modify this as needed)
        locationCell.textContent = 'New Location';
        minCustomersCell.textContent = '0';
        maxCustomersCell.textContent = '0';
        avgCookiesCell.textContent = '0';
    });
});


document.getElementById("addStore").addEventListener("click", function() {
    // Get form data
    let location = document.getElementById("location").value;
    let minCustomers = parseFloat(document.getElementById("minCustomers").value);
    let maxCustomers = parseFloat(document.getElementById("maxCustomers").value);
    let avgCookies = parseFloat(document.getElementById("avgCookies").value);

    // Calculate total sales for the new store
    let hourlySales = [];
    let totalStoreSales = 0;
    for (let i = 0; i < hours.length; i++) {
        let pretendSales = Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
        let storeHourlySales = Math.floor(pretendSales * avgCookies);
        hourlySales.push(storeHourlySales);
        totalStoreSales += storeHourlySales;
        totalPerHours[i] += storeHourlySales;
        totalSales += storeHourlySales;
    }

    // Create new table row
    let newRow = document.createElement("tr");

    // Add data cells to the new row
    let locationCell = document.createElement("td");
    locationCell.textContent = location;
    newRow.appendChild(locationCell);

    for (let i = 0; i < hours.length; i++) {
        let salesCell = document.createElement("td");
        salesCell.textContent = hourlySales[i];
        newRow.appendChild(salesCell);
    }

    let totalCell = document.createElement("td");
    totalCell.textContent = totalStoreSales;
    newRow.appendChild(totalCell);

    // Append the new row to the table body
    document.getElementById("salesTableBody").appendChild(newRow);

    // Update table footer
    updateTableFooter();
});

function updateTableFooter() {
    let footerRow = document.getElementById("salesTableFooter").querySelector("tr");
    let totalSalesCells = footerRow.querySelectorAll("td");

    for (let i = 0; i < totalPerHours.length; i++) {
        totalSalesCells[i + 1].textContent = totalPerHours[i]; // Start from index 1 to align with data cells
    }
    totalSalesCells[totalSalesCells.length - 1].textContent = totalSales;
}
