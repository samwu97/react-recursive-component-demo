import React, { useState } from "react";
import Styles from "./AddComment.module.css";

function AddComment(props) {
  const [commentValue, setCommentValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCommentValue(e.target.value);
  };

  const handleSubmit = () => {
    props.setCommentsArray([
      ...props.commentsArray,
      {
        username: props.selectedItem.name,
        userId: props.selectedItem.id,
        date: props.getDate(),
        time: props.getTime(),
        content: commentValue,
        replies: []
      }
    ]);
    setCommentValue("");
  };

  return (
    <div className={Styles.addCommentContainer}>
      <textarea
        value={commentValue}
        onChange={handleChange}
        placeholder="Add Comment"
        rows="5"
        cols="60"
      ></textarea>
      <button onClick={handleSubmit} disabled={commentValue.length < 1}>
        Add Comment
      </button>
    </div>
  );
}

export default AddComment;
