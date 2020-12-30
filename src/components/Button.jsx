import React from 'react';

// --- библиотека npm add classnames
import classNames from 'classnames';

const Button = ({onClick, className, outline, children}) => {

    return (
        <button 
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
        );
}

export default Button;