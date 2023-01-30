import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function ChatInput() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[80%] flex justify-center mb-0 md:mb-4 bg-white bg-opacity-10 rounded-lg px-10 md:px-4 py-3  overflow-auto relative max-h-40">
          <textarea
            placeholder="Type here........... "
            rows={2}
            className="text-slate-200 border-0 bg-transparent  outline-none w-11/12  "
          />
          <RiSendPlaneFill className="absolute top-5 md:top-6 text-xl right-8 md:right-36 text-slate-300 hover:cursor-pointer hover:scale-125 transition ease-in duration-150" />
        </div>
      </div>
    </>
  );
}

export default ChatInput;
