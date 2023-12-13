import React from 'react'

function useEscapeKey(callback) {
    
    React.useEffect(() => {
        function handleEscape(event) {
            if (event.key !== 'Escape') {
                return
            }
            callback(event)
        }
        
        window.addEventListener('keydown', handleEscape)
        
        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    }, [])
}

export default useEscapeKey;