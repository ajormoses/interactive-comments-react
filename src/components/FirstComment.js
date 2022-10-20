import React, { useState } from "react";
import FirstReply from "./FirstReply";

const FirstComment = (props) => {
  const [counter, setCounter] = useState(props.count);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState(false);
  const add = () => {
    setCounter((prev) => prev + 1);
  };

  const minus = () => {
    setCounter((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const HandleClick = () => {
    if (comment === "") {
      alert("Write a comment");
    } else {
      setComments((comments) => [comment, ...comments]);
      setReply((prev) => !prev);
    }
  };

  const handleReply = () => {
    setReply((prev) => !prev);
    setComment("");
  };

  return (
    <article>
      <div className="container">
        <div className="comments">
          <div className="comments-header">
            <img src={`./images/avatars/${props.avatar}`} />
            <h4>{props.userName}</h4>
            <p>{props.recent}</p>
          </div>
          <div className="comments-content">
            <p style={{ color: "gray", fontWeight: "400" }}>{props.comment}</p>
          </div>
          <div className="comments-footer">
            <div className="counter">
              <button onClick={add}>
                <img src="./images/icon-plus.svg" />
              </button>
              <h4>{counter}</h4>
              <button onClick={minus} className="minus">
                <img src="./images/icon-minus.svg" />
              </button>
            </div>
            <div className="reply" onClick={handleReply}>
              <img src="./images/icon-reply.svg" />
              <h4>Reply</h4>
            </div>
          </div>
        </div>
        {reply && (
          <div className="comment-reply">
            <img src="./images/avatars/image-juliusomo.png" />
            <form>
              <textarea
                className="textbox"
                value={comment}
                onChange={handleChange}
              />
            </form>
            <button onClick={HandleClick}>REPLY</button>
          </div>
        )}
        {comments.map((text) => (
          <FirstReply key={text} text={text} setComment={setComment} />
        ))}
      </div>
    </article>
  );
};

export default FirstComment;
