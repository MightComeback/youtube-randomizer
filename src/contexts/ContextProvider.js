import React, { useState, createContext, useContext } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
	const [arrayId, setArrayId] = useState('');
	const [cnt, setCnt] = useState(1);
	const [urlArray, setUrlArray] = useState([]);

  return (
    <StateContext.Provider value={{
      isWelcomeOpen, setIsWelcomeOpen, arrayId, setArrayId, cnt, setCnt,
      urlArray, setUrlArray
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);