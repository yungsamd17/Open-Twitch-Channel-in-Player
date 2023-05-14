document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("playerButton").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    if (username === '') {
      return; // exit the function if the username is empty
    }
    let url = "https://player.twitch.tv/?channel=" + username + "&parent=twitch.tv";
    openUrl(url);
  });

  document.getElementById("chatButton").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    if (username === '') {
      return; // exit the function if the username is empty
    }
    let url = "https://www.twitch.tv/popout/" + username + "/chat";
    openUrl(url);
  });

  document.getElementById("channelButton").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    if (username === '') {
      return; // exit the function if the username is empty
    }
    let url = "https://twitch.tv/" + username;
    openUrl(url);
  });

  function openUrl(url) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const newTab = document.getElementById("openNewTabCheckbox").checked;
      if (newTab) {
        chrome.tabs.create({ url: url });
      } else {
        chrome.tabs.update(tabs[0].id, { url: url });
      }
      window.close();
    });
  }

  document.getElementById("username").focus();
});
