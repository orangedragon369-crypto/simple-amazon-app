async function apiMulti (from, to) {
    try {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${from}&limit=${to}`);
        if (!api.ok) {
            throw new Error(`Response status; ${api.status}`)
        }

        const data = await api.json();
        return data.results;
    } catch (error) {
        console.error(error.message);
    }
}

function addHtml (addHtml) {
    console.log(addHtml);
    return  document.getElementById("products").innerHTML += `<div>&${addHtml}</div>`;
} 

function addApiInfo (strt, nd) {
    for (let i = strt; i < nd-1; i++) {
        if (i != 0) {v
            console.log(apiMulti(i, i));
            addHtml(apiMulti(i, i));
        } else {
            console.log(apiMulti(i, 1));
            addHtml(apiMulti(i,1));
        }
    }
}

export {apiMulti, addHtml, addApiInfo};