/*
 * Configuration Script for the Praise Generator Web Application
 *
 * This script sets up the important HTML structure for the web application.
 * It dynamically inserts metadata and styles to configure the document's head elements
 * for optimal SEO, accessibility, and user experience.
 *
 * Key Features:
 * - Sets the default language of the document to English (`lang = "en"`).
 * - Defines the default text direction as left-to-right (`dir = "ltr"`).
 * - Configures the document title for the web page.
 * - Includes metadata to enhance SEO.
 * - Links to the style sheets for styling the application.
 * - Connects a badge to enhance brand identity.
 * - Specifies the type attribute for all script elements for better HTML5 compliance, compatibility, and application stability.
 *
 * Any corresponding manual changes in the HTML document would be overridden at runtime if the configuration script, original or minified, is connected.
 * The <meta> charset tag must always be hardcoded because it needs to be guaranteed to be within the first 1024 bytes of the HTML document,
 * as some browsers only look at those bytes before choosing an encoding
 * (see https://html.spec.whatwg.org/multipage/semantics.html#charset).
 * The <meta> viewport tag must always be hardcoded to ensure the immediate correct page rendering.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

/** Set the <html> element `lang` property. */
const html = document.querySelector("html");
html.lang = "en";

/** Set `dir="ltr"` for the <html> element. */
html.dir = "ltr";

/** Set `title` for the <html> element based on a webpage's content. */
const title = document.querySelector("h1");
document.title =
  title.textContent + " | Full Stack Developer Vladislav Kazantsev";

/** Insert <meta name="author" content="Vladislav Kazantsev">. */
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

/** Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">. */
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

/** Insert <meta name="description" content="The Praise Generator is designed to improve mood and well-being. With just a click, you can receive a random praise, perfect for lifting spirits and fostering a supportive environment." />. */
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "The Praise Generator is designed to improve mood and well-being. With just a click, you can receive a random praise, perfect for lifting spirits and fostering a supportive environment.";
document.querySelector("head").appendChild(metaDescription);

/** Insert <meta name="keywords" content="praise, generator, web, application, bright, perfect, motivation, kindness" />. */
const metaKeywords = document.createElement("meta");
metaKeywords.name = "keywords";
metaKeywords.content =
  "praise, generator, web, application, bright, perfect, motivation, kindness";
document.querySelector("head").appendChild(metaKeywords);

/** Insert <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">. */
const linkNormalize = document.createElement("link");
linkNormalize.rel = "stylesheet";
linkNormalize.type = "text/css";
linkNormalize.href =
  "https://necolas.github.io/normalize.css/8.0.1/normalize.css";
document.querySelector("head").appendChild(linkNormalize);

/** Insert <link rel="stylesheet" type="text/css" href="styles/style-min.css">. */
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);
linkStyle.onload = function () {
  /** Show the body after the CSS is loaded. */
  document.body.style.display = "flex";
};

/** Insert <script src="scripts/generate-and-copy-min.js"></script>. */
const generateAndCopyScript = document.createElement("script");
generateAndCopyScript.src = "scripts/generate-and-copy-min.js";
document.querySelector("body").appendChild(generateAndCopyScript);

/** Insert <script src="scripts/components-min.js"></script>. */
const componentsScript = document.createElement("script");
componentsScript.src = "scripts/components-min.js";
document.querySelector("body").appendChild(componentsScript);

/** Insert <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>. */
const confettiScript = document.createElement("script");
confettiScript.src =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js";
document.querySelector("body").appendChild(confettiScript);

/** Insert <link rel="icon" href="pics/logos/logo.svg">. */
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/logo.svg";
document.querySelector("head").appendChild(linkImage);

/** Set `type="text/javascript"` for all <script> elements for better compatibility. */
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

// Insert <meta http-equiv="Pragma" content="no-cache">
// var metaPragma = document.createElement("meta");
// metaPragma.httpEquiv = "Pragma";
// metaPragma.content = "no-cache";
// document.querySelector("head").appendChild(metaPragma);
