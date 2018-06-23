function sendVideo(src) {
    const request = JSON.stringify({
        jsonrpc: "2.0",
        method: "Player.Open",
        params: {
            item: {
                file: src
            }
        },
        id: 1
    });

    fetch(`http://192.168.1.32:8081/jsonrpc?request=${request}`);
}

browser.browserAction.onClicked.addListener(function (info, tab) {
    browser.tabs.executeScript({
        file: "get-video.js"
    });
});

browser.runtime.onMessage.addListener(function (message) {
    if (message.src) {
        sendVideo(message.src);
    }
});
