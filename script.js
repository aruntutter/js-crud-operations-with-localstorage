"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Get Insert/Update Data elements
  const userKeyInput = document.getElementById("user-key");
  const userValueInput = document.getElementById("user-value");
  const keyValueBtn = document.getElementById("key-value-btn");

  // Get Read Data elements
  const keyToReadInput = document.getElementById("key-to-read");
  const readDataBtn = document.querySelector(".read-data-container .btn");
  const readOutput = document.getElementById("read-output");

  // Get Delete Data elements
  const keyToDeleteInput = document.getElementById("key-to-delete-value");
  const deleteDataBtn = document.getElementById("btn-delete-value");

  // Get Delete All Data element
  const deleteAllBtn = document.getElementById("btn-delete-all");

  // Get Output elements
  const outputContainer = document.getElementById("output-container");
  const output = document.getElementById("output");
  const outputKey = document.getElementById("output-key");
  const outputValue = document.getElementById("output-value");

  // Insert/Update Data
  keyValueBtn.addEventListener("click", function () {
    const key = userKeyInput.value;
    const value = userValueInput.value;

    if (key && value) {
      localStorage.setItem(key, value);
      updateOutput();
      // Clear input fields
      userKeyInput.value = "";
      userValueInput.value = "";
    } else {
      alert("Please enter both key and value.");
    }
  });

  // Read Data
  readDataBtn.addEventListener("click", function () {
    const keyToRead = keyToReadInput.value;
    const value = localStorage.getItem(keyToRead);

    if (value !== null) {
      readOutput.innerHTML = `<p>Key is: ${keyToRead}</p><p>Value is: ${value}</p>`;
    } else {
      readOutput.textContent = "Record not found for the provided key.";
    }

    // Clear input field
    keyToReadInput.value = "";
  });

  // Update Output on page load
  updateOutput();

  // Function to update the output container
  function updateOutput() {
    output.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      const record = document.createElement("div");
      record.innerHTML = `<p class="event-output">Key is: ${key}</p><p>Value is: ${value}</p> <hr>`;
      output.appendChild(record);
    }
  }
});
