

chrome.runtime.onInstalled.addListener(function () {
  chrome.browserAction.setIcon({path: "refresh.svg"});
});


var id = "jmobogbdiffehohldkdeobajdenpcijb";  // the id of the addon

function reloadExtension() {
  chrome.management.setEnabled(id, false, function () {
      chrome.management.setEnabled(id, true);
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  reloadExtension();
  chrome.tabs.sendMessage(
    tab.id,
    { event: "reloadPage" }
  );
});
