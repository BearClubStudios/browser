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

      let searchEngineURL = "https://www.google.com/search?q=";
      const selectedEngine = document.getElementById('searchEngine').value;


      // === Search Engines ===
      if (selectedEngine === 'duckduckgo') {
          searchEngineURL = "https://duckduckgo.com/?q=";
      }  
      if (selectedEngine === 'bing') {
          searchEngineURL = "https://www.bing.com/search?q=";
      } 
      if (selectedEngine === 'yahoo') {
          searchEngineURL = "https://search.yahoo.com/search?p=";
      }
      if (selectedEngine === 'brave') {
          searchEngineURL = "https://search.brave.com/search?q=";
      } 
      if (selectedEngine === 'yandex') {
          searchEngineURL = "https://yandex.com/search/?text=";
      }  
      if (selectedEngine === 'ask') {
          searchEngineURL = "https://www.ask.com/web?q=";
      }  
      if (selectedEngine === 'qwant') {
          searchEngineURL = "https://www.qwant.com/?q=";
      } 
      if (selectedEngine === 'naver') {
          searchEngineURL = "https://search.naver.com/search.naver?query=";
      }
      if (selectedEngine === 'dog') {
          searchEngineURL = "https://search.aol.co.uk/aol/search?q=";
      }
      if (selectedEngine === 'aol') {
          searchEngineURL = "https://search.aol.co.uk/aol/search?q=";
      }    

      
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