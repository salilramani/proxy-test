// app/api/proxy/route.js
import axios from 'axios';

export const GET = async (req) => {
  const url = 'https://assuredpsychology.com'; // The default testing website URL
  try {
    const response = await axios.get(url, { responseType: 'text' });
    const modifiedContent = response.data.replace(
      '</body>',
      `
      <script>
        console.log('Script injected successfully.');
        document.addEventListener('DOMContentLoaded', function() {
          document.body.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            event.stopPropagation(); // Stop the event from propagating

            console.log('Click event detected:', event);
            const circle = document.createElement('div');
            circle.style.width = '20px';
            circle.style.height = '20px';
            circle.style.backgroundColor = 'blue';
            circle.style.borderRadius = '50%';
            circle.style.position = 'absolute';
            circle.style.left = event.pageX + 'px';
            circle.style.top = event.pageY + 'px';
            circle.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(circle);
            console.log('Circle added at:', event.pageX, event.pageY);
          });
        });
      </script>
      </body>`
    );
    return new Response(modifiedContent, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch the external website' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};