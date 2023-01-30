import React, { useState } from "react";
import ChatInput from "../components/Chat/ChatInput";
import ViewChat from "../components/Chat/ViewChat";
import Navbar from "../components/Navbar/Navbar";
import { useMutation } from "@tanstack/react-query";
import { fetchResponse } from "../api";
import Footer from "../components/footer/Footer";

function Chat() {
  const [userChat, setUserChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      console.log(userChat);
      return fetchResponse(userChat);
    },
    onSuccess: (data) =>
      setUserChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });
  const sendMessage = async (message) => {
    await Promise.resolve(setUserChat((prev) => [...prev, message]));
    mutation.mutate();
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
        }}
        className=" bg-center bg-no-repeat bg-cover text-white h-screen  justify-between align-middle relative overflow-hidden flex flex-col"
      >
        <div className="w-full h-full backdrop-blur-md">
          {/* <Navbar/> */}
          {/* <div className="gradient-01 absolute z-0"></div>
        <div className="gradient-02 absolute z-0"></div> */}
          {/* Body */}
          <div className="h-[80%] overflow-auto w-full self-center ">
            <Navbar />
            <ViewChat userChat={userChat} loading={mutation.isLoading} />
          </div>
          {/* input */}
          <div className="w-full self-center">
            <ChatInput sendMessage={sendMessage}  />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Chat;
