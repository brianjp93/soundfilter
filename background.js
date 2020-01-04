// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	// console.log('Soundfilter running.');
	chrome.tabs.executeScript(tab.id, {
		file: 'toggle.js'
	});
});

function set_badge() {
	chrome.storage.sync.get(['repost_remove'], function(result) {
		if (result.repost_remove === true) {
			chrome.browserAction.setBadgeText({text: 'on'});
		}
		else {
			chrome.browserAction.setBadgeText({text: 'off'});
		}
	})
}

chrome.storage.onChanged.addListener(function() {
    set_badge()
})
