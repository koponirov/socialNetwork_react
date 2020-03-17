import React from 'react'
import styles from './FormControls.module.css'
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {

    const hasError = (meta.touched && meta.error)

    return (
        <div className={hasError && styles.formControls}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div >
                {hasError && <span> {meta.error} </span>}
            </div>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    const hasError = (meta.touched && meta.error)

    return (
        <div className={hasError && styles.formControls}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {hasError && <span> {meta.error} </span>}
            </div>
        </div>
    )
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return (
        <div className={styles.field}>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={component}
                   {...props}
            /> {text}
        </div>
    )
}
