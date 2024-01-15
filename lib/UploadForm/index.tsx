
import styles from './styles.module.css'
type Props={
    className?: string
}

export const UploadForm = (props: Props)=> {
    const {className} = props
    console.log('props | UploadForm' , props)


    return(
        <div className={`${className} ${styles.upload_form_container}`}>
            UploadForm
        </div>
    )
  }