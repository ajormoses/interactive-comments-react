import { useState } from "react";
import FirstComment from "./components/FirstComment";
import SecondComment from "./components/SecondComment";

function App() {
  const [count, setCount] = useState(0);

  const firstComment = {
    avatar: "image-amyrobson.png",
    userName: "amyrobson",
    recent: "1 month ago",
    comment:
      "  Impressive! Though it seems the frag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    avatarReply: "image-juliusomo.png",
  };

  const secondComment = {
    avatar: "image-maxblagun.png",
    userName: "maxblagun",
    recent: "2 weeks ago",
    comment:
      " Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
  };

  return (
    <>
      <FirstComment
        avatar={firstComment.avatar}
        userName={firstComment.userName}
        recent={firstComment.recent}
        comment={firstComment.comment}
        count={count}
        setCount={setCount}
        avatarReply={firstComment.avatarReply}
      />

      <SecondComment
        avatar={secondComment.avatar}
        userName={secondComment.userName}
        recent={secondComment.recent}
        comment={secondComment.comment}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default App;
