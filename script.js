
  document.addEventListener('DOMContentLoaded', function() {

     console.log('Script is running!')
    // Create the banner element
    var banner = document.createElement('div');
    banner.innerText = '🚀 Special Announcement! Limited-time offer!';
    
    // Banner styles
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#ff5722';
    banner.style.color = '#fff';
    banner.style.padding = '10px 20px';
    banner.style.fontSize = '16px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '99999'; // Ensure it's above all elements
    banner.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    
    // Push the rest of the page down so it doesn't overlap
    document.body.style.paddingTop = '40px'; // Adjust based on banner height

    // Append banner to the body
    document.body.prepend(banner);

    // Mobile Responsiveness
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 600) {
        banner.style.fontSize = '14px';
        banner.style.padding = '8px 15px';
        document.body.style.paddingTop = '35px'; // Adjust for smaller screens
      } else {
        banner.style.fontSize = '16px';
        banner.style.padding = '10px 20px';
        document.body.style.paddingTop = '40px';
      }
    });
  });
