import React from "react";

function ViewChat() {
  return (
    <>
      <div className="flex flex-col gap-4 p-8 md:p-20">
        {/* User sms */}
        <div className="max-w-[80%] bg-slate-800 break-words self-end px-4 py-2  rounded-bl-none rounded-md p-2 text-justify  ">
          <pre className="whitespace-pre-wrap">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ducimus quaerat repellendus nisi quos iste quibusdam dolor
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, iure consectetur? Fugit corrupti optio quaerat aliquid ducimus repellat quisquam possimus reiciendis facere adipisci consequatur minus, sunt itaque ipsa illo odit accusantium enim expedita. Soluta sunt dolore sit blanditiis totam sapiente possimus asperiores aut, repellat molestiae iste reiciendis impedit! Eum, deleniti.
            </span>
          </pre>
        </div>

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
