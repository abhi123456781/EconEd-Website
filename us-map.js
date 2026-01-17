// Chapter data - cities with their locations
const chapters = [
  // New Hampshire (4)
  { city: 'Nashua', state: 'NH', location: 'Nashua, New Hampshire' },
  { city: 'Bedford', state: 'NH', location: 'Bedford, New Hampshire' },
  { city: 'Durham', state: 'NH', location: 'Durham, New Hampshire' },
  { city: 'Hollis', state: 'NH', location: 'Hollis, New Hampshire' },
  // Massachusetts (4)
  { city: 'Sharon', state: 'MA', location: 'Sharon, Massachusetts' },
  { city: 'Lexington', state: 'MA', location: 'Lexington, Massachusetts' },
  { city: 'Westford', state: 'MA', location: 'Westford, Massachusetts' },
  { city: 'Chelmsford', state: 'MA', location: 'Chelmsford, Massachusetts' },
  // Connecticut (1)
  { city: 'Trumbull', state: 'CT', location: 'Trumbull, Connecticut' },
  // New York (2)
  { city: 'Brooklyn', state: 'NY', location: 'Brooklyn, New York' },
  { city: 'Long Island', state: 'NY', location: 'Long Island, New York' },
  // California (5)
  { city: 'Los Angeles', state: 'CA', location: 'Los Angeles, California' },
  { city: 'San Francisco', state: 'CA', location: 'San Francisco, California' },
  { city: 'San Diego', state: 'CA', location: 'San Diego, California' },
  { city: 'Palo Alto', state: 'CA', location: 'Palo Alto, California' },
  { city: 'Fremont', state: 'CA', location: 'Fremont, California' },
  // Texas (4)
  { city: 'Austin', state: 'TX', location: 'Austin, Texas' },
  { city: 'Dallas', state: 'TX', location: 'Dallas, Texas' },
  { city: 'Houston', state: 'TX', location: 'Houston, Texas' },
  { city: 'Fort Worth', state: 'TX', location: 'Fort Worth, Texas' },
  // Florida (1)
  { city: 'Jacksonville', state: 'FL', location: 'Jacksonville, Florida' },
  // Georgia (2)
  { city: 'Atlanta', state: 'GA', location: 'Atlanta, Georgia' },
  { city: 'Cumming', state: 'GA', location: 'Cumming, Georgia' },
  // Illinois (2)
  { city: 'Chicago', state: 'IL', location: 'Chicago, Illinois' },
  { city: 'Naperville', state: 'IL', location: 'Naperville, Illinois' },
  // Pennsylvania (2)
  { city: 'Harrisburg', state: 'PA', location: 'Harrisburg, Pennsylvania' },
  { city: 'Hershey', state: 'PA', location: 'Hershey, Pennsylvania' },
  // North Carolina (2)
  { city: 'Durham', state: 'NC', location: 'Durham, North Carolina' },
  { city: 'Asheville', state: 'NC', location: 'Asheville, North Carolina' },
  // South Carolina (1)
  { city: 'Clemson', state: 'SC', location: 'Clemson, South Carolina' },
  // Virginia (2)
  { city: 'Charlottesville', state: 'VA', location: 'Charlottesville, Virginia' },
  { city: 'Williamsburg', state: 'VA', location: 'Williamsburg, Virginia' },
  // Washington (1)
  { city: 'Seattle', state: 'WA', location: 'Seattle, Washington' },
  // Colorado (1)
  { city: 'Colorado Springs', state: 'CO', location: 'Colorado Springs, Colorado' },
  // Minnesota (1)
  { city: 'Maple Grove', state: 'MN', location: 'Maple Grove, Minnesota' },
  // Ohio (1)
  { city: 'Akron', state: 'OH', location: 'Akron, Ohio' },
  // Kentucky (1)
  { city: 'Lexington', state: 'KY', location: 'Lexington, Kentucky' },
  // Louisiana (2)
  { city: 'Baton Rouge', state: 'LA', location: 'Baton Rouge, Louisiana' },
  { city: 'Alexandria', state: 'LA', location: 'Alexandria, Louisiana' },
  // Maryland (1)
  { city: 'Annapolis', state: 'MD', location: 'Annapolis, Maryland' },
  // Oregon (1)
  { city: 'Roseburg', state: 'OR', location: 'Roseburg, Oregon' },
  // Vermont (1)
  { city: 'Stowe', state: 'VT', location: 'Stowe, Vermont' },
  // Alabama (1)
  { city: 'Huntsville', state: 'AL', location: 'Huntsville, Alabama' },
  // Idaho (1)
  { city: 'Boise', state: 'ID', location: 'Boise, Idaho' },
  // Michigan (1)
  { city: 'Grand Rapids', state: 'MI', location: 'Grand Rapids, Michigan' },
  // Maine (2)
  { city: 'Rockland', state: 'ME', location: 'Rockland, Maine' },
  { city: 'Bangor', state: 'ME', location: 'Bangor, Maine' },
  // Delaware (2)
  { city: 'Wilmington', state: 'DE', location: 'Wilmington, Delaware' },
  { city: 'Middletown', state: 'DE', location: 'Middletown, Delaware' },
  // Oklahoma (1)
  { city: 'Tulsa', state: 'OK', location: 'Tulsa, Oklahoma' },
  // Tennessee (1)
  { city: 'Mt. Juliet', state: 'TN', location: 'Mt. Juliet, Tennessee' },
  // Arkansas (1)
  { city: 'Jonesboro', state: 'AR', location: 'Jonesboro, Arkansas' },
  // Nevada (1)
  { city: 'Fallon', state: 'NV', location: 'Fallon, Nevada' },
  // Nebraska (1)
  { city: 'Omaha', state: 'NE', location: 'Omaha, Nebraska' },
  // Rhode Island (1)
  { city: 'Providence', state: 'RI', location: 'Providence, Rhode Island' },
  // Wisconsin (1)
  { city: 'Madison', state: 'WI', location: 'Madison, Wisconsin' },
  // Arizona (1)
  { city: 'Tempe', state: 'AZ', location: 'Tempe, Arizona' },
  // Missouri (1)
  { city: 'Columbia', state: 'MO', location: 'Columbia, Missouri' },
  // New Jersey (1)
  { city: 'Princeton', state: 'NJ', location: 'Princeton, New Jersey' },
  // Utah (1)
  { city: 'Provo', state: 'UT', location: 'Provo, Utah' },
  // Indiana (1)
  { city: 'Bloomington', state: 'IN', location: 'Bloomington, Indiana' },
  // Iowa (1)
  { city: 'Iowa City', state: 'IA', location: 'Iowa City, Iowa' },
  // Kansas (1)
  { city: 'Lawrence', state: 'KS', location: 'Lawrence, Kansas' },
  // New Mexico (1)
  { city: 'Albuquerque', state: 'NM', location: 'Albuquerque, New Mexico' }
];

// International chapters (will be displayed separately)
const internationalChapters = [
  { country: 'Canada', region: 'Ontario' },
  { country: 'India', region: 'New Delhi' },
  { country: 'UAE', region: 'Dubai' }
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
      // Coordinates precisely adjusted for accurate geographic placement
      const cityPositions = {
        // New Hampshire (4)
        'Nashua, New Hampshire': { x: 0.920, y: 0.200 },
        'Bedford, New Hampshire': { x: 0.919, y: 0.202 },
        'Durham, New Hampshire': { x: 0.921, y: 0.198 },
        'Hollis, New Hampshire': { x: 0.919, y: 0.201 },
        // Massachusetts (4)
        'Sharon, Massachusetts': { x: 0.916, y: 0.252 },
        'Lexington, Massachusetts': { x: 0.914, y: 0.245 },
        'Westford, Massachusetts': { x: 0.913, y: 0.240 },
        'Chelmsford, Massachusetts': { x: 0.913, y: 0.242 },
        // Connecticut (1)
        'Trumbull, Connecticut': { x: 0.910, y: 0.275 },
        // New York (2)
        'Brooklyn, New York': { x: 0.905, y: 0.285 },
        'Long Island, New York': { x: 0.907, y: 0.282 },
        // California (5)
        'Los Angeles, California': { x: 0.210, y: 0.580 },
        'San Francisco, California': { x: 0.180, y: 0.420 },
        'San Diego, California': { x: 0.215, y: 0.620 },
        'Palo Alto, California': { x: 0.185, y: 0.430 },
        'Fremont, California': { x: 0.187, y: 0.428 },
        // Texas (4)
        'Austin, Texas': { x: 0.620, y: 0.720 },
        'Dallas, Texas': { x: 0.640, y: 0.680 },
        'Houston, Texas': { x: 0.680, y: 0.750 },
        'Fort Worth, Texas': { x: 0.635, y: 0.678 },
        // Florida (1)
        'Jacksonville, Florida': { x: 0.870, y: 0.780 },
        // Georgia (2)
        'Atlanta, Georgia': { x: 0.820, y: 0.625 },
        'Cumming, Georgia': { x: 0.815, y: 0.620 },
        // Illinois (2)
        'Chicago, Illinois': { x: 0.750, y: 0.355 },
        'Naperville, Illinois': { x: 0.748, y: 0.357 },
        // Pennsylvania (2)
        'Harrisburg, Pennsylvania': { x: 0.875, y: 0.345 },
        'Hershey, Pennsylvania': { x: 0.880, y: 0.350 },
        // North Carolina (2)
        'Durham, North Carolina': { x: 0.880, y: 0.525 },
        'Asheville, North Carolina': { x: 0.850, y: 0.545 },
        // South Carolina (1)
        'Clemson, South Carolina': { x: 0.840, y: 0.575 },
        // Virginia (2)
        'Charlottesville, Virginia': { x: 0.875, y: 0.455 },
        'Williamsburg, Virginia': { x: 0.890, y: 0.465 },
        // Washington (1)
        'Seattle, Washington': { x: 0.220, y: 0.200 },
        // Colorado (1)
        'Colorado Springs, Colorado': { x: 0.520, y: 0.480 },
        // Minnesota (1)
        'Maple Grove, Minnesota': { x: 0.680, y: 0.285 },
        // Ohio (1)
        'Akron, Ohio': { x: 0.830, y: 0.375 },
        // Kentucky (1)
        'Lexington, Kentucky': { x: 0.800, y: 0.500 },
        // Louisiana (2)
        'Baton Rouge, Louisiana': { x: 0.720, y: 0.700 },
        'Alexandria, Louisiana': { x: 0.700, y: 0.720 },
        // Maryland (1)
        'Annapolis, Maryland': { x: 0.895, y: 0.385 },
        // Oregon (1)
        'Roseburg, Oregon': { x: 0.200, y: 0.320 },
        // Vermont (1)
        'Stowe, Vermont': { x: 0.918, y: 0.185 },
        // Alabama (1)
        'Huntsville, Alabama': { x: 0.780, y: 0.640 },
        // Idaho (1)
        'Boise, Idaho': { x: 0.350, y: 0.350 },
        // Michigan (1)
        'Grand Rapids, Michigan': { x: 0.780, y: 0.305 },
        // Maine (2)
        'Rockland, Maine': { x: 0.930, y: 0.155 },
        'Bangor, Maine': { x: 0.928, y: 0.125 },
        // Delaware (2)
        'Wilmington, Delaware': { x: 0.895, y: 0.365 },
        'Middletown, Delaware': { x: 0.893, y: 0.370 },
        // Oklahoma (1)
        'Tulsa, Oklahoma': { x: 0.650, y: 0.550 },
        // Tennessee (1)
        'Mt. Juliet, Tennessee': { x: 0.760, y: 0.580 },
        // Arkansas (1)
        'Jonesboro, Arkansas': { x: 0.720, y: 0.620 },
        // Nevada (1)
        'Fallon, Nevada': { x: 0.280, y: 0.400 },
        // Nebraska (1)
        'Omaha, Nebraska': { x: 0.600, y: 0.385 },
        // Rhode Island (1)
        'Providence, Rhode Island': { x: 0.912, y: 0.265 },
        // Wisconsin (1)
        'Madison, Wisconsin': { x: 0.730, y: 0.320 },
        // Arizona (1)
        'Tempe, Arizona': { x: 0.380, y: 0.580 },
        // Missouri (1)
        'Columbia, Missouri': { x: 0.700, y: 0.480 },
        // New Jersey (1)
        'Princeton, New Jersey': { x: 0.900, y: 0.330 },
        // Utah (1)
        'Provo, Utah': { x: 0.400, y: 0.450 },
        // Indiana (1)
        'Bloomington, Indiana': { x: 0.780, y: 0.420 },
        // Iowa (1)
        'Iowa City, Iowa': { x: 0.680, y: 0.380 },
        // Kansas (1)
        'Lawrence, Kansas': { x: 0.640, y: 0.480 },
        // New Mexico (1)
        'Albuquerque, New Mexico': { x: 0.480, y: 0.600 }
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
        let pinsAdded = 0;
        chapters.forEach(chapter => {
          const cityPos = cityPositions[chapter.location];

          if (cityPos) {
            pinsAdded++;
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
          } else {
            console.warn(`No position found for: ${chapter.location}`);
          }
        });
        console.log(`Added ${pinsAdded} pins out of ${chapters.length} chapters`);
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