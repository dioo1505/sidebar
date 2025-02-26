import { useState } from 'react';

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
} from '@botpress/webchat';

const clientId = "39e0a224-39aa-462d-bd6a-bbf912728ec3";

const configuration = {
  color: '#000',
};

export default function Chatbot() {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab 
          onClick={toggleWebchat} 
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        />
        {isWebchatOpen && (
          <div
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '300px',
              height: '400px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'white',
              zIndex: 1000,
            }}
          >
            <Webchat />
          </div>
        )}
      </WebchatProvider>
    </div>
  );
}
