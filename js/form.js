document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-formspark]");
  const messageBox = document.querySelector("#form-message");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    messageBox.textContent = "Sending…";

    const endpoint = form.getAttribute("action");
    const formData = new FormData(form);

    // Turnstile token
    const token = turnstile.getResponse();

    if (!token) {
      messageBox.textContent = "Please complete the verification.";
      return;
    }

    formData.append("cf-turnstile-response", token);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      const result = await response.json();
      console.log("Formspark result:", result);

      if (result.success) {
        messageBox.textContent = "Thank you — your message has been sent.";
        form.reset();
        turnstile.reset();

        if (window.goatcounter) {
          window.goatcounter.count({
            path: "/contact/success",
            title: "Contact Form Success"
          });
        }

      } else {
        messageBox.textContent = "Verification failed. Please try again.";
        turnstile.reset();

        if (window.goatcounter) {
          window.goatcounter.count({
            path: "/contact/verification-failed",
            title: "Contact Form Verification Failed"
          });
        }
      }

    } catch (error) {
      messageBox.textContent = "Network error — please try again.";

      if (window.goatcounter) {
        window.goatcounter.count({
          path: "/contact/network-error",
          title: "Contact Form Network Error"
        });
      }
    }
  });
});
