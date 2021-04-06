let color = '#3aa757';

chrome.runtime.onMessage.addListener((msg, sender) => {
  if ((msg.from === 'content') && (msg.subject === 'newData')) {
    chrome.pageAction.show(sender.tab.id);
  }
});
