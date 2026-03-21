document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-formspark]");
  const messageBox = document.querySelector("#form-message");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    messageBox.textContent = "Sending…";

    const endpoint = form.getAttribute("action");
    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        messageBox.textContent = "Thank you — your message has been sent.";
        form.reset();
      } else {
        messageBox.textContent = "Something went wrong. Please try again later.";
      }
    } catch (error) {
      messageBox.textContent = "Network error — please try again.";
    }
  });
});

