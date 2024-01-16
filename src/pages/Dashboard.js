import { useState, useCallback } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Modal } from "react-bootstrap";
import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
import "./Dashboard.css";

const Dashboard = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [showChat, setShowChat] = useState(false);

  const apiKey = 'VF.DM.65988264e77ab20007510f6f.u9SyOSnUtW3GfAUg'; // Replace with your Voiceflow API key
  const userID = 'user_123'; // Unique ID for the user

  const sendToVoiceflow = async () => {
  const body = {
    action: {
      type: 'text',
      payload: userInput,
    },
  };

  try {
    console.log('Sending request to Voiceflow');
    const response = await axios({
      method: 'POST',
      baseURL: 'https://general-runtime.voiceflow.com',
      url: `/state/user/${userID}/interact`,
      headers: {
        Authorization: apiKey,
      },
      data: body,
  
    });

    //const axios = require('axios');


  // const options = {
  //   method: 'GET',
  //   url: 'https://api.voiceflow.com/v2/versions/65986cea5cb4d9c47331f2ea/export',
  //   headers: {accept: 'application/json'}
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });


    console.log('Received response from Voiceflow:', response.data);

    // Extract type and payload from the response
    const { type, payload } = response.data;

    // Update state with the extracted payload
    setChatResponse(payload);

    // Clear the input field
    setUserInput('');
  } catch (error) {
    console.error('Error sending request:', error);
  }
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-child" />
        <div className="dashboard-item" />
        <b className="henry-nguyen">Henry Nguyen</b>
        <div className="nav-bar">
          <img
            className="material-symbolsdashboard-rou-icon"
            alt=""
            src="/materialsymbolsdashboardrounded@2x.png"
          />
          <b className="dashboard1">Dashboard</b>
          <b className="task-lists">Task lists</b>
          <img className="felist-task-icon" alt="" src="/felisttask@2x.png" />
          <b className="inbox">Inbox</b>
          <b className="settings">Settings</b>
          <img
            className="icround-email-icon"
            alt=""
            src="/icroundemail@2x.png"
          />
          <img className="nav-bar-child" alt="" src="/line-1@2x.png" />
          <img
            className="solarsettings-bold-icon"
            alt=""
            src="/solarsettingsbold@2x.png"
          />
        </div>
        <img
          className="ionnotifcations-icon"
          alt=""
          src="/ionnotifcations@2x.png"
        />
        <img
          className="icround-search-icon"
          alt=""
          src="/icroundsearch@2x.png"
        />
        <div className="hello-henry">Hello, Henry!</div>
        <img
          className="ionchatbubble-outline-icon"
          alt=""
          src="/ionchatbubbleoutline@2x.png"
        />
        <img
          className="iconlybold2-user"
          alt=""
          src="/iconlybold2user@2x.png"
        />

        <button onClick={() => setShowChat(!showChat)}>
          <img className="iconlybold2-user" alt="" src="/iconlybold2user@2x.png" />
        </button>

        {/* Chat Interface */}
        {showChat && (
          <Modal show={showChat} onHide={() => setShowChat(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Chat with FiFa, your AI assistant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="userInput">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  value={userInput} 
                  onChange={(e) => setUserInput(e.target.value)} 
                  placeholder="Type your message here..."
                />
              </Form.Group>
              <Button variant="primary" onClick={sendToVoiceflow}>
                Send
              </Button>

              {/* Display the chatbot's response */}
              {chatResponse && (
                <div>
                  <h3>Fi's Response:</h3>
                  <p>{chatResponse}</p>
                </div>
              )}
            </Modal.Body>
          </Modal>
        )}

        <b className="hi-im-fi-container">
          <p className="hi-im-fi">{`Hi I’m Fi, `}</p>
          <p className="hi-im-fi">your AI assistant.</p>
          <p className="hi-im-fi">Ask me anything!</p>
        </b>
        <div className="dashboard-inner" />
        <div className="image-1-wrapper">
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        </div>
        <div className="view-all-tasks-wrapper">
          <b className="view-all-tasks">View all tasks</b>
        </div>
        <div className="view-full-inbox-wrapper">
          <b className="view-all-tasks">View full inbox</b>
        </div>
        <div className="to-do">
          <div className="to-do1">TO DO</div>
          <div className="task-2" onClick={openFrame}>
            <div className="task-2-child" />
            <Form.Group className="task-summary-lorem-container">
              <Form.Label>
              Task summary: Incorporate feedback, finalize Feature 2 design, prepare documentation for hand-off to engineering
              </Form.Label>
              <Form.Control as="textarea" defaultValue="" />
            </Form.Group>
            <div className="div">Due: 01/09/24</div>
            <div className="schedule-11-with">
              Schedule 1:1 with Intern Nina
            </div>
            <div className="task-2-item" />
            <div className="task-2-inner" />
            <img className="check-icon" alt="" src="/check@2x.png" />
            <div className="team">Team</div>
            <div className="image-3-wrapper">
              <img className="image-3-icon" alt="" src="/image-3@2x.png" />
            </div>
            <div className="rectangle-div" />
            <div className="high">High</div>
          </div>
          <div className="task-3">
            <div className="task-2-child" />
            <Form.Group className="task-summary-lorem-container1">
              <Form.Label>
              Task summary: Meet with Intern Nina to discuss intern projects and do a walkthrough of design systems and templates 
              </Form.Label>
              <Form.Control as="textarea" defaultValue="" />
            </Form.Group>
            <div className="div">Due: 01/09/24</div>
            <div className="schedule-11-with">
              Schedule coffee chat with Alex P.
            </div>
            <div className="task-3-item" />
            <div className="task-2-inner" />
            <div className="networking">Networking</div>
            <div className="image-5-wrapper">
              <img className="image-5-icon" alt="" src="/image-5@2x.png" />
            </div>
            <div className="task-3-child1" />
            <div className="high">Low</div>
            <img className="check-icon" alt="" src="/check@2x.png" />
          </div>
          <img className="uiwreload-icon" alt="" src="/uiwreload@2x.png" />
          <div className="update-task">Update task</div>
          <b className="b">3</b>
          <div className="task-1">
            <div className="task-11">
              <div className="task-2-child" />
              <Form.Group className="task-summary-lorem-container2">
                <Form.Label>
                Task summary: Alex P. wants to schedule a coffee chat to talk about UX design journey and experience at the company.                </Form.Label>
                <Form.Control as="textarea" defaultValue="" />
              </Form.Group>
              <div className="div">Due: 01/08/24</div>
              <div className="finalize-feature-2">{`Finalize Feature 2 Design & Hand-off`}</div>
              <div className="task-1-item" />
              <div className="task-1-inner" />
              <div className="task-1-child1" />
              <div className="q1-projects">Q1 Projects</div>
              <div className="high1">High</div>
              <div className="image-4-wrapper">
                <img className="image-4-icon" alt="" src="/image-4@2x.png" />
              </div>
            </div>
            <img className="check-icon" alt="" src="/check@2x.png" />
          </div>
        </div>
        <div className="inbox-overview">
          <div className="inbox-overview-child" />
          <div className="inbox-overview1">INBOX OVERVIEW</div>
          <div className="inbox-overview-item" />
          <div className="on-going-threads">
            <p className="hi-im-fi">On-going</p>
            <p className="hi-im-fi">threads</p>
          </div>
          <div className="div3">8</div>
          <div className="inbox-overview-inner" />
          <div className="unread-emails">
            <p className="hi-im-fi">Unread</p>
            <p className="hi-im-fi">emails</p>
          </div>
          <div className="div4">5</div>
          <div className="inbox-overview-child1" />
          <div className="not-yet-replied-container">
            <p className="hi-im-fi">Not yet</p>
            <p className="hi-im-fi">replied</p>
          </div>
          <div className="div5">15</div>
          <div className="inbox-overview-child2" />
          <div className="quang-email">
            <div className="quang-email-child" />
            <div className="image-8-wrapper">
              <img className="image-8-icon" alt="" src="/image-8@2x.png" />
            </div>
            <b className="quang-pham">Quang Pham</b>
            <img className="vector-icon" alt="" src="/vector@2x.png" />
            <div className="re-ux-design">{`Re: UX Design Org Change `}</div>
          </div>
          <div className="linh-email">
            <img className="vector-icon1" alt="" src="/vector@2x.png" />
            <div className="image-7-wrapper">
              <img className="image-7-icon" alt="" src="/image-7@2x.png" />
            </div>
            <b className="linh-duong">Linh Duong</b>
            <div className="re-time-off-request">{`Re: Time-off Request  `}</div>
          </div>
          <div className="lucas-email">
            <div className="quang-email-child" />
            <div className="image-8-wrapper">
              <img className="image-6-icon" alt="" src="/image-6@2x.png" />
            </div>
            <b className="lucas-smith">Lucas Smith</b>
            <div className="re-feature-1">{`Re: Feature 1 Research Readout   `}</div>
            <img className="vector-icon2" alt="" src="/vector@2x.png" />
          </div>
        </div>
        <div className="calendar">
          <div className="day-of-the-week-parent">
            <div className="day-of-the-week">
              <div className="mon-wrapper">
                <b className="view-all-tasks">MON</b>
              </div>
              <div className="mon-wrapper">
                <b className="view-all-tasks">TUE</b>
              </div>
              <div className="mon-wrapper">
                <b className="view-all-tasks">WED</b>
              </div>
              <div className="mon-wrapper">
                <b className="view-all-tasks">THU</b>
              </div>
              <div className="mon-wrapper">
                <b className="view-all-tasks">FRI</b>
              </div>
              <div className="mon-wrapper">
                <b className="view-all-tasks">SAT</b>
              </div>
              <div className="mon-wrapper">
                <b className="view-all-tasks">SUN</b>
              </div>
            </div>
            <div className="day-of-the-week">
              <div className="wrapper">
                <div className="view-all-tasks">1</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">2</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">3</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">4</div>
              </div>
              <div className="wrapper1">
                <div className="view-all-tasks">5</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">6</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">7</div>
              </div>
            </div>
            <div className="day-of-the-week">
              <div className="wrapper">
                <b className="view-all-tasks">8</b>
              </div>
              <div className="wrapper">
                <b className="view-all-tasks">9</b>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">10</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">11</div>
              </div>
              <div className="wrapper">
                <b className="view-all-tasks">12</b>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">13</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">14</div>
              </div>
            </div>
            <div className="day-of-the-week">
              <div className="wrapper">
                <div className="view-all-tasks">15</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">16</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">17</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">18</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">19</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">20</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">21</div>
              </div>
            </div>
            <div className="day-of-the-week">
              <div className="wrapper">
                <div className="view-all-tasks">22</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">23</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">24</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">25</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">26</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">27</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">28</div>
              </div>
            </div>
            <div className="day-of-the-week">
              <div className="wrapper">
                <div className="view-all-tasks">28</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">30</div>
              </div>
              <div className="wrapper">
                <div className="view-all-tasks">31</div>
              </div>
              <div className="week-5-child" />
              <div className="week-5-child" />
              <div className="week-5-child" />
              <div className="week-5-child" />
            </div>
          </div>
          <div className="january-05-2024">JANUARY 05, 2024</div>
          <img
            className="navigate-next-icon"
            alt=""
            src="/navigate-next@2x.png"
          />
          <img
            className="navigate-next-icon1"
            alt=""
            src="/navigate-next@2x.png"
          />
          <div className="calendar-child" />
          <div className="calendar-item" />
          <div className="calendar-inner" />
        </div>
        <img
          className="friday-app-logo-1"
          alt=""
          src="/friday-app-logo-1@2x.png"
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;
