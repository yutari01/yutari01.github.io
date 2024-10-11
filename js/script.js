// constants
const name = "YUT4RI";
const description = "Hanyang University (2020.3 ~) | Interested in Graphics & AI";
const twitterUrl = "https://x.com/yutari01";
const githubUrl = "https://github.com/yutari01";
const blogUrl = "https://blog.yutari.io";
const faviconUrl = "https://minotar.net/helm/68cf9063aa854545b0c0e922eeb28fef/512.png";

// DOM
document.getElementById("name").innerText = `Hello, I'm ${name}`;
document.getElementById("description").innerText = description;
document.getElementById("twitter").href = twitterUrl;
document.getElementById("github").href = githubUrl;
document.getElementById("blog").href = blogUrl;

// favicon
let link = document.createElement('link');
link.rel = 'icon';
link.href = faviconUrl;
document.head.appendChild(link);
