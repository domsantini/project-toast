import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {

    const { toastList } = React.useContext(ToastContext)
    
    return (
        <ol className={styles.wrapper}>            
            {toastList.map(({ id, message, variant}) => (    
                <li key={id} className={styles.toastWrapper}>
                    <Toast 
                        id={id} 
                        variant={variant}
                    >
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
