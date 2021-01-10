
const getPriceText = () => {
  const tag = document.querySelector('div.ds-summary-row h4 span') as HTMLSpanElement;
  return tag?.innerText ?? "No data";
}

const getRentText = () => {
  const tag = document.querySelector('div#ds-rental-home-values div.ds-expandable-card-section-default-padding div div span') as HTMLSpanElement;
  return tag?.innerText ?? "No data";
}

chrome.runtime.onMessage.addListener((msg, sender, callback) => {
  callback(`Price: ${getPriceText()}\nRent: ${getRentText()}`);
});
