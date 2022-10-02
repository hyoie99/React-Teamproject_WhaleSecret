import styles from "../css/trans_style.module.css";

function Translate() {
  return (
    <div className={styles.main_page}>
      <div className={styles.descrip_div}>
        <div className={styles.story_des}>
          <div>
            <h1> 스토리 설명 </h1>
          </div>
          <img
            className={styles.ghost_whale_img}
            alt=""
            src={require("../icon/main_whale.png")}
          />
        </div>
        <div className={styles.guide_des}>
          <h1> 가이드 이미지 </h1>
        </div>
      </div>
      <div>
        <button>뒤로 가기</button>
        <button>메시지 카드 만들기</button>
      </div>
    </div>
  );
}

export default Translate;