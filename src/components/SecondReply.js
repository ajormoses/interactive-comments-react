import React, { useState } from "react";

const SecondReply = (props) => {
  const [count, setCount] = useState(0);
  const [deleteComment, setDeleteComment] = useState(false);
  const [on, setOn] = useState(true);
  const [update, setUpdate] = useState(true);
  const [comment, setComment] = useState(props.text);
  const add = () => {
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const handleClick = () => {
    setDeleteComment((prev) => !prev);
  };

  const handleDelete = () => {
    setDeleteComment((prev) => !prev);
    setOn((prev) => !prev);
  };

  const handleCancel = () => {
    setDeleteComment((prev) => !prev);
  };

  const handleEdit = () => {
    setUpdate((prev) => !prev);
  };

  const handleUpdate = () => {
    setUpdate((prev) => !prev);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    on && (
      <div className="comments">
        <div className="comments-header">
          <img src="./images/avatars/image-juliusomo.png" />
          <h4 className="username">juliusomo</h4>
          <button className="status">you</button>
          <h4 className="recent">2 days ago</h4>
        </div>

        <div className="comments-content">
          {update ? (
            <p>
              @maxblagun <span>{comment}</span>
            </p>
          ) : (
            <form>
              <textarea
                className="textbox"
                value={comment}
                onChange={onChangeHandler}
              />
            </form>
          )}
        </div>

        <div className="comments-footer">
          <div className="counter">
            <button onClick={add}>
              <img src="./images/icon-plus.svg" />
            </button>
            <h4>{count}</h4>
            <button onClick={minus} className="minus">
              <img src="./images/icon-minus.svg" />
            </button>
          </div>
          {update ? (
            <div className="del-edit">
              <div className="delete" onClick={handleClick}>
                <img src="./images/icon-delete.svg" />
                <h4>Delete</h4>
              </div>
              <div className="edit" onClick={handleEdit}>
                <img src="./images/icon-edit.svg" />
                <h4>Edit</h4>
              </div>
            </div>
          ) : (
            <button className="update" onClick={handleUpdate}>
              UPDATE
            </button>
          )}
        </div>
        {deleteComment && (
          <div className="delete-modal">
            <div className="delete-comment">
              <h2>Delete comment</h2>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can't be undone.
              </p>
              <div className="btns">
                <button
                  style={{ background: "hsl(211, 10%, 45%)" }}
                  onClick={handleCancel}
                >
                  NO, CANCEL
                </button>
                <button
                  style={{ background: "hsl(358, 79%, 66%)" }}
                  onClick={handleDelete}
                >
                  YES, DELETE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default SecondReply;
