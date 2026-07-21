(function () {
  "use strict";

  const navShell = document.querySelector(".nav-shell");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const signupForm = document.getElementById("signup-form");
  const formStatus = document.getElementById("form-status");
  const demoDialog = document.getElementById("demo-dialog");
  const demoTrigger = document.querySelector("[data-demo-trigger]");
  const demoClose = document.querySelector("[data-demo-close]");

  if (navShell && navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navShell.classList.toggle("is-open", !expanded);
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navShell.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (signupForm && formStatus) {
    signupForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (!signupForm.reportValidity()) {
        formStatus.textContent = "Please complete the required fields.";
        return;
      }

      const endpoint = (signupForm.dataset.endpoint || "").trim();
      if (!endpoint) {
        formStatus.textContent = "Preview mode only. Add a secure endpoint in index.html before collecting submissions.";
        return;
      }

      const payload = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        suins: document.getElementById("sui-ns").value.trim(),
        interest: document.getElementById("interest").value.trim()
      };

      formStatus.textContent = "Submitting...";
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error("Request failed");
        formStatus.textContent = signupForm.dataset.successMessage || "Request submitted.";
        signupForm.reset();
      } catch (error) {
        formStatus.textContent = "Submission failed. Verify the endpoint and CORS settings.";
      }
    });
  }

  if (demoDialog && demoTrigger && demoClose) {
    demoTrigger.addEventListener("click", function () { demoDialog.showModal(); });
    demoClose.addEventListener("click", function () { demoDialog.close(); });
    demoDialog.addEventListener("click", function (event) {
      if (event.target === demoDialog) demoDialog.close();
    });
  }
})();
