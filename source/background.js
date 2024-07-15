// Uzantı kurulduğunda veya etkinleştirildiğinde
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ xRayDisabled: true }, () => {
        injectContentScriptToAllTabs();
    });
});

// Tarayıcı başlatıldığında
chrome.runtime.onStartup.addListener(() => {
    injectContentScriptToAllTabs();
});

// Yeni bir pencere açıldığında
chrome.windows.onCreated.addListener(() => {
    injectContentScriptToAllTabs();
});

// Sayfa güncellendiğinde
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('primevideo.com') && !tab.url.startsWith('chrome://')) {
        chrome.storage.sync.get('xRayDisabled', (data) => {
            if (data.xRayDisabled) {
                injectContentScript(tabId);
            }
        });
    }
});

// Mesaj alındığında
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleXRay') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0] && !tabs[0].url.startsWith('chrome://')) {
                injectContentScript(tabs[0].id);
            }
        });
    }
});

// Tüm açık PrimeVideo sekmelerine content scripti enjekte et
function injectContentScriptToAllTabs() {
    chrome.tabs.query({ url: "*://*.primevideo.com/*" }, (tabs) => {
        for (const tab of tabs) {
            if (!tab.url.startsWith('chrome://')) {
                injectContentScript(tab.id);
            }
        }
    });
}

// Belirli bir sekmeye content scripti enjekte et
function injectContentScript(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
    });
}
