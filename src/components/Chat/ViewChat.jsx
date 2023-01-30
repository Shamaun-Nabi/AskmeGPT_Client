import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

function ViewChat({ userChat }) {
  const parent = useRef(null);
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
              {chat.message}
            </pre>
          </div>
        ))}

        {/* ai mssg */}
        {/* <div
          className={`max-w-[80%] bg-slate-200 text-black break-words self-start px-4 py-2  rounded-bl-none rounded-md p-2 text-justify`}
        >
          <pre className="">
            <span>Hello world</span>
          </pre>
        </div> */}
      </div>
    </>
  );
}

export default ViewChat;
