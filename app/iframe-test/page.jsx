import React from 'react';

const MyComponent = () => (
    <div>
        <h1>Hello iframe-test</h1>
<iframe
    src="/api/proxy"
    width="100%"
    height="1400"
    title="My Iframe"
  ></iframe>
    </div>
  
);

export default MyComponent;