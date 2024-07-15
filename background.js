chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ xRayDisabled: true }, () => {
        chrome.tabs.query({ url: "*://www.primevideo.com/*" }, (tabs) => {
            for (const tab of tabs) {
                if (!tab.url.startsWith('chrome://')) {
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        files: ['content.js']
                    });
                }
            }
        });
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('primevideo.com') && !tab.url.startsWith('chrome://')) {
        chrome.storage.sync.get('xRayDisabled', (data) => {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['content.js']
            });
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleXRay') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0] && !tabs[0].url.startsWith('chrome://')) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['content.js']
                });
            }
        });
    }
});
