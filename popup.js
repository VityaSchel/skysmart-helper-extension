const $ = s => document.querySelector(s)

const setDOMInfo = info => {
  if(info !== undefined){
    $('#center-warning').style.display = 'none'
    $('#skysmart-content').style.display = 'block'
    document.getElementById('#title').innerText = info.title;
    mapString(info.draggable, '#draggable')
    mapString(info.lists, '#lists')
    mapString(info.paragraphs, '#paragraphs')
}
};

window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'requestInfo'},
        setDOMInfo);
  });
});

function mapString(data, srcElement) {
  data.map(draggableString => {
    let p = document.createElement('p')
    p.innerText = draggableString
    $(srcElement).appendChild(p)
  })
}