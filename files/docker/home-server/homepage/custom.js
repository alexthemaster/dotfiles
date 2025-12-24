// Allow disabling descriptions on the fly

toggleDescriptions();

let buttonDisable;
createButton();

function createButton() {
  buttonDisable = document.createElement("p");
  buttonDisable.setAttribute("id", "disableButton");
  buttonDisable.classList = "flex items-center";

  updateButton();
  buttonDisable.addEventListener("click", disableEvent);

  document.querySelector("#widgets-wrap").append(buttonDisable);
}

function disableEvent() {
  localStorage.setItem(
    "description_disabled",
    getDisabled() == null ? true : getDisabled() == "true" ? "false" : "true"
  );
  updateButton();
  toggleDescriptions();
}

function updateButton() {
  buttonDisable.innerText = `Click me to ${
    getDisabled() == "true" ? "enable" : "disable"
  } descriptions`;
}

function toggleDescriptions() {
  document.querySelectorAll(".service-description").forEach((desc) => {
    if (getDisabled() == "true") {
      desc.classList.add("disabled");
    } else {
      desc.classList.remove("disabled");
    }
  });
}

function getDisabled() {
  return localStorage.getItem("description_disabled");
}
