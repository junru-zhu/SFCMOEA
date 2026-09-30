const copyButtons = document.querySelectorAll("[data-copy-target]");
const statusNode = document.querySelector(".copy-status");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = "Copied";
      if (statusNode) statusNode.textContent = "BibTeX copied to clipboard.";
      window.setTimeout(() => {
        button.textContent = "Copy BibTeX";
        if (statusNode) statusNode.textContent = "";
      }, 2200);
    } catch {
      if (statusNode) statusNode.textContent = "Select the BibTeX text above and copy it manually.";
    }
  });
});
