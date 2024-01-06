import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Inbox" to the project
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="schedule-11-with-intern-nina-parent">
      <div className="schedule-11-with1">Schedule 1:1 with Intern Nina</div>
      <div className="to-do2">To do</div>
      <div className="in-the-email">
        In the email ‘Re: Intern 1:1, Workday goals, team dinner,’ Maria L.
        listed several tasks that Henry needed to do in the upcoming weeks.
        Henry should schedule a 1:1 meeting with Intern Nina between 1/10 and
        1/15, enter Workday goals before 1/12, and fill out a when2meet form for
        a team dinner before 1/12.
      </div>
      <b className="email-summary">Email summary</b>
      <div className="maria-l-asked">
        Maria L. asked to schedule a 1:1 meeting with the new team intern Nina
        to discuss intern projects and do a walkthrough of UX design system and
        templates. Meeting should be a 1-hour session between 1/10 and 1/15.
      </div>
      <b className="context">Context</b>
      <b className="task-breakdown">Task breakdown</b>
      <div
        className="view-detailed-email-wrapper"
        onClick={onFrameContainer1Click}
      >
        <b className="view-detailed-email">View detailed email</b>
      </div>
      <div className="team-wrapper">
        <div className="view-detailed-email">Team</div>
      </div>
      <div className="from">From</div>
      <div className="deadline">Deadline</div>
      <div className="frame-child" />
      <div className="email-or-message">{`Email or message Nina for availability between 1/10 and 1/15 `}</div>
      <div className="frame-item" />
      <div className="send-a-calendar">Send a calendar invite</div>
      <div className="frame-inner" />
      <div className="review-intern-projects">{`Review intern projects and UX design system and templates to prepare for the 1:1 meeting `}</div>
      <div className="priority">Priority</div>
      <div className="maria-l-marialcompanycom">{`Maria L. <marial@company.com>`}</div>
      <div className="wrapper28">
        <div className="view-detailed-email">01/09/24</div>
      </div>
      <div className="high-wrapper">
        <div className="view-detailed-email">High</div>
      </div>
      <img
        className="vector-icon3"
        alt=""
        src="/vector@2x.png"
        onClick={onVectorIconClick}
      />
      <div className="back" onClick={onBackTextClick}>
        Back
      </div>
    </div>
  );
};

export default Frame;
