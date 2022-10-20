import React, { useState } from "react";
import ThirdReply from "./ThirdReply";
import JuliusReply from "./JuliusReply";

const ThirdComment = () => {
  const ThirdComment = {
    avatar: "image-ramsesmiron.png",
    userName: "ramsesmiron",
    recent: "1 weeks ago",
    comment:
      " If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
  };

  const julius = {
    text: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
  };

  const [counter, setCounter] = useState(0);
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
    <div className="thirdComments">
      <div className="comments">
        <div className="comments-header">
          <img src={`./images/avatars/${ThirdComment.avatar}`} />
          <h4>{ThirdComment.userName}</h4>
          <p>{ThirdComment.recent}</p>
        </div>
        <div className="comments-content">
          <p style={{ color: "gray", fontWeight: "400" }}>
            {ThirdComment.comment}
          </p>
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
        <ThirdReply key={text} text={text} setComment={setComment} />
      ))}
      <JuliusReply txt={julius.text} />
    </div>
  );
};

export default ThirdComment;
