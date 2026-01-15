/* global WebImporter */

/**
 * Columns Promo Parser
 * Parses promotional columns with logo/image and CTA content
 */
export default function parse(element) {
  const cells = [['Columns-Promo']];

  // Find logo/image
  const img = element.querySelector('img.cmp-image__image');
  const imgSrc = img ? img.getAttribute('src') : '';
  const imgAlt = img ? img.getAttribute('alt') : '';

  // Find heading (h3 or strong text)
  const heading = element.querySelector('h3, .swdc-typeset-display-3');
  const headingText = heading ? heading.textContent.trim() : '';

  // Find CTA buttons/links
  const buttons = element.querySelectorAll('a.swdc-button, a.cmp-button--swcom');
  const buttonLinks = [];
  buttons.forEach((btn) => {
    const href = btn.getAttribute('href');
    const text = btn.textContent.trim();
    if (href && text) {
      buttonLinks.push(`<a href="${href}">${text}</a>`);
    }
  });

  // Build image cell
  const imageCell = imgSrc ? `<img src="${imgSrc}" alt="${imgAlt}">` : '';

  // Build content cell
  let contentCell = '';
  if (headingText) {
    contentCell += `<h3>${headingText}</h3>`;
  }
  if (buttonLinks.length > 0) {
    contentCell += buttonLinks.join(' ');
  }

  cells.push([imageCell, contentCell]);

  return cells;
}
