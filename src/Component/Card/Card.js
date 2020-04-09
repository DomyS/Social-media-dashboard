import React from "react";
import styles from "./Card.module.css";
import CountUp from "react-countup";

const Card = ({
  icon1,
  icon,
  username,
  number,
  number2,
  followers,
  upperCaret,
  lowerCaret,
  today,
  iconName,
  iconName2,
  upperCaretCard2,
  card1,
  width,
  margin,
  upperCaret2,
  card2,
  ...props
}) => {
  return (
    <div
      className={styles.card}
      style={{
        height: `${props.height}`,
        borderTop: `${props.borderTop}`,
      }}
    >
      {/*  uppertext with social icon and text*/}
      {/*  type1*/}
      {iconName && (
        <div className={styles.iconName}>
          <span
            style={{
              color: `${props.color}`,
              backgroundImage: `${props.backgroundImage}`,
            }}
          >
            {icon}
          </span>
          {username}
        </div>
      )}
      {/*  type2*/}
      {iconName2 && (
        <div className={styles.iconName2}>
          <span
            style={{
              color: `${props.color}`,
              backgroundImage: `${props.backgroundImage}`,
            }}
          >
            {icon}
          </span>
          {username}
        </div>
      )}
      {/* card1 */}
      {card1 && (
        <div>
          <h2>
            <CountUp start={1} end={number} duration={2.75} />
          </h2>
          <h3>{followers}</h3>
          <div>
            {upperCaret && (
              <div className={styles.upperCaret}>
                <i className="fa fa-caret-up"></i>
                <p>{number2} Today</p>
              </div>
            )}
            {lowerCaret && (
              <div className={styles.lowerCaret}>
                <i class="fa fa-caret-down"></i>
                <p>{number2} Today</p>
              </div>
            )}
          </div>
        </div>
      )}
      {/* card2 */}
      {card2 && (
        <div
          className="card2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px",
            marginTop: "-10px",
          }}
        >
          <h4 style={{ fontSize: "33px" }}>
            <CountUp start={1} end={number} duration={2.75} />
          </h4>
          {upperCaret && (
            <div className={styles.upperCaret2}>
              <i className="fa fa-caret-up"></i>
              <p>{number2}%</p>
            </div>
          )}
          {lowerCaret && (
            <div className={styles.lowerCaret2}>
              <i class="fa fa-caret-down"></i>
              <p>{number2}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
