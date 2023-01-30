import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Comment } from "react-loader-spinner";

function ViewChat({ userChat, loading }) {
  const bottomRef = useRef(null);
  const parent = useRef(null);

  // for scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userChat]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const aiStyle =
    "max-w-[80%]  bg-slate-200 text-black break-words mr-auto px-4 py-2  rounded-bl-none rounded-md  overflow-auto text-justify";
  return (
    <>
      <div className="flex flex-col gap-4 p-8 md:p-20" ref={parent}>
        {/* User sms */}

        {userChat.map((chat, i) => (
          <div
            key={i}
            className={`max-w-[80%] bg-slate-800 break-words self-end px-4 py-2  rounded-bl-none rounded-md p-2 overflow-auto text-justify ${
              chat.sender === "ai" && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{chat.message}</span>
            </pre>
          </div>
        ))}
        {loading && (
          <Comment
            visible={true}
            height="50"
            width="50"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#1A2A45"
          />
        )}
        {/* ai mssg */}
        {/* <div
          className={`max-w-[80%] bg-slate-200 text-black break-words self-start px-4 py-2  rounded-bl-none rounded-md p-2 text-justify`}
        >
          <pre className="">
            <span>Hello world</span>
          </pre>
        </div> */}
        <div ref={bottomRef} className="h-3"></div>
      </div>
    </>
  );
}

export default ViewChat;
