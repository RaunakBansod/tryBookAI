import React from "react";

function Pricing() {
  return (
    <>
      <div className="">
        <div className="flex flex-col lg:flex-row dark:bg-slate-50 dark:text-white">
          <div className="dark:bg-slate-950 dark:text-white text-slate-50 lg:px-40 px-5">
            <div className="bg-purple-950 rounded-lg overflow-x-auto pt-10 pb-10 lg:px-10 px-5 mx-5 lg:mx-10">
              <div>
                <div className="text-xl lg:text-2xl font-bold text-purple-300">
                  <p>API Pricing</p>
                </div>
                <p className="text-sm lg:text-base">
                  Our API pricing is based on the model used and the number of
                  tokens processed. Here's a breakdown of the costs:
                </p>
              </div>
              <br />
              <div className="">
                <div className="flex flex-col md:flex-row items-center md:justify-between border bg-purple-500 text-slate-50 rounded-t-lg p-2">
                  <p>API</p>
                  <p className="md:px-10">MODEL</p>
                  <p>PRICE PER 1K TOKEN</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center border p-2 pt-5">
                  <p>OpenAI</p>
                  <p>GPT-3.5</p>
                  <p>$0.002</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center border p-2 pt-5">
                  <p>Together AI</p>
                  <p>Llama-2-70b</p>
                  <p>$0.0008</p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center border rounded-b-lg p-2 pt-5">
                  <p>Together AI</p>
                  <p>Llama-2-13b</p>
                  <p>$0.0006</p>
                </div>
              </div>
              <div>
                <br />
                <div className="text-xl lg:text-2xl font-bold text-purple-300">
                  <p>Token Estimation</p>
                </div>
                <p className="pb-5 text-sm lg:text-base">
                  On average, 1 token is approximately 4 characters or 0.75
                  words. For precise pricing, we recommend using our token
                  calculator tool.
                </p>
                <div className="text-xl lg:text-2xl font-bold text-purple-300">
                  <p>Billing</p>
                </div>
                <p className="text-sm lg:text-base">
                  You will only be charged for the tokens used in generating the
                  book. The API tracks token usage and bills accordingly.
                  Detailed usage reports are available in your account
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
