console.log("JavaScript connected");

// Dark mode toggle: switches the dark-mode class on body and updates button text
var themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    themeToggle.textContent = "Switch to Dark Mode";
  }
});

// Chatbot elements
var chatMessages = document.getElementById("chatMessages");
var chatInput = document.getElementById("chatInput");
var chatSend = document.getElementById("chatSend");

// Keyword -> reply rules (checked in order; first match wins)
var chatbotRules = [
  {
    keywords: ["help"],
    reply: "You can ask me about: greetings, who I am, education/college/course, skills, projects, or contact. Type a short question to get started."
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greet"],
    reply: "Hello! I am the Portfolio Assistant for Parth Sehgal. Ask me about education, skills, projects, or contact details."
  },
  {
    keywords: ["who am i", "who are you", "about", "yourself", "your name", "parth"],
    reply: "I am Parth Sehgal, a 2nd year (3rd semester) BTech CSE (Core) student at JECRC University, Jaipur, and an aspiring AI Engineer."
  },
  {
    keywords: ["education", "college", "university", "course", "btech", "cse", "semester", "year", "jecrc", "jaipur"],
    reply: "Parth Sehgal is a 2nd year (3rd semester) BTech CSE (Core) student at JECRC University, Jaipur."
  },
  {
    keywords: ["skill"],
    reply: "Skills: AI Engineering; Python Programming; HTML, CSS and JavaScript; Prompt Engineering; Data Structures and Algorithms; Git and GitHub."
  },
  {
    keywords: ["project"],
    reply: "Projects: 1) Messy Python — a Python project built using Google Colab (https://github.com/parth25bcon2440-sys/MESSY-PYTHON-.git). 2) Factorial Fibonacci Struct to Dict — built using Google Colab (https://github.com/parth25bcon2440-sys/MESSY-PYTHON-.git). 3) Interactive Quiz Application — PLACEHOLDER: Project 3 link."
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "github", "reach"],
    reply: "Email: Parth.25bcon2440@jecrcu.edu.in | Phone: 6350556554 | LinkedIn: https://www.linkedin.com/in/parth-sehgal-7a5381382?utm_source=share_via&utm_content=profile&utm_medium=member_ios | GitHub: https://github.com/parth25bcon2440-sys"
  }
];

var defaultReply = "I am not sure about that yet. Try asking about who I am, education, skills, projects, contact, or type help.";

// Add a message bubble using textContent only (never innerHTML)
function addMessage(text, sender) {
  var messageEl = document.createElement("div");
  messageEl.className = "chat-message " + sender;
  messageEl.textContent = text;
  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(userText) {
  var lower = userText.toLowerCase();
  for (var i = 0; i < chatbotRules.length; i++) {
    var rule = chatbotRules[i];
    for (var j = 0; j < rule.keywords.length; j++) {
      if (lower.indexOf(rule.keywords[j]) !== -1) {
        return rule.reply;
      }
    }
  }
  return defaultReply;
}

function sendChatMessage() {
  var text = chatInput.value.trim();
  if (text === "") {
    return;
  }
  addMessage(text, "user");
  chatInput.value = "";
  addMessage(getBotReply(text), "bot");
}

chatSend.addEventListener("click", sendChatMessage);

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
});

// Welcome message on load
addMessage("Hello! I am the Portfolio Assistant. Ask about Parth Sehgal, education, skills, projects, or contact. Type help for options.", "bot");
