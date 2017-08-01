$('.facebook-button').on('click', () => {
  chrome.tabs.create({
    url: 'https://www.facebook.com/thegarious'
  });
});

$('.twitter-button').on('click', () => {
  chrome.tabs.create({
    url: 'https://twitter.com/thegarious'
  });
});

$('.twitch-button').on('click', () => {
  chrome.tabs.create({
    url: 'https://www.twitch.tv/gamishoutv'
  });
});
