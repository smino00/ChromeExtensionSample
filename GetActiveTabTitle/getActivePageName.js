document.addEventListener("DOMContentLoaded", async () => {
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  document.getElementById("lblPageTitle").innerText = tab.title;
});
