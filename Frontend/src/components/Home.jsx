import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
      <>
        <div className="dark:bg-slate-950 dark:text-white py-5 text-center font-bold text-4xl">
          <h1>
            Explore the Possibilities of{" "}
            <div className="text-purple-900"> AI Book Writing</div> with BookAI
          </h1>
        </div>
      </>
    );
}

export default Home
