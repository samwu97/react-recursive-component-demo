import React, { useState } from "react";
import Styles from "./Comments.module.css";
import Dropdown from "../Dropdown/Dropdown";
import CommentItem from "../CommentItem/CommentItem";
import AddComment from "../AddComment/AddComment";

function Comments(props) {
  let arr = [
    { id: 1, name: "Jenry Hess" },
    { id: 2, name: "Elliot Hu" },
    { id: 3, name: "Stevie Feliciano" },
    { id: 4, name: "Christian" },
    { id: 5, name: "Matt" },
    { id: 6, name: "Justen Kitsune" }
  ];

  const getDate = () => {
    var today = new Date();
    return (
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
  };

  const getTime = () => {
    var today = new Date();
    return today.getHours() + ":" + today.getMinutes();
  };

  const [commentsArray, setCommentsArray] = useState([
    {
      username: arr[0].name,
      userId: arr[0].id,
      date: getDate(),
      time: getTime(),
      content: "How Artistic!",
      replies: [
        {
          username: arr[1].name,
          userId: arr[1].id,
          date: getDate(),
          time: getTime(),
          content: "True",
          replies: []
        }
      ]
    }
  ]);
  const [selectedItem, setSelectedItem] = useState(arr[0]);

  return (
    <div className={Styles.commentsContainer}>
      <div className={Styles.commentsHeader}>
        <div className={Styles.componentHeaderTitle}>Comments</div>
        <div className={Styles.commentsHeaderEndLine}></div>
      </div>
      <Dropdown
        arr={arr}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div>
        {commentsArray.map((item, index) => {
          return (
            <CommentItem
              key={index}
              getDate={getDate}
              getTime={getTime}
              selectedItem={selectedItem}
              item={item}
            />
          );
        })}
      </div>
      <AddComment
        commentsArray={commentsArray}
        setCommentsArray={setCommentsArray}
        selectedItem={selectedItem}
        getDate={getDate}
        getTime={getTime}
      />
    </div>
  );
}

export default Comments;
