export default function decorate(block) {
  const items = [...block.children];

  items.forEach((item) => {
    const question = item.children[0];
    const answer = item.children[1];

    if (question && answer) {
      // Create accordion item structure
      item.classList.add('accordion-item');

      // Style question as button
      question.classList.add('accordion-question');
      question.setAttribute('role', 'button');
      question.setAttribute('tabindex', '0');
      question.setAttribute('aria-expanded', 'false');

      // Style answer
      answer.classList.add('accordion-answer');
      answer.setAttribute('aria-hidden', 'true');

      // Add click handler
      question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !isExpanded);
        answer.setAttribute('aria-hidden', isExpanded);
        item.classList.toggle('accordion-item--open', !isExpanded);
      });

      // Add keyboard handler
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    }
  });
}
