/* global WebImporter */

export default function parse(element, { document }) {
  const cells = [];

  const items = element.querySelectorAll('.category-rollup, .related-content__container__content, .media-tile, .primary-cta');

  items.forEach(item => {
    const imageCell = document.createElement('div');
    const contentCell = document.createElement('div');

    const img = item.querySelector('img');
    if (img) {
      const newImg = document.createElement('img');
      newImg.src = img.getAttribute('src');
      newImg.alt = img.getAttribute('alt') || '';
      imageCell.appendChild(newImg);
    }

    const titleLink = item.querySelector('a[href]');
    if (titleLink) {
      const link = document.createElement('a');
      link.href = titleLink.getAttribute('href');
      const strong = document.createElement('strong');
      strong.textContent = titleLink.textContent.trim();
      link.appendChild(strong);
      contentCell.appendChild(link);
    }

    const desc = item.querySelector('p:not(:empty)');
    if (desc) {
      const p = document.createElement('p');
      p.textContent = desc.textContent.trim();
      contentCell.appendChild(p);
    }

    cells.push([imageCell, contentCell]);
  });

  if (cells.length === 0) return;

  const block = WebImporter.Blocks.createBlock(document, { name: 'Cards-Category', cells });
  element.replaceWith(block);
}
