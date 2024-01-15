import styles from "./styles.module.css";
import Home from "../pages/home";
import { StateProvider } from "../context/stateContext";

type Props = {
  className?: string;
};

export const UploadForm = (props: Props) => {
  const { className } = props;
  console.log("props | UploadForm", props);

  return (
    <StateProvider>
      <div className={`${className} ${styles.upload_form_container}`}>
        <Home />
      </div>
    </StateProvider>
  );
};
