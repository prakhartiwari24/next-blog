import classes from './contact-form.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Notification from '../../ui/notification';

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null), setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      const response = await axios({
        method: 'POST',
        url: '/api/contact',
        data: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus('Error');
    }
    // const data = await response.json();

    // if (!response.ok) {
    //   throw new Error(data.message || 'Something went wrong');
    // }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message',
      message: 'Please wait....',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'Success',
      title: 'Success',
      message: 'Message sent successfully',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'Error',
      title: 'error',
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Please enter your name"
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            placeholder="Please enter your message"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
