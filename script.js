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
});
