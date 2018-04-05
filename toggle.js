chrome.storage.sync.get(['repost_remove'], function(result) {
	if (result.repost_remove !== true) {
		chrome.storage.sync.set({'repost_remove': true});
		console.log('Repost removal was enabled.');
	}
	else {
		chrome.storage.sync.set({'repost_remove': false});
		console.log('Repost removal has been disabled.');
	}	
});