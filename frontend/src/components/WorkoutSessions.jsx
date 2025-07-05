import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Explore our curated sessions to build strength, improve stamina, and enhance flexibility through focused and fun workouts.
        </p>
        <img
          src="/img5.jpg"
          alt="workout"
          style={{ width: "100%", height: "650px", objectFit: "cover", borderRadius: "10px" }}
        />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          These bootcamps are tailored to push your limits and deliver results, whether you're a beginner or a fitness pro.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Burn</h4>
            <p>
              High-Intensity Interval Training that maximizes fat burn in short bursts while improving heart health.
            </p>
          </div>
          <div>
            <h4>Strength & Power</h4>
            <p>
              Focused weight and resistance training to help build lean muscle and boost metabolic rate.
            </p>
          </div>
          <div>
            <h4>Cardio Core</h4>
            <p>
              Fast-paced sessions combining cardio drills and core-focused exercises to tone and sweat.
            </p>
          </div>
          <div>
            <h4>Mobility Mastery</h4>
            <p>
              A bootcamp designed to increase flexibility and joint mobility while preventing injuries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
