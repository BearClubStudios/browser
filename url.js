function isWebsite(input) {
    if (input.startsWith("http://") || input.startsWith("https://")) {
        return true;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./tlds.txt", false);
    xhr.send(null);

    if (xhr.status === 200) {
        const tlds = xhr.responseText.split('\n').map(tld => tld.trim());

        for (let tld of tlds) {
            if (input.toLowerCase().endsWith('.' + tld.toLowerCase())) {
                return true;
            }
        }
    } else {
        console.error('Error accessing ./tlds.txt:', xhr.statusText);
    }
    return false;
}

// UNUSED - Left in the source code for if we ever need it
// Function from uv source code to encode the url into the ultraviolet XOR encryption standard
function encode(str) {
    if (!str) return str;
    return encodeURIComponent(
        str
            .toString()
            .split('')
            .map((char, ind) =>
                ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
            )
            .join('')
    );
}; 


function create_url(str) {
    let nURI = str.trim();
    console.info(nURI);

    const searchEngineURLs = {
        'duckduckgo': "https://duckduckgo.com/?q=",
        'bing': "https://www.bing.com/search?q=",
        'yahoo': "https://search.yahoo.com/search?p=",
        'brave': "https://search.brave.com/search?q=",
        'yandex': "https://yandex.com/search/?text=",
        'ask': "https://www.ask.com/web?q=",
        'qwant': "https://www.qwant.com/?q=",
        'naver': "https://search.naver.com/search.naver?query=",
        'dog': "https://www.dogpile.com/serp?q=",
        'aol': "https://search.aol.co.uk/aol/search?q="
    };

    const selectedEngine = document.getElementById('searchEngine').value;
    let searchEngineURL = searchEngineURLs[selectedEngine] || "https://www.google.com/search?q=";

    if (!isWebsite(nURI)) {
        console.info("USING SEARCH ENGINE: " + selectedEngine);
        nURI = searchEngineURL + nURI.replace(/\s+/g, '+');
    } else if (!nURI.startsWith("http://") && !nURI.startsWith("https://")) {
        console.info("USING RA URL: " + nURI);
        nURI = "http://" + nURI;
    }

    console.info("FINALISED URL: " + nURI);
    return nURI;
}
