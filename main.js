document.addEventListener('DOMContentLoaded', () => {
// https://flyclipart.com/thumb2/pikachu-transparent-png-pictures-147624.png

// var imgURL = chrome.extension.getURL("/img/pokeball_3_128x128.png");
let pikachuContainer = document.createElement('img');
pikachuContainer.src = "https://flyclipart.com/thumb2/pikachu-transparent-png-pictures-147624.png"
pikachuContainer.setAttribute('id', 'pika');
// document.getElementById('pika').src = imgURL;
document.querySelector('body').appendChild(pikachuContainer)

});


/**
 * chrome.scripting.executeScript (
    {
        target: {tabId: tabId},
        files:['script.js'],
    },
    () => {...})
 */

    function getTitle() {
      return document.title;
    }
    const tabId = getTabId();
    chrome.scripting.executeScript(
        {
          target: {tabId: tabId},
          func: getTitle,
        },
        () => { ... }); 


    function changeBackgroundColorRed() {
        document.body.style.backgroundColor = red;
        }
        const tabId = getTabId();

        chrome.scripting.executeScript(
            {
            target: {tabId: tabId},
            func: changeBackgroundColorRed,
            },
            () => { ... });
       