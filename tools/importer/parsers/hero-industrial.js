/* global WebImporter */

export default function parse(element, { document }) {
  const heading = element.querySelector('h1.h1-hero__heading');
  const subtitle = element.querySelector('h2.intro-copy');
  const description = element.querySelector('.c-richtext-editor p');
  const ctaLink = element.querySelector('a.button.primary');
  const heroImage = element.querySelector('.h1-hero__container__side-content img');

  const contentCell = document.createElement('div');
  if (heading) {
    const h1 = document.createElement('h1');
    h1.textContent = heading.textContent.trim();
    contentCell.appendChild(h1);
  }
  if (subtitle) {
    const h2 = document.createElement('h2');
    h2.textContent = subtitle.textContent.trim();
    contentCell.appendChild(h2);
  }
  if (description) {
    const p = document.createElement('p');
    p.textContent = description.textContent.trim();
    contentCell.appendChild(p);
  }
  if (ctaLink) {
    const a = document.createElement('a');
    a.href = ctaLink.getAttribute('href');
    a.textContent = ctaLink.textContent.trim();
    contentCell.appendChild(a);
  }

  const imageCell = document.createElement('div');
  if (heroImage) {
    const img = document.createElement('img');
    img.src = heroImage.getAttribute('src');
    img.alt = heroImage.getAttribute('alt') || '';
    imageCell.appendChild(img);
  }

  const cells = [[contentCell, imageCell]];
  const block = WebImporter.Blocks.createBlock(document, { name: 'Hero-Industrial', cells });
  element.replaceWith(block);
}
