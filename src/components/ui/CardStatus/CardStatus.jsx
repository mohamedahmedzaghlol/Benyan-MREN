import styles from "./CardStatus.module.css";
function CardStatus({counter,title}) {
  return (
    <>
      <div className={`${styles.cardStatus}  d-flex align-items-center `}>
        <div
          className={`${styles.icon} w-100 d-flex justify-content-center align-items-center`}
        >
          <i className="fa-solid fa-building"></i>
        </div>
        <div
          className={`${styles.info} w-100 d-flex flex-column align-items-center`}
        >
          <span className={`${styles.counter}`}>{counter}</span>
          <span className={`${styles.title}`}>{title}</span>
        </div>
      </div>
    </>
  );
}

export default CardStatus;
