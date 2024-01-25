

// Function to handle pH icon click
function handlePhIconClick() {
    // Replace this with actual pH data (sample data used here)
    const phData = [7.2, 7.5, 7.0, 7.8, 7.3];

    // Create a pH chart and open it in a new tab
    createAndOpenChart('pH Chart', 'pH Level', 'pH Data', phData);
}

// Function to handle Temperature icon click
function handleTemperatureIconClick() {
    // Replace this with actual temperature data (sample data used here)
    const temperatureData = [25, 26, 24, 28, 27];

    // Create a Temperature chart and open it in a new tab
    createAndOpenChart('Temperature Chart', 'Temperature (°C)', 'Temperature Data', temperatureData);
}

// Function to handle Turbidity icon click
function handleTurbidityIconClick() {
    // Replace this with actual turbidity data (sample data used here)
    const turbidityData = [10, 12, 8, 15, 11];

    // Create a Turbidity chart and open it in a new tab
    createAndOpenChart('Turbidity Chart', 'Turbidity Level', 'Turbidity Data', turbidityData);
}

// Function to create a chart using Chart.js and open it in a new tab
function createAndOpenChart(chartTitle, xAxisLabel, yAxisLabel, data) {
    // Create a new HTML document
    const newDocument = document.implementation.createHTMLDocument(chartTitle);

    // Create a canvas element in the new document
    const canvas = newDocument.createElement('canvas');
    canvas.id = 'myChart';
    newDocument.body.appendChild(canvas);

    // Create a chart in the new document
    createChart(newDocument, 'myChart', chartTitle, xAxisLabel, yAxisLabel, data);

    // Convert the new document to a data URL
    const dataURL = new XMLSerializer().serializeToString(newDocument);
    const dataBlob = new Blob([dataURL], { type: 'text/html' });
    const dataURLObject = URL.createObjectURL(dataBlob);

    // Open the new document in a new tab
    window.open(dataURLObject, '_blank');
}

// Function to create a chart using Chart.js
function createChart(document, canvasId, chartTitle, xAxisLabel, yAxisLabel, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: data.length }, (_, i) => `Data Point ${i + 1}`),
            datasets: [{
                label: yAxisLabel,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: xAxisLabel
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: yAxisLabel
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: chartTitle
                }
            }
        }
    });
}

// Add event listeners to the icons
document.querySelector('.fa-flask').addEventListener('click', handlePhIconClick);
document.querySelector('.fa-thermometer-half').addEventListener('click', handleTemperatureIconClick);
document.querySelector('.fa-water').addEventListener('click', handleTurbidityIconClick);
