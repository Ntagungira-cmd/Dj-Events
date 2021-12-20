import React from "react";
import styles from "@/styles/loading.module.css"
export default function Loading(props) {                                                                                                                                                       
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
