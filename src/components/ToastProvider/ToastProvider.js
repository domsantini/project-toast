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
    
    function dismissAllToasts() {
        setToastList([])
    }
    
    return (
        <ToastContext.Provider value={{ toastList, handleDismiss, createNewToast, dismissAllToasts }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;



