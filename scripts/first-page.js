const elements = {
  modal: new bootstrap.Modal(document.getElementById('myModal')),
  hidingBlock: document.getElementById('hiding-text'),
  hideButton: document.getElementById('hide-button'),
  swappingBlock: document.getElementById('dashed-border'),
  swapButton: document.getElementById('swap-button'),
};

const handleHide = () => {
  elements.hidingBlock.toggleAttribute('hidden');
};

const handleSwap = () => {
  elements.swappingBlock.classList.toggle('order-first');
};

elements.modal.show();

elements.hideButton.addEventListener('click', handleHide);

elements.swapButton.addEventListener('click', handleSwap);
