import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/loading_style.module.css";

function Loading({ username, usertext }) {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/ghost_page/result", {
        state: { username: { username }, usertext: { usertext } },
      });
    }, 1500);
  };
  // console.log(username, usertext);

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className={styles.main_page}>
      <div>
        <h1 className={styles.title}>LOADING</h1>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}

export default Loading;