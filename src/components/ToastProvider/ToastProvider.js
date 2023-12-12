import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {

    const [toastList, setToastList] = React.useState([])
    
    function handleDismiss(id) {
        const nextToasts = toastList.filter(toast => {
            return toast.id !== id
        })
        
        setToastList(nextToasts)
    }

    function createNewToast(message, variant) {
        const newToast = {
            id: Math.random(),
            message,
            variant,
        }
        
        const nextToasts = [...toastList, newToast]
        setToastList(nextToasts)
        
    }
    
    return (
        <ToastContext.Provider value={{ toastList, createNewToast, handleDismiss }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;



