import React, {FC, useEffect, useState} from 'react';
import {render} from 'react-dom';

interface IProps {
  
}

export const Popup: FC<IProps> = () => {

  const [content, setContent] = useState('N/A');

  useEffect(() => {
    chrome.tabs.query({currentWindow: true, active: true}, tabs => {
      const currentTabID = tabs.length === 0 ? 0 : tabs[0].id!;
      chrome.tabs.sendMessage(currentTabID, '', response => {
        setContent(response);
      });
    });
  }, []);

  return (
    <div>
      {content}
    </div>
  );
}

render(<Popup />, document.getElementById("popup"));
