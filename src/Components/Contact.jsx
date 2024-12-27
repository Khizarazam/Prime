import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const notify = () => toast("Message Send Succecfuly ✔");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2zchq47", "template_kwtr0rc", form.current, {
        publicKey: "fP6i_3DjeG4BGIgr8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full py-20 md:flex">
        <div className="md:w-[40%] h-[150px] w-full md:h-full flex justify-center md:pt-32 p-5 items-center">
          <h1 className="md:text-7xl text-5xl">Get In Touch</h1>
        </div>
        <div className=" w-full py-12 px-3 md:h-full md:w-[60%]">
          <div className="md:w-[90%] py-5 w-full flex flex-col items-center justify-center h-[80%] rounded-xl bg-[linear-gradient(to_right,_#1a2d42_50%,_#aab7b7_250%)]">
            <form ref={form} onSubmit={sendEmail} className="">
              <div className="w-full my-3 flex-col flex justify-center items-center">
                <div className="w-[300px] mb-1">
                  <h3 className="text-white">Your Name</h3>
                </div>
                <input
                  type="text"
                  name="to_name"
                  required
                  placeholder="Enter Your Name"
                  className=" rounded-md w-[300px] text-black bg-[#c0c8ca] placeholder:text-black hover:outline-zinc-300 h-[30px] p-2 outline-none"
                />
              </div>
              <div className="w-full my-3 flex-col flex justify-center items-center">
                <div className="w-[300px] mb-1">
                  <h3 className="text-white">Your Email</h3>
                </div>
                <input
                  type="email"
                  name="from_name"
                  required
                  placeholder="Enter Your Email"
                  className=" rounded-md w-[300px] bg-[#c0c8ca] txet-black placeholder:text-black hover:outline-zinc-300 h-[30px] text-black p-2 outline-none"
                />
              </div>
              <div className="w-full my-3 flex-col flex justify-center items-center">
                <div className="w-[300px] mb-1">
                  <h3 className="text-white">Message</h3>
                </div>
                <textarea
                  type="text"
                  name="message"
                  required
                  placeholder="Enter Your message"
                  className=" rounded-md w-[300px] bg-[#c0c8ca] placeholder:text-black hover:outline-zinc-300 overflow-y-auto h-[150px] text-black p-2 outline-none"
                />
              </div>
              <div className="w-full">
                <button
                  onClick={notify}
                  type="submit"
                  className=" my-3 text-white px-8 hover:border-[1px] py-2 hover:scale-105 transition-all duration-300 hover:bg-[linear-gradient(to_top,_#1a2d48_50%,_#aab7b7_250%)] rounded-full"
                >
                  Submit
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="w-full border-0 mb-12 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[2px]" />
    </>
  );
};

export default Contact;