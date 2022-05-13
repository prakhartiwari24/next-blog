function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (
      !name ||
      !email ||
      !message ||
      name.trim() === '' ||
      email.trim() === '' ||
      message.trim() === '' ||
      !email.includes('@')
    ) {
      res.status(404).json({ message: 'Invalid input' });
    }
    const newMessage = {
      email,
      message,
      name,
    };
    console.log(newMessage);
    res.status(201).json({
      message: 'Success',
      newMessage,
    });
  }
}

export default handler;
