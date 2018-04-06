function removeReposts() {
	chrome.storage.sync.get(['repost_remove'], function(result) {
		if (result.repost_remove === true) {
			var soundlist__items = document.getElementsByClassName('soundList__item');
			for (var i=0; i<soundlist__items.length; i++) {
				var e = soundlist__items[i];
				if (e.getElementsByClassName('soundContext__repost').length >= 1) {
					// e.style.display = 'none';

					// If we remove the listitem, we need to decrement our counter
					e.remove();
					i--;
				}
			}
		}
	})
}

chrome.storage.sync.get(['repost_remove'], function(result) {
	if (result.repost_remove === undefined) {
		chrome.storage.sync.set({'repost_remove': true},
			function() {
				console.log('remove_reposts is true.');
			}
		)
	}
	else {
		console.log('remove_reposts is ' + result.repost_remove.toString());
	}
})

var delay = 1000;
if (interval === undefined) {
	var interval = setInterval(removeReposts, delay);
}
else {
	console.log('Reposts are already being removed.  Not running function again.');
}
