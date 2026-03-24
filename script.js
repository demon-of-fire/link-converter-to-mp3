// Theme Toggling Functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Contrast Adjustment
function adjustContrast(level) {
    const body = document.body;
    body.style.filter = `contrast(${level})`;
}

// Text Size Control
function changeTextSize(size) {
    const body = document.body;
    body.style.fontSize = size;
}

// Platform Selection
const platformSelect = document.getElementById('platform-select');
platformSelect.addEventListener('change', (event) => {
    const selectedPlatform = event.target.value;
    console.log(`Selected platform: ${selectedPlatform}`);
});

// Format Selection
const formatSelect = document.getElementById('format-select');
formatSelect.addEventListener('change', (event) => {
    const selectedFormat = event.target.value;
    console.log(`Selected format: ${selectedFormat}`);
});

// Download Simulation with Accessibility Announcements
function simulateDownload() {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'alert');
    announcement.textContent = 'Download will start shortly!';
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 3000);
}

// Event listener for download button
const downloadButton = document.getElementById('download-btn');
downloadButton.addEventListener('click', simulateDownload);