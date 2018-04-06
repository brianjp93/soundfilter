// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	console.log('removePosts.js running.');
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

delay = 1000;
if (set_badge_interval === undefined) {
	var set_badge_interval = setInterval(set_badge, delay)
}