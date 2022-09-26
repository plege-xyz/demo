import type { NextPage } from "next";
import { useState } from "react";
import Plege from "plege";

const plege = new Plege("cl8afh1890009zsil2reyzr3g");

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const pay = async () => {
    if (loading) return;
    setLoading(true);
    plege
      .createTransferRequest({
        recipient: "AQiszckBeysWtwZ5YN9pMy1dDTs4jLMHxwui743ubGj2",
        splToken: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
        amount: 1,
        network: "DEVNET",
        successRedirectUrl: "https://demo.plege.xyz/success",
        failRedirectUrl: "https://demo.plege.xyz/",
      })
      .then((data) => {
        window.location.href = data.url;
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative w-screen h-screen bg-[#111] flex flex-col items-center justify-center">
        <button
          className="h-14 w-48 flex items-center justify-center text-lg bg-blue-700 hover:bg-blue-600 rounded shapiro text-white"
          onClick={pay}
        >
          {!loading ? (
            "Pay"
          ) : (
            <svg
              className="animate-spin w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </button>

        <div className="absolute left-0 bottom-10 w-full flex items-center justify-center text-white shapiro">
          <a
            className="h-10 w-48 rounded bg-blue-600 text-sm flex items-center justify-center ml-3"
            href="https://spl-token-faucet.com/?token-name=USDC-Dev"
            target="_blank"
            rel="noreferrer"
          >
            Get test tokens
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;