/* global WebImporter */

/**
 * Cards Training Parser
 * Parses training resource cards with image, title, description, and CTA link
 */
export default function parse(element) {
  const cells = [['Cards-Training']];

  // Find all card containers (each card is in a container with image + title + text + link)
  const cardContainers = element.querySelectorAll('.aem-Grid--4 > .container, .aem-GridColumn--default--4');

  cardContainers.forEach((card) => {
    // Find image
    const img = card.querySelector('img.cmp-image__image');
    const imgSrc = img ? img.getAttribute('src') : '';
    const imgAlt = img ? img.getAttribute('alt') : '';

    // Find title (h3)
    const h3 = card.querySelector('h3');
    const title = h3 ? h3.textContent.trim() : '';

    // Find description
    const textElement = card.querySelector('.cmp-text p');
    const description = textElement ? textElement.textContent.trim() : '';

    // Find CTA link
    const link = card.querySelector('a.cmp-link--swcom, a.swdc-link');
    const linkHref = link ? link.getAttribute('href') : '';
    const linkText = link ? link.textContent.trim().replace(/\s+/g, ' ') : '';

    if (title || imgSrc) {
      // Image cell
      const imageCell = imgSrc ? `<img src="${imgSrc}" alt="${imgAlt}">` : '';

      // Content cell
      let contentCell = '';
      if (title) {
        contentCell += `<strong>${title}</strong><br>`;
      }
      if (description) {
        contentCell += `<p>${description}</p>`;
      }
      if (linkHref && linkText) {
        contentCell += `<a href="${linkHref}">${linkText}</a>`;
      }

      cells.push([imageCell, contentCell]);
    }
  });

  return cells;
}
