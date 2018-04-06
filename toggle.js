chrome.storage.sync.get(['repost_remove'], function(result) {
	var next_value;
	if (result.repost_remove !== true) {
		next_value = true;
	}
	else {
		next_value = false;
	}
	chrome.storage.sync.set({'repost_remove': next_value});
});