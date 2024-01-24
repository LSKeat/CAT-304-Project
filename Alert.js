// Sample data for demonstration purposes
const alertsData = [
    { type: 'SMS', message: 'Water quality parameters exceeded threshold.' },
    { type: 'Email', message: 'Attention: Water quality alert!' },
    // Add more alert objects as needed
];

const historicalData = [
    { date: '2024-01-01', ph: 7, temperature: 32, turbidity: 5.0 },
    { date: '2024-01-02', ph: 8.2, temperature: 25, turbidity: 3.5 },
    // Add more historical data objects as needed
];

// Function to check water quality parameters
function checkWaterQuality(data) {
    // Set your thresholds for each parameter
    const phThreshold = 7.0; // pH range: 0-14, with 7 being neutral
    const temperatureThreshold = 30.0; // Water temperature range: 0-100 degrees Celsius

    if (data.ph < 7 || data.temperature > temperatureThreshold || data.turbidity > 4.0) {
        // Water quality is bad, trigger an alert
        return `Alert: Water quality parameters exceeded threshold for ${data.date}`;
    } else {
        // Water quality is good
        return `Good: Water quality is within acceptable limits for ${data.date}`;
    }
}

// Function to display alerts and historical data
function displayData() {
    const alertsContainer = document.getElementById('alerts-container');
    const table = document.getElementById('historical-data-table');

    // Display alerts
    historicalData.forEach(data => {
        const alertMessage = checkWaterQuality(data);
        alert(alertMessage);

        // Display alert messages in the container
        const alertElement = document.createElement('div');
        alertElement.className = 'alert';
        alertElement.textContent = alertMessage;
        alertsContainer.appendChild(alertElement);
    });

    // Display historical data
    const headers = Object.keys(historicalData[0]);
    const headerRow = table.insertRow(0);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    historicalData.forEach(data => {
        const row = table.insertRow(-1);
        headers.forEach(header => {
            const cell = row.insertCell(-1);
            cell.textContent = data[header];
        });
    });
}

// Call function to display alerts and historical data
displayData();
