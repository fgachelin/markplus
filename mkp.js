const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/fgachelin/markplus/refs/heads/main/grammar.json'; // Paste your Raw URL here

async function readGitHubJson(url) {
  try {
    // 1. Fetch the data from the GitHub Raw URL
    const response = await fetch(url);

    // Check for HTTP errors (e.g., 404 Not Found)
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status} - Le fichier est-il public?`);
    }

    // 2. Parse the JSON response into a JavaScript object
    const data = await response.json();

    console.log("Données JSON lues depuis GitHub:", data);
    return data;
    
  } catch (error) {
    console.error("Échec de la lecture du fichier JSON:", error);
  }
}

// Execute the function
readGitHubJson(GITHUB_RAW_URL);

document.body.innerHTML = "<h1>MarkPlus is working!</h1>";
