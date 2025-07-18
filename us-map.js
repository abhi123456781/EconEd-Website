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
  
  // Fetch the US map SVG file
  fetch('us-map.svg')
    .then(response => {
      console.log('SVG fetch response status:', response.status);
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(svgData => {
      console.log('SVG data received, length:', svgData.length);
      
      try {
        // Parse the SVG data to a DOM object
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgData, 'image/svg+xml');
        
        // Check for parsing errors
        const parserError = svgDoc.querySelector('parsererror');
        if (parserError) {
          throw new Error('SVG parsing error: ' + parserError.textContent);
        }
        
        const svgElement = svgDoc.documentElement;
        console.log('SVG element tag name:', svgElement.tagName);
        
        // Set the ID to us-map to ensure we can find it later
        svgElement.id = 'us-map';
        
        // Replace the placeholder SVG with the loaded SVG
        const placeholder = document.getElementById('us-map');
        if (!placeholder) {
          throw new Error('Placeholder SVG element not found');
        }
        
        placeholder.parentNode.replaceChild(svgElement, placeholder);
        
        // Get the map element after it's been inserted
        const map = document.getElementById('us-map');
        if (!map) {
          throw new Error('Map element not found after insertion');
        }
        
        console.log('Map inserted successfully');
        
        // Style the states
        const states = map.querySelectorAll('path');
        console.log('Number of state paths found:', states.length);
        
        states.forEach(state => {
          // Default styling
          state.setAttribute('fill', '#e5e7eb'); // Light gray
          state.setAttribute('stroke', '#ffffff');
          state.setAttribute('stroke-width', '1');
          
          // Add hover effect
          state.addEventListener('mouseover', function() {
            if (!this.classList.contains('has-chapter')) {
              this.setAttribute('fill', '#d1d5db'); // Darker gray on hover
            }
          });
          
          state.addEventListener('mouseout', function() {
            if (!this.classList.contains('has-chapter')) {
              this.setAttribute('fill', '#e5e7eb'); // Back to light gray
            }
          });
        });
        
        // Add pins for states with chapters
        chapters.forEach(chapter => {
          console.log('Processing chapter for state:', chapter.state);
          const stateElement = document.getElementById(chapter.state);
          
          if (stateElement) {
            console.log('Found state element for:', chapter.state);
            // Mark state as having a chapter
            stateElement.classList.add('has-chapter');
            stateElement.setAttribute('fill', '#c8e6c9'); // Light green background
            
            // Get state's bounding box to position the pin
            const bbox = stateElement.getBBox();
            const pinX = bbox.x + bbox.width/2;
            const pinY = bbox.y + bbox.height/2;
            
            // Create pin
            const pin = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            pin.setAttribute('cx', pinX);
            pin.setAttribute('cy', pinY);
            pin.setAttribute('r', '5');
            pin.setAttribute('fill', '#2e8b57'); // Green pin
            pin.setAttribute('stroke', '#ffffff');
            pin.setAttribute('stroke-width', '1');
            pin.setAttribute('class', 'chapter-pin');
            pin.setAttribute('data-schools', chapter.schools.join(', '));
            pin.setAttribute('data-location', chapter.location);
            
            // Add hover effect for pins
            pin.addEventListener('mouseover', function(e) {
              // Enlarge pin on hover
              this.setAttribute('r', '7');
              
              // Show info box
              const infoBox = document.getElementById('chapter-info');
              const infoTitle = document.getElementById('info-title');
              const infoLocation = document.getElementById('info-location');
              
              infoTitle.textContent = this.getAttribute('data-schools');
              infoLocation.textContent = this.getAttribute('data-location');
              
              // Position info box near the mouse
              const mapContainer = document.getElementById('map-container');
              const mapRect = mapContainer.getBoundingClientRect();
              const mouseX = e.clientX - mapRect.left;
              const mouseY = e.clientY - mapRect.top;
              
              infoBox.style.left = `${mouseX + 15}px`;
              infoBox.style.top = `${mouseY + 15}px`;
              infoBox.classList.remove('hidden');
            });
            
            pin.addEventListener('mouseout', function() {
              // Restore pin size
              this.setAttribute('r', '5');
              
              // Hide info box
              document.getElementById('chapter-info').classList.add('hidden');
            });
            
            map.appendChild(pin);
          } else {
            console.warn('State element not found for:', chapter.state);
          }
        });
      } catch (err) {
        console.error('Error processing SVG:', err);
        mapContainer.innerHTML = `<p class="text-center text-red-500">Error processing the map: ${err.message}. Please refresh the page.</p>`;
      }
    })
    .catch(error => {
      console.error('Error loading the SVG map:', error);
      mapContainer.innerHTML = `<p class="text-center text-red-500">Error loading the map: ${error.message}. Please refresh the page.</p>`;
    });
});