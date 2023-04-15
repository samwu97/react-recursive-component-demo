import React, { useState } from "react";
import Styles from "./CommentItem.module.css";

function CommentItem(props) {
  let numberOfNested = 0;
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyFormValue, setReplyFormValue] = useState("");

  const increaseCount = () => {
    numberOfNested = numberOfNested + 10;
  };

  const nestedComments = (props.item.replies || []).map((item, index) => {
    return (
      <CommentItem
        selectedItem={props.selectedItem}
        getDate={props.getDate}
        getTime={props.getTime}
        item={item}
        key={index}
      />
    );
  });

  const hanleReplyForm = () => {
    setShowReplyForm(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setReplyFormValue(e.target.value);
  };

  const handleAddReply = () => {
    props.item.replies.push({
      username: props.selectedItem.name,
      userId: props.selectedItem.id,
      date: props.getDate(),
      time: props.getTime(),
      content: replyFormValue,
      replies: []
    });
    setShowReplyForm(false);
  };

  return (
    <div style={{ marginTop: "4px" }}>
      <div className={Styles.commentItemNameDate}>
        <div className={Styles.commentItemName}>{props.item.username}</div>
        <div className={Styles.commentItemDate}>
          {props.item.date} at {props.item.time}
        </div>
      </div>
      <div className={Styles.commentItemContent}>{props.item.content}</div>
      {!showReplyForm ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div onClick={hanleReplyForm} className={Styles.commentItemReply}>
            Reply
          </div>
        </div>
      ) : (
        <div>
          <textarea value={replyFormValue} onChange={handleChange}></textarea>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              onClick={handleAddReply}
              disabled={replyFormValue.length < 1}
            >
              Add
            </button>
            <button onClick={() => setShowReplyForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      {increaseCount()}
      <div style={{ marginLeft: numberOfNested }}>{nestedComments}</div>
    </div>
  );
}

export default CommentItem;
