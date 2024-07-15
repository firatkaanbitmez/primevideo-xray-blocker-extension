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
            chrome.runtime.sendMessage({ action: 'toggleXRay' }, () => {
                // Content scriptin enjekte edilmesinden sonra video oynatıcıyı etkileyebilecek işlemleri minimumda tut
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    if (tabs[0] && !tabs[0].url.startsWith('chrome://')) {
                        chrome.scripting.executeScript({
                            target: { tabId: tabs[0].id },
                            files: ['content.js']
                        });
                    }
                });
            });
        });
    });
});
