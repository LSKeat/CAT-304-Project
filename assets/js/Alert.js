// Sample data for demonstration purposes
const alertsData = [
    { type: 'SMS', message: 'Water quality parameters exceeded threshold.' },
    { type: 'Email', message: 'Attention: Water quality alert!' },
    // Add more alert objects as needed
];

const historicalData = [
    { Parameters: 'P1', ph: 6.95, temperature: 24.67, turbidity: 1.28, status: 'bad' },
    { Parameters: 'P2', ph: 7.23, temperature: 84.77, turbidity: 5.33, status: 'bad' },
    { Parameters: 'P3', ph: 3.93, temperature: 24.67, turbidity: 5.35, status: 'bad' },
    { Parameters: 'P4', ph: 7.10, temperature: 24.67, turbidity: 5.38, status: 'perfect' },
    { Parameters: 'P5', ph: 7.23, temperature: 13.73, turbidity: 5.33, status: 'good' },
    { Parameters: 'P6', ph: 13.95, temperature: 24.57, turbidity: 5.87, status: 'bad' },
];

// Thresholds
const  phPerfectLow = 6.8; // Lower bound for perfect pH
const  phPerfectHigh = 7.3; // Upper bound for perfect pH
const turbidityThreshold = 5.0; // Threshold for high turbidity (adjust based on your sensor & water type)
const temperatureLow = 10.0;
const  temperatureHigh = 71.0;

// Function to check water quality parameters
function checkWaterQuality(data) {
    // Set your thresholds for each parameter
    const phThreshold = 7.0; // pH range: 0-14, with 7 being neutral
    const temperatureThreshold = 13; // Water temperature range: 0-100 degrees Celsius

    if (data.ph < phPerfectLow || data.ph > phPerfectHigh || data.temperature < temperatureLow || data.temperature > temperatureHigh  || data.turbidity < turbidityThreshold) {
        // Water quality is bad, trigger an alert
        return `Alert: Water quality parameters exceeded threshold for ${data.Parameters}`;
    } else {
        // Water quality is good
        return `Good: Water quality is within acceptable limits for ${data.Parameters}`;
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
