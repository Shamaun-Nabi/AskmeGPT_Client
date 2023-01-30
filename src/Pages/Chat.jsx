import React, { useState } from "react";
import ChatInput from "../components/Chat/ChatInput";
import ViewChat from "../components/Chat/ViewChat";
import Navbar from "../components/Navbar/Navbar";

function Chat() {
  const [userChat, setUserChat] = useState([]);
  const sendMessage = async (message) => {
    await Promise.resolve(setUserChat((prev) => [...prev, message]));
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        }}
        className=" bg-center bg-no-repeat bg-cover text-white h-screen  justify-between align-middle relative overflow-hidden flex flex-col"
      >
        <Navbar />
        <div className="w-full h-full backdrop-blur-md">
          {/* <div className="gradient-01 absolute z-0"></div>
        <div className="gradient-02 absolute z-0"></div> */}
          {/* Body */}
          <div className="h-[90%] overflow-auto w-full self-center">
            <ViewChat userChat={userChat} />
          </div>
          {/* input */}
          <div className="w-full  self-center">
            <ChatInput sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
