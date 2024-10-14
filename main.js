// Fetch the dynamic content and insert it into the page
fetch('/content/destinations/my-destination.md')
  .then(response => response.text())  // Get the file content as text
  .then(markdownText => {
    // Convert the markdown to HTML
    const htmlContent = marked(markdownText);
    
    // Insert the content into an element on the page
    document.getElementById('destination-content').innerHTML = htmlContent;
  })
  .catch(error => console.error('Error fetching content:', error));
