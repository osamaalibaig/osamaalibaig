import { FunctionComponent } from "react";
import styles from "./CreateAnAccount.module.css";
const CreateAnAccount: FunctionComponent = () => {
  return (
    <div className={styles.createAnAccount}>
      <b className={styles.kadom}>Kadom</b>
      <div className={styles.createAnAccountChild} />
      <b className={styles.getStarted}>Get Started</b>
      <b className={styles.signIn}>Sign In</b>
    </div>
  );
};

export default CreateAnAccount;
