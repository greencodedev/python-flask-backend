document.getElementById("button").addEventListener("click", handleSaveText);

async function handleSaveText() {
  const element = document.getElementById("error");
  const button = document.getElementById("button");
  var text = document.getElementById("input").value;
  if (!text) {
    document.getElementById("error-validation").innerText =
      "Please enter the text.";
  } else {
    document.getElementById("error-validation").innerText = "";
    button.innerText = "Saving...";
    button.disabled = true;
    fetch("add", {
      method: "POST",
      body: JSON.stringify({ text: text }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(async (response) => {
        let alertText = "";
        let flagError = false;
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            alertText = "Your text was saved successfully";
          } else {
            alertText = "Saving the text was failed. Please try again later.";
            flagError = true;
          }
        } else {
          alertText = "Saving the text was failed. Please try again later.";
          flagError = true;
        }
        element.innerText = alertText;
        element.style.color = flagError ? "#CC1016" : "#5EBA7D";
      })
      .catch((error) => {
        element.innerText =
          "Saving the text was failed. Please try again later.";
        element.style.color = "#CC1016";
      })
      .finally(() => {
        button.innerText = "Submit";
        button.disabled = false;
      });
  }
}
