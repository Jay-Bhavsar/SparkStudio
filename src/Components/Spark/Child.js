import React from "react";
import JsonData from "./sparkdata.json";
function Child() {
  const DisplayData = JsonData[("0", "1")].map((info) => {
    return (
      <>
        <center>
          {info.max_age < 10 ? (
            <div className="childs">
              <div className="card1">
                <div className="upper">
                  <p>
                    <span> {info.num_classes} Sessions</span>
                    <span className="off">20% off</span>{" "}
                  </p>
                  <h2>{info.name}</h2>
                  <p>{info.rating[2]} reviews</p>
                </div>
                <br />

                <p>{info.pitch}</p>
                <br />
                <h4>Students will achieve:</h4>
                <br />

                <ul>
                  <li>{info.curriculum_outcomes[0]}</li>
                  <li>{info.curriculum_outcomes[1]}</li>
                  <li>{info.curriculum_outcomes[2]}</li>
                  <li>{info.curriculum_outcomes[3]}</li>
                </ul>

                <br />
                <div className="plan">
                  <p>
                    <u>View Detailed Lesson Plan</u>{" "}
                  </p>
                </div>
                <br />
                <div>
                  <h2> &#8377; {info.discounted_price}</h2>
                  <h3>
                    {" "}
                    <s> &#8377; {info.original_price}</s>
                  </h3>
                  <h3>&#8377;200/class</h3>
                </div>
                <br />
                <div className="schedule">
                  <p>We'll schedule the slots as per your convenience</p>
                </div>

                <div className="activities">
                  <p>8 activities</p>
                  <p>3 games</p>
                  <p>1 certificate</p>
                </div>

                <div className="buy">
                  <button>BuyNow</button>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </center>
      </>
    );
  });

  return (
    <>
      <div>{DisplayData}</div>
    </>
  );
}

export default Child;
