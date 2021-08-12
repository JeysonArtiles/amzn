// ==UserScript==
// @name         [ OVERSEER ] ACTIVITY TRACKER
// @namespace    https://github.com/JeysonArtiles/amzn
// @version      0.3
// @description  TRACK ACTIVITY IN REAL TIME
// @author       JEYARTIL
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @downloadURL  https://raw.githubusercontent.com/JeysonArtiles/amzn/master/OVERSEER/pick_skip.user.js
// @grant        GM_xmlhttpRequest
// @connect      chime.aws
// ==/UserScript==

// WILL THIS BE UPDATED TO 0.3?

const name = prompt("Enter your name:");

const trackActivity = async (action) => {

}

GM_xmlhttpRequest({
    method: "POST",
    url: "https://hooks.chime.aws/incomingwebhooks/0bdacf4c-58d1-4838-a9da-e743bc37a632?token=RDJpUDNkTk98MXxPMHh1b08wQnhxbmlKMThlS0RyMlFNVHBjZzg3ZmpxUF94OFl2RERSQ1Jr",
    data: `{"Content":"Hello ${name}. Nice to see you."}`,
    headers: {
        "Content-Type": "application/json"
    },
    onload: function(response) {
        console.log(response.responseText);
    }
});