<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>🌐 English to Translator (LSTM)</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #eef1f5;
      color: #333;
    }

    .wrap {
      max-width: 800px;
      margin: 40px auto;
      background: #ffffff;
      padding: 40px 30px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }

    label {
      font-weight: 600;
      display: block;
      margin-bottom: 6px;
    }

    select, textarea, button {
      width: 100%;
      padding: 12px 14px;
      font-size: 16px;
      margin-top: 6px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-family: inherit;
    }

    textarea {
      resize: vertical;
    }

    button {
      background-color: #007BFF;
      color: white;
      border: none;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    #status {
      text-align: center;
      font-style: italic;
      color: #555;
      margin-bottom: 15px;
    }

    #output {
      background: #f2f6fa;
      border: 1px solid #ccd6e0;
      border-radius: 10px;
      padding: 20px;
      margin-top: 10px;
    }

    #output textarea {
      background: transparent;
      border: none;
      font-size: 18px;
      width: 100%;
      min-height: 100px;
      color: #222;
    }

    .btn-group {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 10px;
    }

    .small-btn {
      padding: 8px 14px;
      font-size: 14px;
      border-radius: 6px;
      background-color: #6c757d;
      color: white;
      border: none;
      cursor: pointer;
    }

    .small-btn:hover {
      background-color: #495057;
    }

    #charCount {
      text-align: right;
      font-size: 13px;
      color: #888;
      margin-top: -15px;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      margin-top: 30px;
      border-collapse: collapse;
    }

    th, td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
      text-align: left;
    }

    th {
      background: #f1f1f1;
    }

    tr:nth-child(even) {
      background: #fafafa;
    }

    .delete-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
    }

    .delete-btn:hover {
      background: #c0392b;
    }

    .clear-history-btn {
      margin-top: 10px;
      float: right;
      background: #dc3545;
    }

    .clear-history-btn:hover {
      background: #a71d2a;
    }

    @media (max-width: 600px) {
      .btn-group {
        flex-direction: column;
        align-items: stretch;
      }

      .clear-history-btn {
        float: none;
        width: 100%;
      }
    }
  </style>
</head>
<body>

<div class="wrap translator-wrap">
  <h1>🌐 English to Translator (LSTM)</h1>

  <!-- Language Selector -->
  <div>
    <label for="language">Choose Target Language:</label>
    <select id="language">
  <option value="tamil">English ➜ Tamil</option>
  <option value="english">Tamil ➜ English</option>
</select>

  </div>

  <!-- Input Field -->
  <div>
    <label for="inputWord">Enter English sentence:</label>
    <textarea id="inputWord" rows="4" placeholder="e.g., how are you?" oninput="updateCharCount()"></textarea>
    <div id="charCount">0 characters</div>
  </div>

  <!-- Translate Button -->
  <div style="text-align: center;">
    <button onclick="predict()">🔁 Translate</button>
  </div>

  <!-- Status Message -->
  <div id="status">Model loading...</div>

  <!-- Output Box -->
  <div id="output">
    <textarea id="translatedText" readonly placeholder="Translated output will appear here..."></textarea>
    <div class="btn-group">
      <button class="small-btn" onclick="copyToClipboard()">📋 Copy</button>
      <button class="small-btn" onclick="downloadTranslation()">⬇️ Download</button>
    </div>
  </div>

  <!-- History -->
  <div>
    <h3>🕘 Translation History</h3>
    <table id="historyTable">
      <thead>
        <tr>
          <th>English</th>
          <th>Tamil</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <button class="small-btn clear-history-btn" onclick="clearHistory()">🗑️ Clear All History</button>
  </div>
</div>

<script>
  document.getElementById("status").innerText = "Ready to translate";

  function predict() {
    const input = document.getElementById("inputWord").value.trim();
    const language = document.getElementById("language").value;
    const outputText = document.getElementById("translatedText");

    if (!input) {
      outputText.value = "Please enter a sentence to translate.";
      return;
    }

    const dummyTranslations = {
      tamil: "நீங்கள் எப்படி இருக்கிறீர்கள்?",
    };

    const result = dummyTranslations[language] || "Translation not available.";
    outputText.value = result;
    document.getElementById("status").innerText = "Translated ✔️";

    saveToHistory(input, result);
    setTimeout(() => outputText.value = "", 20000); // auto-clear after 20 sec
  }

  function updateCharCount() {
    const input = document.getElementById("inputWord").value;
    document.getElementById("charCount").innerText = input.length + " characters";
  }

  function copyToClipboard() {
    const text = document.getElementById("translatedText").value;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  }

  function downloadTranslation() {
    const text = document.getElementById("translatedText").value;
    if (!text.trim()) {
      alert("No translation to download.");
      return;
    }

    const lang = document.getElementById("language").value;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `translation_${lang}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function saveToHistory(english, translation) {
    const history = JSON.parse(localStorage.getItem("translationHistory") || "[]");
    history.unshift({
      english,
      translation,
      time: new Date().toLocaleString()
    });
    localStorage.setItem("translationHistory", JSON.stringify(history));
    renderHistory();
  }

  function renderHistory() {
    const history = JSON.parse(localStorage.getItem("translationHistory") || "[]");
    const tbody = document.querySelector("#historyTable tbody");
    tbody.innerHTML = "";

    history.forEach((entry, index) => {
      const row = `<tr>
        <td>${entry.english}</td>
        <td>${entry.translation}</td>
        <td>${entry.time}</td>
        <td><button class="delete-btn" onclick="deleteHistory(${index})">Delete</button></td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }

  function deleteHistory(index) {
    const history = JSON.parse(localStorage.getItem("translationHistory") || "[]");
    history.splice(index, 1);
    localStorage.setItem("translationHistory", JSON.stringify(history));
    renderHistory();
  }

  function clearHistory() {
    if (confirm("Clear all translation history?")) {
      localStorage.removeItem("translationHistory");
      renderHistory();
    }
  }

  window.onload = renderHistory;
</script>

</body>
</html>
