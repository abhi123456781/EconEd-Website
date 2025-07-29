// Chapter data - state abbreviations and chapter information
const chapters = [
  // US States
  { state: 'NH', location: 'New Hampshire' },
  { state: 'MA', location: 'Massachusetts' },
  { state: 'ME', location: 'Maine' },
  { state: 'PA', location: 'Pennsylvania' },
  { state: 'CT', location: 'Connecticut' },
  { state: 'NY', location: 'New York' },
  { state: 'NC', location: 'North Carolina' },
  { state: 'VA', location: 'Virginia' },
  { state: 'FL', location: 'Florida' },
  { state: 'GA', location: 'Georgia' },
  { state: 'OH', location: 'Ohio' },
  { state: 'MI', location: 'Michigan' },
  { state: 'SC', location: 'South Carolina' },
  { state: 'NE', location: 'Nebraska' },
  { state: 'CA', location: 'California' },
  { state: 'TX', location: 'Texas' },
  { state: 'NJ', location: 'New Jersey' },
  { state: 'DE', location: 'Delaware' }
];

// International chapters (will be displayed separately)
const internationalChapters = [
  { country: 'Canada', region: 'Ontario' },
  { country: 'India', region: 'India' },
  { country: 'UAE', region: 'United Arab Emirates' }
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
      
      // Remove the empty SVG element since we're using a background image
      const placeholder = document.getElementById('us-map');
      if (placeholder) {
        placeholder.remove();
      }
      
      // Set a background image on the container instead
      mapContainer.style.backgroundImage = `url(${img.src})`;
      mapContainer.style.backgroundSize = 'contain';
      mapContainer.style.backgroundPosition = 'center';
      mapContainer.style.backgroundRepeat = 'no-repeat';
      mapContainer.style.border = 'none'; // Ensure no border is applied
      
      // Corrected positions for each state based on the latest image (normalized coordinates from 0-1)
      const statePositions = {
        'NH': { x: 0.905, y: 0.19  },  // New Hampshire
        'MA': { x: 0.9,   y: 0.24  },  // Massachusetts
        'ME': { x: 0.92,  y: 0.105 },  // Maine
        'PA': { x: 0.835, y: 0.340 },  // Pennsylvania
        'CT': { x: 0.903,   y: 0.270 },  // Connecticut
        'NY': { x: 0.855, y: 0.235 },  // New York
        'NC': { x: 0.835, y: 0.525 },  // North Carolina
        'VA': { x: 0.835, y: 0.455 },  // Virginia
        'FL': { x: 0.835, y: 0.800 },  // Florida
        'GA': { x: 0.745, y: 0.465 },  // Georgia
        'OH': { x: 0.735, y: 0.265 },  // Ohio
        'MI': { x: 0.695, y: 0.195 },  // Michigan
        'SC': { x: 0.825, y: 0.625 },  // South Carolina
        'NE': { x: 0.485, y: 0.265 },  // Nebraska
        'CA': { x: 0.10,  y: 0.285 },   // California
        'TX': { x: 0.530,  y: 0.750 },   // Texas
        'NJ': { x: 0.885,   y: 0.330 },  // New Jersey
        'DE': { x: 0.855, y: 0.380 }   // Delaware
      };
      
      // Create a div to hold the pins
      const pinsContainer = document.createElement('div');
      pinsContainer.style.position = 'absolute';
      pinsContainer.style.top = '0';
      pinsContainer.style.left = '0';
      pinsContainer.style.width = '100%';
      pinsContainer.style.height = '100%';
      pinsContainer.style.pointerEvents = 'none';
      pinsContainer.style.zIndex = '5'; // Make sure this is higher than the map image
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
            
            infoTitle.textContent = 'EconEd Chapter';
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
      
      // Add international chapters section below the map
      const internationalSection = document.createElement('div');
      internationalSection.className = 'mt-8';
      internationalSection.innerHTML = `
        <h3 class="text-xl font-bold text-center mb-4">International Chapters</h3>
        <div class="flex flex-wrap justify-center gap-4">
          ${internationalChapters.map(chapter => `
            <div class="bg-white p-4 rounded-lg shadow border border-green-500">
              <h4 class="font-bold">${chapter.country}</h4>
              <p class="text-sm text-gray-600">${chapter.region}</p>
            </div>
          `).join('')}
        </div>
      `;
      
      // Insert the international section after the map container
      mapContainer.parentNode.insertBefore(internationalSection, mapContainer.nextSibling);
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