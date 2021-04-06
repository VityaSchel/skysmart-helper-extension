chrome.runtime.sendMessage({
  from: 'content',
  subject: 'newData',
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'requestInfo')) {
    var domInfo = {
      title: document.querySelector('vim-content-section-title').innerText,
      draggable: Array.from(document.querySelectorAll('[uidnddraggabledraggingclass="-dragging"]')).map(dr => dr.innerText.replace('\n', ' ')),
      lists: Array.from(document.querySelectorAll('li')).map(li => li.innerText.replace('\n', ' ')),
      paragraphs: Array.from(document.querySelectorAll('p')).map(p => p.innerText.replace('\n', ' '))
    };
    response(domInfo);
  }
});