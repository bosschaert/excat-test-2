import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    let hasImage = false;
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-category-card-image';
        hasImage = true;
      } else if (div.children.length === 0 || div.textContent.trim() === '') {
        // Remove empty divs
        div.remove();
      } else {
        div.className = 'cards-category-card-body';
      }
    });
    // Mark cards without images
    if (!hasImage) {
      li.classList.add('no-image');
    }
    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    const picture = img.closest('picture');
    if (picture) {
      picture.replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
    }
  });

  block.textContent = '';
  block.append(ul);
}
