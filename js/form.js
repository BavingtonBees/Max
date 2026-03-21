document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-formspark]");
  const messageBox = document.querySelector("#form-message");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    messageBox.textContent = "Sending…";

    const endpoint = form.getAttribute("action");
    const formData = new FormData(form);

    // Include Turnstile token
    const token = turnstile.getResponse();
    formData.append("cf-turnstile-response", token);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      const result = await response.json();

      if (result.success) {
        messageBox.textContent = "Thank you — your message has been sent.";
        form.reset();
        turnstile.reset();
      } else {
        messageBox.textContent = "Verification failed. Please try again.";
        turnstile.reset();
      }

    } catch (error) {
      messageBox.textContent = "Network error — please try again.";
    }
  });
});
