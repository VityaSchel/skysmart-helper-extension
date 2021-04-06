const $ = s => document.querySelector(s)

const setDOMInfo = info => {
  if(info !== undefined){
    $('#center-warning').style.display = 'none'
    $('#skysmart-content').style.display = 'block'
    $('#title').innerText = info.title
    window.taskHTML = info.taskHTML
    $('#all-html').innerHTML = window.taskHTML
    mapString(info.draggable, '#draggable')
    mapString(info.lists, '#lists')
    mapString(info.paragraphs, '#paragraphs')
  }
};

window.addEventListener('DOMContentLoaded', () => {
  $('#open-html').addEventListener('click', openHTML)
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

function openHTML(){
  // opens a popup which contains specific task's html code (sent by content.js script back to popup)
  let win = window.open('', 'HTML', 'resizable=yes,scrollbars=yes,width=640,height=480')
  win.document.body.innerHTML = window.taskHTML
}