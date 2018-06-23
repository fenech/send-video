const video = document.querySelector("video");

if (video && video.firstChild) {
    const src = video.firstChild.getAttribute("src");
    browser.runtime.sendMessage({ src });
}
