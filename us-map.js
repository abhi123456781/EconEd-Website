// Chapter data - state abbreviations and chapter information
const chapters = [
  { state: 'NH', schools: ['Nashua High School South', 'Bedford High School', 'Hollis-Brookline High School', 'Academy for Science and Design', 'Windham High School'], location: 'New Hampshire' },
  { state: 'MA', schools: ['Acton-Boxborough Regional High School', 'Lexington High School', 'Grafton High School'], location: 'Massachusetts' },
  { state: 'CT', schools: ['Plainville High School', 'Trumbull High School'], location: 'Connecticut' },
  { state: 'TX', schools: ['Wilson High School'], location: 'Dallas, TX' },
  { state: 'GA', schools: ['Discovery High School'], location: 'Lawrenceville, GA' },
  { state: 'NE', schools: ['Elkhorn North High School'], location: 'Omaha, NE' },
  { state: 'FL', schools: ['Allen D. Nease High School', 'Tocoi Creek High School'], location: 'Florida' },
  { state: 'WA', schools: ['Lincoln High School'], location: 'Tacoma, WA' }
];

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, attempting to fetch SVG map');
  const mapContainer = document.getElementById('map-container');
  
  if (!mapContainer) {
    console.error('Map container not found');
    return;
  }
  
  // Instead of using fetch, directly load the SVG content into the existing SVG element
  // This approach avoids CORS issues when running from the file system
  try {
    // Get the placeholder SVG element
    const placeholder = document.getElementById('us-map');
    if (!placeholder) {
      throw new Error('Placeholder SVG element not found');
    }
    
    // Create an img element to load the SVG
    const img = new Image();
    img.onload = function() {
      console.log('SVG image loaded successfully');
      
      // Create a canvas to draw the image (this is just to verify it loaded)
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      // Since we can't directly access the SVG content due to CORS,
      // we'll use the existing SVG element and style it
      placeholder.setAttribute('width', '100%');
      placeholder.setAttribute('height', '100%');
      
      // Set a background image on the container instead
      mapContainer.style.backgroundImage = `url(${img.src})`;
      mapContainer.style.backgroundSize = 'contain';
      mapContainer.style.backgroundPosition = 'center';
      mapContainer.style.backgroundRepeat = 'no-repeat';
      
      // Add pins for states with chapters
      // Note: Since we can't access the SVG content directly,
      // we'll need to use approximate positions for the pins
      const mapWidth = mapContainer.offsetWidth;
      const mapHeight = mapContainer.offsetHeight;
      
      // Approximate positions for each state (normalized coordinates from 0-1)
      const statePositions = {
        'NH': { x: 0.86, y: 0.18 },
        'MA': { x: 0.87, y: 0.20 },
        'CT': { x: 0.85, y: 0.22 },
        'TX': { x: 0.42, y: 0.68 },
        'GA': { x: 0.70, y: 0.60 },
        'NE': { x: 0.45, y: 0.35 },
        'FL': { x: 0.75, y: 0.75 },
        'WA': { x: 0.15, y: 0.12 }
      };
      
      // Create a div to hold the pins
      const pinsContainer = document.createElement('div');
      pinsContainer.style.position = 'absolute';
      pinsContainer.style.top = '0';
      pinsContainer.style.left = '0';
      pinsContainer.style.width = '100%';
      pinsContainer.style.height = '100%';
      pinsContainer.style.pointerEvents = 'none';
      mapContainer.appendChild(pinsContainer);
      
      // Add pins for states with chapters
      chapters.forEach(chapter => {
        console.log('Processing chapter for state:', chapter.state);
        const statePos = statePositions[chapter.state];
        
        if (statePos) {
          console.log('Found position for state:', chapter.state);
          
          // Create pin
          const pin = document.createElement('div');
          pin.className = 'chapter-pin';
          pin.style.position = 'absolute';
          pin.style.left = `${statePos.x * 100}%`;
          pin.style.top = `${statePos.y * 100}%`;
          pin.style.width = '10px';
          pin.style.height = '10px';
          pin.style.borderRadius = '50%';
          pin.style.backgroundColor = '#2e8b57';
          pin.style.border = '1px solid #ffffff';
          pin.style.transform = 'translate(-50%, -50%)';
          pin.style.pointerEvents = 'auto';
          pin.style.cursor = 'pointer';
          pin.style.zIndex = '10';
          pin.setAttribute('data-schools', chapter.schools.join(', '));
          pin.setAttribute('data-location', chapter.location);
          
          // Add hover effect for pins
          pin.addEventListener('mouseover', function(e) {
            // Enlarge pin on hover
            this.style.width = '14px';
            this.style.height = '14px';
            
            // Show info box
            const infoBox = document.getElementById('chapter-info');
            const infoTitle = document.getElementById('info-title');
            const infoLocation = document.getElementById('info-location');
            
            infoTitle.textContent = this.getAttribute('data-schools');
            infoLocation.textContent = this.getAttribute('data-location');
            
            // Position info box near the mouse
            const mapRect = mapContainer.getBoundingClientRect();
            const mouseX = e.clientX - mapRect.left;
            const mouseY = e.clientY - mapRect.top;
            
            infoBox.style.left = `${mouseX + 15}px`;
            infoBox.style.top = `${mouseY + 15}px`;
            infoBox.classList.remove('hidden');
          });
          
          pin.addEventListener('mouseout', function() {
            // Restore pin size
            this.style.width = '10px';
            this.style.height = '10px';
            
            // Hide info box
            document.getElementById('chapter-info').classList.add('hidden');
          });
          
          pinsContainer.appendChild(pin);
        } else {
          console.warn('Position not found for state:', chapter.state);
        }
      });
    };
    
    img.onerror = function() {
      console.error('Error loading the SVG image');
      mapContainer.innerHTML = '<p class="text-center text-red-500">Error loading the map. Please refresh the page.</p>';
    };
    
    // Set the source to load the image
    // Using a relative path to avoid absolute file path issues
    img.src = 'us-map.svg';
    
  } catch (err) {
    console.error('Error processing SVG:', err);
    mapContainer.innerHTML = `<p class="text-center text-red-500">Error processing the map: ${err.message}. Please refresh the page.</p>`;
  }
});