function getTotalRounds(pairingTitle) {
    var cell = document.evaluate('//div[contains(@class, "defaultDialog")]//td[text() = "' + pairingTitle + '"]', document, null, XPathResult.ANY_TYPE, null).iterateNext();

    if (!cell) {
        return;
    }

    var rowText = cell.parentNode.querySelectorAll('td')[1].innerText;
    return rowText.substring(
        rowText.indexOf("/") + 1, 
        rowText.lastIndexOf(" ,"));
}

function constructActionButton(totalRounds)
{console.log(totalRounds);
    var action = new URL(window.location.href);
    var rdNo = action.searchParams.get('rd');
    if (+rdNo >= +totalRounds) {
        return;
    }
    action.searchParams.set('rd', +rdNo + 1);

    document.querySelector('h3').innerHTML += ' (<a href="' + action + '">show next round</a>)';
}

function removeHeader()
{
    var divs = document.querySelectorAll('form div');

    for (i = 0; i < divs.length; i++) {
        if (!divs[i].closest("table.CRs1") && !divs[i].querySelector("table.CRs1")) {
            divs[i].remove();
        }
    }

    var pairingsHeader = document.querySelector('h2');
    
    if (pairingsHeader) {
        pairingsHeader.remove();
    }
}

var totalRounds = getTotalRounds('Board Pairings');
removeHeader();
if (totalRounds) {
    constructActionButton(totalRounds);
}
