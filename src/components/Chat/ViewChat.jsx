import React from "react";

function ViewChat({ userChat }) {
  const aiStyle =
    "max-w-[80%] bg-slate-200 text-black break-words self-start px-4 py-2  rounded-bl-none rounded-md p-2 text-justify";
  return (
    <>
      <div className="flex flex-col gap-4 p-8 md:p-20">
        {/* User sms */}

        {userChat.map((chat, i) => (
          <div
            key={i}
            className={`max-w-[80%] bg-slate-800 break-words self-end px-4 py-2  rounded-bl-none rounded-md p-2 text-justify ${
              chat.sender === "ai" && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{chat.message}</span>
            </pre>
          </div>
        ))}

        {/* ai mssg */}
        <div
          className={`max-w-[80%] bg-slate-200 text-black break-words self-start px-4 py-2  rounded-bl-none rounded-md p-2 text-justify`}
        >
          <pre className="">
            <span>Hello world</span>
          </pre>
        </div>
      </div>
    </>
  );
}

export default ViewChat;
