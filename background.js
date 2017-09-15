const BASE_URL = "https://www.reddit.com/r/";
 
browser.omnibox.onInputEntered.addListener((text, disposition) =>
{
	url = BASE_URL + text;
	switch (disposition)
	{
		case "currentTab":
			browser.tabs.update({url});
			break;
		case "newForegroundTab":
			browser.tabs.create({url});
			break;
		case "newBackgroundTab":
			browser.tabs.create({url, active: false});
			break;
	}
 });
 