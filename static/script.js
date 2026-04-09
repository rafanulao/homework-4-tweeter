const max_char = 160;
function updateTweetButton(tweetButton, remainingChars) {
  if (remainingChars === 0) {
    tweetButton.disabled = true;
  } else {
    tweetButton.disabled = false;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.querySelector(".text-field textarea");
  const charCount = document.querySelector(".char-count");
  const tweetButton = document.querySelector(".tweet-button");
  function updateCharCount() {
    const remainingChars = max_char - textArea.value.length;
    charCount.textContent = `${remainingChars}`;
    updateTweetButton(tweetButton, remainingChars);
  }
  textArea.addEventListener("input", updateCharCount);
  updateCharCount();
});
