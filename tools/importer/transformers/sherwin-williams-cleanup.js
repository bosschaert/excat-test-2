/* global WebImporter */

export default function transform(hookName, element) {
  if (hookName === 'beforeTransform') {
    WebImporter.DOMUtils.remove(element, [
      'header.header-content',
      'nav.navigation',
      'footer.footer-wrapper',
      '.modal-container',
      '.back-to-top',
      '.breadcrumbs',
      '#onetrust-consent-sdk'
    ]);
  }
}
