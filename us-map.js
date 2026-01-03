// Chapter data - cities with their locations
const chapters = [
  { city: 'Nashua', state: 'NH', location: 'Nashua, New Hampshire' },
  { city: 'Bedford', state: 'NH', location: 'Bedford, New Hampshire' },
  { city: 'Trumbull', state: 'CT', location: 'Trumbull, Connecticut' },
  { city: 'Walpole', state: 'MA', location: 'Walpole, Massachusetts' },
  { city: 'Sharon', state: 'MA', location: 'Sharon, Massachusetts' },
  { city: 'Atlanta', state: 'GA', location: 'Atlanta, Georgia' },
  { city: 'Lexington', state: 'MA', location: 'Lexington, Massachusetts' },
  { city: 'Brooklyn', state: 'NY', location: 'Brooklyn, New York' },
  { city: 'Manhattan', state: 'NY', location: 'Manhattan, New York' },
  { city: 'Long Island', state: 'NY', location: 'Long Island, New York' },
  { city: 'Westford', state: 'MA', location: 'Westford, Massachusetts' },
  { city: 'Jacksonville', state: 'FL', location: 'Jacksonville, Florida' },
  { city: 'Cumming', state: 'GA', location: 'Cumming, Georgia' },
  { city: 'Omaha', state: 'NE', location: 'Omaha, Nebraska' },
  { city: 'Los Angeles', state: 'CA', location: 'Los Angeles, California' },
  { city: 'San Francisco', state: 'CA', location: 'San Francisco, California' },
  { city: 'Sacramento', state: 'CA', location: 'Sacramento, California' },
  { city: 'San Diego', state: 'CA', location: 'San Diego, California' },
  { city: 'Bakersfield', state: 'CA', location: 'Bakersfield, California' },
  { city: 'Palo Alto', state: 'CA', location: 'Palo Alto, California' },
  { city: 'Fremont', state: 'CA', location: 'Fremont, California' },
  { city: 'Grand Rapids', state: 'MI', location: 'Grand Rapids, Michigan' },
  { city: 'Hollis', state: 'NH', location: 'Hollis, New Hampshire' },
  { city: 'Chelmsford', state: 'MA', location: 'Chelmsford, Massachusetts' },
  { city: 'Rockland', state: 'ME', location: 'Rockland, Maine' },
  { city: 'Wilmington', state: 'DE', location: 'Wilmington, Delaware' },
  { city: 'Austin', state: 'TX', location: 'Austin, Texas' },
  { city: 'Dallas', state: 'TX', location: 'Dallas, Texas' },
  { city: 'Tulsa', state: 'OK', location: 'Tulsa, Oklahoma' },
  { city: 'Mt. Juliet', state: 'TN', location: 'Mt. Juliet, Tennessee' },
  { city: 'Jonesboro', state: 'AR', location: 'Jonesboro, Arkansas' },
  { city: 'Akron', state: 'OH', location: 'Akron, Ohio' },
  { city: 'Fallon', state: 'NV', location: 'Fallon, Nevada' },
  { city: 'Durham', state: 'NC', location: 'Durham, North Carolina' },
  { city: 'Asheville', state: 'NC', location: 'Asheville, North Carolina' },
  { city: 'Charleston', state: 'SC', location: 'Charleston, South Carolina' },
  { city: 'Clemson', state: 'SC', location: 'Clemson, South Carolina' },
  { city: 'Maple Grove', state: 'MN', location: 'Maple Grove, Minnesota' },
  { city: 'Philadelphia', state: 'PA', location: 'Philadelphia, Pennsylvania' },
  { city: 'Hershey', state: 'PA', location: 'Hershey, Pennsylvania' },
  { city: 'Lexington', state: 'KY', location: 'Lexington, Kentucky' },
  { city: 'Baton Rouge', state: 'LA', location: 'Baton Rouge, Louisiana' },
  { city: 'Alexandria', state: 'LA', location: 'Alexandria, Louisiana' },
  { city: 'Annapolis', state: 'MD', location: 'Annapolis, Maryland' },
  { city: 'Houston', state: 'TX', location: 'Houston, Texas' },
  { city: 'Fort Worth', state: 'TX', location: 'Fort Worth, Texas' },
  { city: 'Amarillo', state: 'TX', location: 'Amarillo, Texas' },
  { city: 'Seattle', state: 'WA', location: 'Seattle, Washington' },
  { city: 'Roseburg', state: 'OR', location: 'Roseburg, Oregon' },
  { city: 'Stowe', state: 'VT', location: 'Stowe, Vermont' },
  { city: 'Manchester', state: 'VT', location: 'Manchester, Vermont' },
  { city: 'Bangor', state: 'ME', location: 'Bangor, Maine' },
  { city: 'Huntsville', state: 'AL', location: 'Huntsville, Alabama' },
  { city: 'Boise', state: 'ID', location: 'Boise, Idaho' },
  { city: 'Colorado Springs', state: 'CO', location: 'Colorado Springs, Colorado' },
  { city: 'Charlottesville', state: 'VA', location: 'Charlottesville, Virginia' },
  { city: 'Williamsburg', state: 'VA', location: 'Williamsburg, Virginia' },
  { city: 'Chesapeake', state: 'VA', location: 'Chesapeake, Virginia' },
  { city: 'Chicago', state: 'IL', location: 'Chicago, Illinois' },
  { city: 'Naperville', state: 'IL', location: 'Naperville, Illinois' },
  { city: 'Providence', state: 'RI', location: 'Providence, Rhode Island' }
];

// International chapters (will be displayed separately)
const internationalChapters = [
  { country: 'Canada', region: 'Ontario' },
  { country: 'India', region: 'India' },
  { country: 'UAE', region: 'United Arab Emirates' }
];

document.addEventListener('DOMContentLoaded', function () {
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
    img.onload = function () {
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

      // Calculate the actual displayed map dimensions
      let mapAspectRatio = 1000 / 589; // Original SVG aspect ratio (width/height)
      let mapDisplayHeight, mapDisplayWidth;

      // Function to calculate the actual displayed map dimensions
      const calculateMapDimensions = () => {
        const containerWidth = mapContainer.offsetWidth;
        const containerHeight = mapContainer.offsetHeight;

        // If container is wider than the map would be at full height
        if (containerWidth / containerHeight > mapAspectRatio) {
          mapDisplayHeight = containerHeight;
          mapDisplayWidth = containerHeight * mapAspectRatio;
        } else {
          mapDisplayWidth = containerWidth;
          mapDisplayHeight = containerWidth / mapAspectRatio;
        }

        // Calculate the empty space on sides or top/bottom
        const horizontalMargin = (containerWidth - mapDisplayWidth) / 2;
        const verticalMargin = (containerHeight - mapDisplayHeight) / 2;

        return {
          width: mapDisplayWidth, height: mapDisplayHeight,
          horizontalMargin, verticalMargin
        };
      };

      // City positions on the US map (normalized coordinates from 0-1, x=west to east, y=north to south)
      const cityPositions = {
        'Nashua, New Hampshire': { x: 0.930, y: 0.195 },
        'Bedford, New Hampshire': { x: 0.928, y: 0.200 },
        'Trumbull, Connecticut': { x: 0.920, y: 0.270 },
        'Walpole, Massachusetts': { x: 0.918, y: 0.245 },
        'Sharon, Massachusetts': { x: 0.920, y: 0.250 },
        'Atlanta, Georgia': { x: 0.800, y: 0.620 },
        'Lexington, Massachusetts': { x: 0.915, y: 0.240 },
        'Brooklyn, New York': { x: 0.900, y: 0.280 },
        'Manhattan, New York': { x: 0.900, y: 0.275 },
        'Long Island, New York': { x: 0.905, y: 0.275 },
        'Westford, Massachusetts': { x: 0.916, y: 0.242 },
        'Jacksonville, Florida': { x: 0.840, y: 0.780 },
        'Cumming, Georgia': { x: 0.795, y: 0.615 },
        'Omaha, Nebraska': { x: 0.550, y: 0.380 },
        'Los Angeles, California': { x: 0.180, y: 0.580 },
        'San Francisco, California': { x: 0.150, y: 0.420 },
        'Sacramento, California': { x: 0.160, y: 0.400 },
        'San Diego, California': { x: 0.185, y: 0.620 },
        'Bakersfield, California': { x: 0.175, y: 0.520 },
        'Palo Alto, California': { x: 0.155, y: 0.430 },
        'Fremont, California': { x: 0.158, y: 0.425 },
        'Grand Rapids, Michigan': { x: 0.750, y: 0.300 },
        'Hollis, New Hampshire': { x: 0.929, y: 0.198 },
        'Chelmsford, Massachusetts': { x: 0.917, y: 0.243 },
        'Rockland, Maine': { x: 0.945, y: 0.150 },
        'Wilmington, Delaware': { x: 0.880, y: 0.360 },
        'Austin, Texas': { x: 0.580, y: 0.720 },
        'Dallas, Texas': { x: 0.600, y: 0.680 },
        'Tulsa, Oklahoma': { x: 0.620, y: 0.550 },
        'Mt. Juliet, Tennessee': { x: 0.720, y: 0.580 },
        'Jonesboro, Arkansas': { x: 0.680, y: 0.620 },
        'Akron, Ohio': { x: 0.790, y: 0.370 },
        'Fallon, Nevada': { x: 0.250, y: 0.400 },
        'Durham, North Carolina': { x: 0.860, y: 0.520 },
        'Asheville, North Carolina': { x: 0.820, y: 0.540 },
        'Charleston, South Carolina': { x: 0.835, y: 0.600 },
        'Clemson, South Carolina': { x: 0.815, y: 0.570 },
        'Maple Grove, Minnesota': { x: 0.620, y: 0.280 },
        'Philadelphia, Pennsylvania': { x: 0.875, y: 0.340 },
        'Hershey, Pennsylvania': { x: 0.860, y: 0.345 },
        'Lexington, Kentucky': { x: 0.760, y: 0.500 },
        'Baton Rouge, Louisiana': { x: 0.680, y: 0.700 },
        'Alexandria, Louisiana': { x: 0.660, y: 0.720 },
        'Annapolis, Maryland': { x: 0.870, y: 0.380 },
        'Houston, Texas': { x: 0.630, y: 0.750 },
        'Fort Worth, Texas': { x: 0.595, y: 0.675 },
        'Amarillo, Texas': { x: 0.560, y: 0.600 },
        'Seattle, Washington': { x: 0.200, y: 0.200 },
        'Roseburg, Oregon': { x: 0.180, y: 0.320 },
        'Stowe, Vermont': { x: 0.925, y: 0.180 },
        'Manchester, Vermont': { x: 0.923, y: 0.185 },
        'Bangor, Maine': { x: 0.940, y: 0.120 },
        'Huntsville, Alabama': { x: 0.740, y: 0.640 },
        'Boise, Idaho': { x: 0.320, y: 0.350 },
        'Colorado Springs, Colorado': { x: 0.480, y: 0.480 },
        'Charlottesville, Virginia': { x: 0.855, y: 0.450 },
        'Williamsburg, Virginia': { x: 0.860, y: 0.460 },
        'Chesapeake, Virginia': { x: 0.865, y: 0.470 },
        'Chicago, Illinois': { x: 0.720, y: 0.350 },
        'Naperville, Illinois': { x: 0.718, y: 0.352 },
        'Providence, Rhode Island': { x: 0.910, y: 0.260 }
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

      // Function to position all pins correctly
      const positionPins = () => {
        // Remove existing pins
        while (pinsContainer.firstChild) {
          pinsContainer.removeChild(pinsContainer.firstChild);
        }

        // Get current map dimensions
        const mapDimensions = calculateMapDimensions();

        // Add pins for cities with chapters
        chapters.forEach(chapter => {
          const cityPos = cityPositions[chapter.location];

          if (cityPos) {
            // Create pin
            const pin = document.createElement('div');
            pin.className = 'chapter-pin';
            pin.style.position = 'absolute';

            // Calculate position based on actual map dimensions and margins
            const pinLeft = mapDimensions.horizontalMargin + (cityPos.x * mapDimensions.width);
            const pinTop = mapDimensions.verticalMargin + (cityPos.y * mapDimensions.height);

            pin.style.left = `${pinLeft}px`;
            pin.style.top = `${pinTop}px`;

            // Make pin size responsive based on container width
            const containerWidth = mapContainer.offsetWidth;
            const basePinSize = Math.max(6, Math.min(10, containerWidth / 80));
            pin.style.width = `${basePinSize}px`;
            pin.style.height = `${basePinSize}px`;

            pin.style.borderRadius = '50%';
            pin.style.backgroundColor = '#2e8b57';
            pin.style.border = '1px solid #ffffff';
            pin.style.transform = 'translate(-50%, -50%)';
            pin.style.pointerEvents = 'auto';
            pin.style.cursor = 'pointer';
            pin.style.zIndex = '10';
            pin.setAttribute('data-location', chapter.location);

            // Add hover effect for pins
            pin.addEventListener('mouseover', function (e) {
              // Enlarge pin on hover
              const hoverPinSize = Math.max(8, Math.min(14, containerWidth / 60));
              this.style.width = `${hoverPinSize}px`;
              this.style.height = `${hoverPinSize}px`;

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

              // Ensure info box stays within container bounds
              const infoBoxWidth = 150; // Approximate width
              const rightEdgePosition = Math.min(mouseX + 15, mapRect.width - infoBoxWidth);

              infoBox.style.left = `${rightEdgePosition}px`;
              infoBox.style.top = `${mouseY + 15}px`;
              infoBox.classList.remove('hidden');
            });

            pin.addEventListener('mouseout', function () {
              // Restore pin size
              const containerWidth = mapContainer.offsetWidth;
              const basePinSize = Math.max(6, Math.min(10, containerWidth / 80));
              this.style.width = `${basePinSize}px`;
              this.style.height = `${basePinSize}px`;

              // Hide info box
              document.getElementById('chapter-info').classList.add('hidden');
            });

            // Add touch support for mobile
            pin.addEventListener('touchstart', function (e) {
              e.preventDefault(); // Prevent default touch behavior

              // Trigger the same behavior as mouseover
              const mouseEvent = new MouseEvent('mouseover', {
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
              });
              this.dispatchEvent(mouseEvent);

              // Auto-hide after 3 seconds for mobile
              setTimeout(() => {
                document.getElementById('chapter-info').classList.add('hidden');
                const containerWidth = mapContainer.offsetWidth;
                const basePinSize = Math.max(6, Math.min(10, containerWidth / 80));
                this.style.width = `${basePinSize}px`;
                this.style.height = `${basePinSize}px`;
              }, 3000);
            });

            pinsContainer.appendChild(pin);
          }
        });
      };

      // Initial positioning
      positionPins();

      // Reposition pins when window resizes
      window.addEventListener('resize', positionPins);

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

    img.onerror = function () {
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