document.addEventListener('DOMContentLoaded', function() {
    var removeDuplicatesButton = document.getElementById('removeDuplicates');
    removeDuplicatesButton.addEventListener('click', function() {
      chrome.tabs.query({}, function(tabs) {
        var urls = [];
        var duplicateTabs = [];
  
        tabs.forEach(function(tab) {
          if (urls.includes(tab.url)) {
            duplicateTabs.push(tab.id);
          } else {
            urls.push(tab.url);
          }
        });
  
        chrome.tabs.remove(duplicateTabs);
      });
    });
  });
  