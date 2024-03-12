// AFTER WE ARE FINISHED USE https://obfuscator.io/
document.addEventListener('DOMContentLoaded', function() {
  const addressBar = document.querySelector('.addressbar-urlbar-225461');
  const tabContent = document.querySelector('.browser-tab-content-164148');
  const rhNewTab = document.querySelector('.rhpages-357971.rhnewtab-340432');
  const svgElement = document.querySelector('.chrome-tabs-newtab-btn-682118');
  const containerDiv = document.querySelector('.chrome-tabs-content-769439');
  const tabs = document.querySelector('#tabs');
  const welcome = document.querySelector('.welcome');
  const backButton = document.querySelector('#back-btn');
  const forwardButton = document.querySelector('#forward-btn');
  const refreshButton = document.querySelector('#refresh-btn');
  const infoButton = document.querySelector('#info-btn');
  const fbLogo = document.getElementById('fb-logo');
  const shortcuts = document.querySelectorAll('.shortcut');
  let leftCounter = 249;
  let one = 1;
  let tab_title = "New Tab";
  let activeTab = null;
  let tabNumber = null;
  let shortcut_url = "";


//code For Shortcuts   
  // Add event listener to each shortcut
  shortcuts.forEach(shortcut => {
      shortcut.addEventListener('click', function() {
          // Get the text content of the clicked shortcut
          var shortcutText = this.querySelector('a').textContent.toLowerCase()
          var shortcutshorter=shortcutText.replace(/\s/g, '');
          console.log(`Clicked on: ${shortcutshorter}`);

          if (shortcutshorter=="youtube"){
            shortcut_url="https://youtube.com";
          } else if (shortcutshorter=="cornhub") {
            shortcut_url="https://www.foodrepublic.com/img/gallery/corn-is-a-fruit-but-its-also-a-grain-and-a-vegetable/intro-1688390573.webp";
          } else if (shortcutshorter=="wikipedia") {
            shortcut_url="https://wikipedia.com";
          } else if (shortcutshorter=="discord") {
            shortcut_url="https://discord.com";
          } else if (shortcutshorter=="reddit") {
            shortcut_url="https://reddit.com";
          } else if (shortcutshorter=="twitch") {
            shortcut_url="https://twitch.tv";
          } else {
            console.error("Error with shortcuts")
          }

          const newTabElement = document.createElement('div');
          newTabElement.className = 'chrome-tab';
          newTabElement.style = "width: 258px; "
          newTabElement.id = `tab-num-${one}`; 
          newTabElement.innerHTML = `
                <div class="chrome-tab-dividers"></div>
                <div class="chrome-tab-background">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlink:href="#chrome-tab-geometry-left"></use></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"></rect></clipPath></defs><svg width="52%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="36" class="chrome-tab-geometry"></use></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="36" class="chrome-tab-geometry"></use></svg></g></svg>
                </div>
                <div class="chrome-tab-content">
                    <div class="chrome-tab-favicon"  hidden="" ></div>
                    <div class="chrome-tab-title" id="title-tab-num-${one}">${shortcutText}</div>
                    <div class="chrome-tab-drag-handle" style="touch-action: none;"></div>
                    <div class="chrome-tab-close" id="close-tab-num-${one}"></div>
                </div>
            `;

          containerDiv.appendChild(newTabElement);
          leftCounter += 239;
          svgElement.style.left = `${leftCounter}px`;
          tabs.textContent += `#tab-num-${one} { transform: translate3d(${one * 239}px, 0, 0); }\n\n`;
          one++;



          // Set the new tab as active
          if (activeTab) {
              activeTab.removeAttribute('active');
          }
          newTabElement.setAttribute('active', '');
          activeTab = newTabElement;
          tabNumber = containerDiv.childElementCount - 1; // Assuming the new tab is the last one
          const newIframe = document.createElement('iframe');
          newIframe.src = "https://p.stonklat.com/uv/service/" + create_url(shortcut_url);
          newIframe.id = `iframe-num-${tabNumber}`;
          newIframe.referpolicy = 'no-referrer';
          newIframe.sandbox = 'allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups  allow-presentation allow-same-origin allow-scripts';
          newIframe.style.display = 'block';
          newIframe.className = "browser-tab-content-iframe";
          tabContent.appendChild(newIframe);
          tabContent.style.display = 'block';
          rhNewTab.style.display = 'none';
          welcome.style = "Display:none;";
        const existingIframe = document.querySelector(`#iframe-num-${tabNumber}`);
        if (existingIframe) {
          existingIframe.style.display = 'block';
          rhNewTab.style.display = 'none';
          tabContent.style.display = 'block';
        } else {
          rhNewTab.style.display = 'block';
          tabContent.style.display = 'none';
        }
      });
  });




  //adding tab
  svgElement.addEventListener('click', function() {
    const containerWidth = containerDiv.getBoundingClientRect().width;
    let posX3 = event.clientX;
    tabNumber = Math.ceil(posX3 / 239) - 1;
    var n_small = Math.floor(containerWidth / tabNumber);
    console.log("Total available width for the tabs:", n_small-239, "pixels");
    console.log(containerWidth)
    if (n_small >= 269) {
           console.log("There's enough space for a new tab")
        } else {
            console.error("No space for a new tab");
      const numberOfTabs = document.querySelectorAll('.chrome-tab').length;
      console.log(`Number of tabs: ${numberOfTabs}`);
      // const tabsToAdjust = document.querySelectorAll('.chrome-tab');
      // const remainingWidth = n_small / tabsToAdjust.length;
      // tabsToAdjust.forEach(tab => {
      //     tab.style.width = `${remainingWidth}px`;
      // });

            return false; // There's not enough space for a new tab
        }


    const newTabElement = document.createElement('div');
    newTabElement.className = 'chrome-tab';
    newTabElement.style = "width: 258px; "
    newTabElement.id = `tab-num-${one}`
    newTabElement.innerHTML = `
              <div class="chrome-tab-dividers"></div>
              <div class="chrome-tab-background">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlink:href="#chrome-tab-geometry-left"></use></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"></rect></clipPath></defs><svg width="52%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="36" class="chrome-tab-geometry"></use></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="36" class="chrome-tab-geometry"></use></svg></g></svg>
              </div>
              <div class="chrome-tab-content">
                  <div class="chrome-tab-favicon"  hidden="" ></div>
                  <div class="chrome-tab-title" id="title-tab-num-${one}">${tab_title}</div>
                  <div class="chrome-tab-drag-handle" style="touch-action: none;"></div>
                  <div class="chrome-tab-close" id="close-num-${one}"></div>
              </div>
          `;

    containerDiv.appendChild(newTabElement);
    leftCounter += 239;
    svgElement.style.left = `${leftCounter}px`;
    tabs.textContent += `#tab-num-${one} { transform: translate3d(${one * 239}px, 0, 0); }\n\n`;
    one++;

  });


  containerDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('chrome-tab-close')) {
      const tabToRemove = event.target.closest('.chrome-tab');
      leftCounter -= 239;
      svgElement.style.left = `${leftCounter}px`;

      const tabToRemoveID = parseInt(tabToRemove.id.replace('tab-num-', ''));
      const iframeToRemove = document.querySelector(`#iframe-num-${tabToRemoveID}`);
      if (iframeToRemove) {
        iframeToRemove.remove();
      }
      tabToRemove.remove();

      const tabsToMove = document.querySelectorAll('.chrome-tab');
      tabsToMove.forEach(tab => {
        const tabID = parseInt(tab.id.replace('tab-num-', ''));
        if (tabID > tabToRemoveID) {
          const newLeft = (tabID - 1) * 239;
          tab.style.transform = `translate3d(${newLeft}px, 0, 0)`;
          tab.id = `tab-num-${tabID - 1}`;
          const closeBtn = tab.querySelector('.chrome-tab-close');
          closeBtn.id = `close-num-${tabID - 1}`;
          const title = tab.querySelector('.chrome-tab-title');
          title.id = `title-tab-num-${tabID - 1}`;
          const iframe = document.querySelector(`#iframe-num-${tabID}`);
          if (iframe) {
            iframe.id = `iframe-num-${tabID - 1}`;
          }
        }
      });
      tabs.textContent = tabs.textContent.replace(`#tab-num-${one} { transform: translate3d(${one * 239}px, 0, 0); }\n\n`, "");
      one--;

      if (activeTab === tabToRemove) {
        activeTab = null;
        tabNumber = null;
      }

    } else {
      if (activeTab) {
        activeTab.removeAttribute('active');
        if (tabNumber !== null) {
          const iframe = document.querySelector(`#iframe-num-${tabNumber}`);
          if (iframe) {
            iframe.style.display = 'none';
          }
        }
      }
      try {
        const clickedTab = event.target.closest('.chrome-tab');
        if (!clickedTab) {
          console.error('Clicked tab not found or no tab there');
          return;
        }
        clickedTab.setAttribute('active', '');
        activeTab = clickedTab;
        let posX = event.clientX;
        tabNumber = Math.ceil(posX / 239) - 1;
        console.log('Clicked tab number:', tabNumber);
        const existingIframe = document.querySelector(`#iframe-num-${tabNumber}`);
        if (existingIframe) {
          existingIframe.style.display = 'block';
          rhNewTab.style.display = 'none';
          tabContent.style.display = 'block';
        } else {
          rhNewTab.style.display = 'block';
          tabContent.style.display = 'none';
        }

      } catch (error) {
        console.error('An error occurred in selecting tab:', error);
      }
    }
  });



  refreshButton.addEventListener('click', function() {
    console.log("refreshed")
    if (activeTab) {
      const iframe = document.querySelector(`#iframe-num-${tabNumber}`);
      if (iframe) {
        iframe.src = iframe.src;

      }
    }
  });

  backButton.addEventListener('click', function() {
    if (activeTab) {
      console.log("back")
    }
  });

  forwardButton.addEventListener('click', function() {
    if (activeTab) {
      console.log("forward")
    }
  });


  infoButton.addEventListener('click', function() {
    const info = document.createElement('div');
    info.className = 'modal';
    info.innerHTML = `
              <div class="modal-content">
                  <span class="close">&times;</span>
                  <h2>helpful Information</h2>
                  <p>Would you like some help or iformation</p>
                  <p>too bad we havent added it yet</p>
              </div>
          `;
    document.body.appendChild(info);
    const infocloseButton = info.querySelector('.close');
    infocloseButton.addEventListener('click', function() {
      info.remove();
    });
  });



  addressBar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && (activeTab === null || event.target !== addressBar)) {
      alert("Click on a tab to start browsing.");
    } else if (event.key === 'Enter') {
      let url = addressBar.textContent;
      if (url === 'fb://dino') {
        fetch('dino/dino.txt')
          .then(response => response.text())
          .then(docsrc => {
            const newIframe = document.createElement('iframe');
            newIframe.srcdoc = docsrc;
            newIframe.id = `iframe-num-${tabNumber}`;
            newIframe.referpolicy = 'no-referrer';
            newIframe.sandbox = 'allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts';
            newIframe.style.display = 'block';
            newIframe.className = "browser-tab-content-iframe";
            tabContent.appendChild(newIframe);
            tabContent.style.display = 'block';
            rhNewTab.style.display = 'none';
            welcome.style = "Display:none;";
            addressBar.textContent = " ";
            if (activeTab) {
              const tabTitleElement = activeTab.querySelector('.chrome-tab-title');
              if (tabTitleElement) {
                tabTitleElement.textContent = "Dino";
              }
            }
          })
          .catch(error => console.error('Error fetching document source:', error));
      } else {
        const newIframe = document.createElement('iframe');
        newIframe.src = "https://p.stonklat.com/uv/service/" + create_url(url);
        newIframe.id = `iframe-num-${tabNumber}`;
        newIframe.referpolicy = 'no-referrer';
        newIframe.sandbox = 'allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts';
        newIframe.style.display = 'block';
        newIframe.className = "browser-tab-content-iframe";
        tabContent.appendChild(newIframe);
        tabContent.style.display = 'block';
        rhNewTab.style.display = 'none';
        welcome.style = "Display:none;";
        addressBar.textContent = " ";
        if (activeTab) {
          const tabTitleElement = activeTab.querySelector('.chrome-tab-title');
          if (tabTitleElement) {
            tabTitleElement.textContent = url;
          }
        }
      }
    }
  });



//changes colour of screen by switching css file 
  document.addEventListener("keydown", function(event) {
      if (event.key === "!") {
          const linkElement = document.querySelector('link[rel="stylesheet"]');
          if (!linkElement) return; // Guard clause to handle cases where the stylesheet link is not found
          const currentHref = linkElement.getAttribute("href");
          const newHref = currentHref === "css/browser-style.css" ? "css/browser-style-Darkmode.css" : "css/browser-style.css";
          linkElement.setAttribute("href", newHref);
          fbLogo.src = currentHref === "css/browser-style.css" ? '/img/white_logo.png' : '/img/black_logo.png';
      }
  });


  // New System to select a tab when opened which fixes most of previous issues
  const setTab = document.getElementById('tab-num-0');
  setTab.setAttribute('active', '');
  activeTab = setTab;
  tabNumber = 0
  console.log('Set tab number:', tabNumber);
  const existingIframe = document.querySelector(`#iframe-num-${tabNumber}`);
  if (existingIframe) {
    existingIframe.style.display = 'block';
    rhNewTab.style.display = 'none';
    tabContent.style.display = 'block';
  } else {
    rhNewTab.style.display = 'block';
    tabContent.style.display = 'none';
  }
}); 