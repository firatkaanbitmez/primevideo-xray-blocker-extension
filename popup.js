document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleXRay');

    // Load the saved setting and update the toggle state
    chrome.storage.sync.get('xRayDisabled', (data) => {
        toggle.checked = data.xRayDisabled !== false; // Default to ON (true)
    });

    // Save the setting when the toggle state changes
    toggle.addEventListener('change', () => {
        const xRayDisabled = toggle.checked;
        chrome.storage.sync.set({ xRayDisabled: xRayDisabled }, () => {
            chrome.runtime.sendMessage({ action: 'toggleXRay' });
        });
    });
});
