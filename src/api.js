export const fetchResponse = async (chat) => {
  console.log(chat);
  try {
    const response = await fetch("https://server-askem2-0.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message).join("\n"),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
