import React from "react";

const Moment = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600">
      <section className=" flex h-[300px] w-[600px]  items-center justify-center bg-gradient-to-r from-emerald-700 to-teal-900 rounded-xl border-2">
        <section className=" flex text-white text-2xl">
          <div className="flex space-x-12 items-center ">
            <section className="flex flex-col space-y-4">
              <p>{timerDays}</p>
              <small>{timerDays < 2 ? `Day` : `Days`}</small>
            </section>
            <span>:</span>
            <section className="flex flex-col space-y-4">
              <p>{timerHours < 10 ? `0${timerHours}` : timerHours}</p>
              <small>{timerHours < 2 ? `Hour` : `Hours`}</small>
            </section>
            <span>:</span>
            <section className="flex flex-col space-y-4">
              <p>{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}</p>
              <small>{timerMinutes < 2 ? `Minute` : `Minutes`}</small>
            </section>
            <span>:</span>
            <section className="flex flex-col space-y-4">
              <p>{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

Moment.defaultProps = {
  timerDays: "0",
  timerHours: "0",
  timerMinutes: "0",
  timerSeconds: "0",
};
export default Moment;
