/* global WebImporter */

/**
 * Hero Industrial Parser
 * Parses hero sections with heading, description, and side-by-side image layout
 */
export default function parse(element) {
  const cells = [['Hero-Industrial']];

  // Find heading
  const h1 = element.querySelector('h1');
  const heading = h1 ? h1.textContent.trim() : '';

  // Find description text
  const textElement = element.querySelector('.cmp-text p, .swdc-typeset-body-2');
  const description = textElement ? textElement.textContent.trim() : '';

  // Find image
  const img = element.querySelector('img.cmp-image__image');
  const imgSrc = img ? img.getAttribute('src') : '';
  const imgAlt = img ? img.getAttribute('alt') : '';

  // Build content cell
  let contentCell = '';
  if (heading) {
    contentCell += '<h1>' + heading + '</h1>';
  }
  if (description) {
    contentCell += '<p>' + description + '</p>';
  }

  // Build image cell
  let imageCell = '';
  if (imgSrc) {
    imageCell = '<img src="' + imgSrc + '" alt="' + imgAlt + '">';
  }

  cells.push([contentCell, imageCell]);

  return cells;
}
