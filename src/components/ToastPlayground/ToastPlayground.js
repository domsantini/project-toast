import React from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    // Want to supply input state w/ a starting state value bc react doesnt like
    // going from uncontrolled to controlled
    const [message, setMessage] = React.useState('')
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]) // Default to first option
    const [showToast, setShowToast] = React.useState(false)

    const [toastList, setToastList] = React.useState([])
    
    
    function handlePopToast(event) {
        event.preventDefault()
        
        const newToast = {
            id: Math.random(),
            message,
            variant,
        }
        
        const nextToasts = [...toastList, newToast]
        setToastList(nextToasts)
        
        setMessage('')
        setVariant(VARIANT_OPTIONS[0])
    }
    
    function handleDismiss(id) {
        const nextToasts = toastList.filter(toast => {
            return toast.id !== id
        })
        
        setToastList(nextToasts)
    }
    console.log(toastList)
    
    return (
        <div className={styles.wrapper}>
        <header>
            <img alt="Cute toast mascot" src="/toast.png" />
            <h1>Toast Playground</h1>
        </header>
        
        <ToastShelf toastList={toastList} handleDismiss={handleDismiss}/>
   
        <form 
            className={styles.controlsWrapper} 
            onSubmit={handlePopToast}
        >
            <div className={styles.row}>
            <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: 'baseline' }}
            >
                Message
            </label>
            <div className={styles.inputWrapper}>
                <textarea 
                    id="message" 
                    className={styles.messageInput} 
                    value={message} 
                    onChange={(event) => {setMessage(event.target.value)}}
                />
            </div>
            </div>

            <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
                {VARIANT_OPTIONS.map(variant_option => (
                    <label htmlFor={`variant-${variant_option}`} key={`variant-${variant_option}`} >
                        <input
                            type="radio"
                            name="variant" // Allows only one to be selected
                            id={`variant-${variant_option}`} // Unique id for accessability / usability
                            value={variant_option} 
                            checked={variant_option === variant} // Mando for radio buttons
                            onChange={event => {
                                setVariant(event.target.value);
                            }}
                        />
                        {variant_option}
                    </label>
                ))}
                
            </div>
            </div>

            <div className={styles.row}>
            <div className={styles.label} />
            <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
                <Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
            </div>
            </div>
        </form>
        </div>
    );
}

export default ToastPlayground;
