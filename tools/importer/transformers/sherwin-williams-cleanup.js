/* global WebImporter */

const TransformHook = {
  beforeTransform: 'beforeTransform',
  afterTransform: 'afterTransform'
};

export default function transform(hookName, element) {
  if (hookName === TransformHook.beforeTransform) {
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
