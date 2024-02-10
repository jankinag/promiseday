document.addEventListener("DOMContentLoaded", function() {
  const categoryButtons = document.querySelectorAll(".category-buttons button");
  const prompts = document.querySelectorAll(".prompts div");
  const messageForm = document.querySelector(".message-form");
  const copyLinkButton = document.querySelector(".copy-link-button");

  // Hide copy link button initially
  copyLinkButton.style.display = "none";

  // Function to show prompts based on selected category and change background color
  function showPrompts(category) {
    prompts.forEach(prompt => {
      prompt.style.display = "none";
    });

    document.querySelector(`.${category}-prompts`).style.display = "block";
    messageForm.style.display = "block"; // Show the message form

    // Change background color based on category
    const categoryColors = {
      love: "red",
      support: "blue",
      adventure: "green",
      communication: "yellow"
    };
    document.querySelector(".prompts").style.backgroundColor = categoryColors[category];
  }

  // Event listener for category buttons
  categoryButtons.forEach(button => {
    button.addEventListener("click", function() {
      const category = this.className; // Get the category class name
      showPrompts(category);
    });
  });

  // Function to generate unique ID
  function generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Function to copy text to clipboard
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  // Form submission event listener
  messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    const uniqueId = generateUniqueId();
    const promiseLink = window.location.href + "?promiseId=" + uniqueId;
    // Here you can handle the promise creation or share the promiseLink
    console.log("Promise message:", message);
    console.log("Unique ID:", uniqueId);
    console.log("Promise Link:", promiseLink);

    // Copy the generated link automatically
    copyToClipboard(promiseLink);
    alert("Link copied to clipboard!");

    // Show the copy link button
    copyLinkButton.style.display = "block";
  });

  // Event listener for copy link button
  copyLinkButton.addEventListener("click", function() {
    const promiseLink = window.location.href + "?promiseId=" + generateUniqueId();
    copyToClipboard(promiseLink);
    alert("Link copied to clipboard!");
  });
});
