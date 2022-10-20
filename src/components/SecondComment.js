import React, { useState } from "react";
import SecondReply from "./SecondReply";
import ThirdComment from "./ThirdComment";

const SecondComment = (props) => {
  const [counter, setCounter] = useState(props.count);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
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
      setComment("");
    }
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
            <a href="#max-reply">
              <div className="reply">
                <img src="./images/icon-reply.svg" />
                <h4>Reply</h4>
              </div>
            </a>
          </div>
        </div>

        <ThirdComment />

        {comments.map((text) => (
          <SecondReply key={text} text={text} setComment={setComment} />
        ))}

        <div className="max-reply" id="max-reply">
          <form>
            <textarea
              className="textbox"
              placeholder="Add a comment..."
              value={comment}
              onChange={handleChange}
            />
          </form>
          <div>
            <img src="./images/avatars/image-juliusomo.png" />
            <button onClick={HandleClick}>SEND</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SecondComment;
