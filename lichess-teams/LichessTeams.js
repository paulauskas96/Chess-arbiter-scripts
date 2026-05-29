(async () => {
    const url = new URL(window.location.href);

    const LANG_COLS = {
        '1':  { playerName: 'Name',    fideId: 'FideID',  team: 'Team'    },
        '30': { playerName: 'Pavardė', fideId: 'FIDE ID', team: 'Komanda' },
    };

    const lan  = url.searchParams.get('lan') || '1';
    const cols = LANG_COLS[lan] || LANG_COLS['1'];

    const listUrl = new URL(window.location.href);
    listUrl.searchParams.set('art', '15');
    listUrl.searchParams.delete('rd');

    let doc;
    try {
        doc = new DOMParser().parseFromString(
            await (await fetch(listUrl.toString())).text(), 'text/html'
        );
    } catch (e) {
        alert('Failed to fetch player list: ' + e.message);
        return;
    }

    const tbl = doc.querySelector('table.CRs1');
    if (!tbl) { alert('Player list table not found.'); return; }

    const getText = el => el?.textContent.replace(/\u00a0/g, ' ').trim() ?? '';

    const hdr     = Array.from(tbl.querySelector('tr').querySelectorAll('th,td')).map(getText);
    const nameCol = hdr.indexOf(cols.playerName);
    const fideCol = hdr.indexOf(cols.fideId);
    const teamCol = hdr.indexOf(cols.team);

    if (nameCol < 0 || fideCol < 0 || teamCol < 0) {
        alert('Could not find required columns.\nFound: ' + hdr.join(', '));
        return;
    }

    const lines = [];
    Array.from(tbl.querySelectorAll('tr')).slice(1).forEach(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        const name  = getText(cells[nameCol]);
        const fide  = getText(cells[fideCol]);
        const team  = getText(cells[teamCol]);
        if (!name || !team) return;
        const id = fide && fide !== '0' ? fide : name;
        lines.push(`${team}; ${id}`);
    });

    if (!lines.length) { alert('No players found.'); return; }

    await navigator.clipboard.writeText(lines.join('\n'));
    alert(`Copied ${lines.length} players to clipboard.`);
})();
