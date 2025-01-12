function addRecommendation() {
  const inputField = document.getElementById("recommendation_input");
  const recommendationText = inputField.value.trim();

  if (recommendationText) {
    const recommendationsList = document.getElementById("recommendations_list");

    // Create new recommendation
    const newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";
    newRecommendation.textContent = recommendationText;

    // Append to the recommendations list
    recommendationsList.appendChild(newRecommendation);

    // Show popup
    showPopup(true);

    // Clear the input field
    inputField.value = "";
  }
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.visibility = show ? "visible" : "hidden";
}
