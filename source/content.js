function disableXRay() {
    const observer = new MutationObserver(() => {
        const xrayElements = document.querySelectorAll('.xrayQuickView, .widgetGroupView, .quickViewContainer, .f1hoalfx, .collapsibleXrayVodHeader, .xrayVodHeaderTitle, .xrayVodImdbLogo, .xrayQuickViewList, .xrayQuickViewListItem, .portraitImage, .quickViewImage, .imageView, .imageSurface, .textContainer, .primaryText, .supplementalText');
        xrayElements.forEach((xrayElement) => {
            if (xrayElement) {
                xrayElement.style.display = 'none';
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const xrayElements = document.querySelectorAll('.xrayQuickView, .widgetGroupView, .quickViewContainer, .f1hoalfx, .collapsibleXrayVodHeader, .xrayVodHeaderTitle, .xrayVodImdbLogo, .xrayQuickViewList, .xrayQuickViewListItem, .portraitImage, .quickViewImage, .imageView, .imageSurface, .textContainer, .primaryText, .supplementalText');
    xrayElements.forEach((xrayElement) => {
        if (xrayElement) {
            xrayElement.style.display = 'none';
        }
    });
}

function enableXRay() {
    const observer = new MutationObserver(() => {
        const xrayElements = document.querySelectorAll('.xrayQuickView, .widgetGroupView, .quickViewContainer, .f1hoalfx, .collapsibleXrayVodHeader, .xrayVodHeaderTitle, .xrayVodImdbLogo, .xrayQuickViewList, .xrayQuickViewListItem, .portraitImage, .quickViewImage, .imageView, .imageSurface, .textContainer, .primaryText, .supplementalText');
        xrayElements.forEach((xrayElement) => {
            if (xrayElement) {
                xrayElement.style.display = '';
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const xrayElements = document.querySelectorAll('.xrayQuickView, .widgetGroupView, .quickViewContainer, .f1hoalfx, .collapsibleXrayVodHeader, .xrayVodHeaderTitle, .xrayVodImdbLogo, .xrayQuickViewList, .xrayQuickViewListItem, .portraitImage, .quickViewImage, .imageView, .imageSurface, .textContainer, .primaryText, .supplementalText');
    xrayElements.forEach((xrayElement) => {
        if (xrayElement) {
            xrayElement.style.display = '';
        }
    });
}

chrome.storage.sync.get('xRayDisabled', (data) => {
    if (data.xRayDisabled) {
        disableXRay();
    } else {
        enableXRay();
    }
});
