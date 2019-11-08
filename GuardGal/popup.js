chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {	
		if(response == undefined || !response.showButtons){
			$("#allChange").hide();
			$("#copyBtn").hide();
		}
		
		if(response == undefined){
			$("#popupMessage").html("GuardGal is compatible with Gmail, Outlook, Slack, LinkedIn, Yahoo, and GroupMe.<br>Enter the text.");
			return;
		}
		$("#popupMessage").html(prepareForDisplay(response.messageText));
		var replacements = keywordMatching();
		registerKeywordListeners(replacements);
		
		new Clipboard('#copyBtn', {
			text: function(trigger){
				return prepareForCopy($("#popupMessage").html().toString());
			}
		});
    });
});