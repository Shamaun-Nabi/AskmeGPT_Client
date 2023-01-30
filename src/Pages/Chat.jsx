import React from "react";
import ChatInput from "../components/Chat/ChatInput";
import ViewChat from "../components/Chat/ViewChat";
import Navbar from "../components/Navbar/Navbar";

function Chat() {
  return (
    <>
      <div className="bg-[#090E1A] text-white h-screen  justify-between align-middle relative overflow-hidden flex flex-col">
      <Navbar />
        <div className="gradient-01 absolute z-0"></div>
        <div className="gradient-02 absolute z-0"></div>
        {/* Body */}
        <div className="h-[90%] overflow-auto w-full self-center">
          <ViewChat />
        </div>
        {/* input */}
        <div className="w-full self-center">
          <ChatInput />
        </div>
      </div>
    </>
  );
}

export default Chat;
