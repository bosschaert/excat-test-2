export default function decorate(block) {
  // Add semantic structure
  const contentDiv = block.querySelector(':scope > div > div:first-child');
  const imageDiv = block.querySelector(':scope > div > div:last-child');

  if (contentDiv) {
    contentDiv.classList.add('hero-industrial-content');
  }

  if (imageDiv && imageDiv !== contentDiv) {
    imageDiv.classList.add('hero-industrial-image');
  }
}
