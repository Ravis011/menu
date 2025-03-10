
const dropdownMenuData = [
  { href: 'https://www.google.com', label: 'Google', icon: 'https://example.com/icons/google.png' },
  { href: 'https://www.facebook.com', label: 'Facebook', icon: 'https://example.com/icons/facebook.png' },
  { href: 'https://www.twitter.com', label: 'Twitter', icon: 'https://example.com/icons/twitter.png' }
];

function createDropdownMenu(config) {

  const style = document.createElement('style');
  style.innerHTML = `
    .dropdown-button {
      padding: 10px;
      background-color: #333;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      min-width: 160px;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .dropdown-content a:hover {
      background-color: #ddd;
    }

    .menu-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  `;
  document.head.appendChild(style);

  const container = document.getElementById(config.containerId);
  if (!container) {
    console.error(`Container with ID ${config.containerId} not found.`);
    return;
  }


  const button = document.createElement('button');
  button.textContent = config.buttonLabel || 'Menu';
  button.className = 'dropdown-button';

  const dropdownContent = document.createElement('div');
  dropdownContent.className = 'dropdown-content';

  dropdownMenuData.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.target = '_blank';

    const icon = document.createElement('img');
    icon.src = item.icon;
    icon.alt = item.label;
    icon.className = 'menu-icon';

    link.appendChild(icon);
    link.appendChild(document.createTextNode(item.label));
    dropdownContent.appendChild(link);
  });

  container.appendChild(button);
  container.appendChild(dropdownContent);

  button.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', (e) => {
    if (!button.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.style.display = 'none';
    }
  });
}
