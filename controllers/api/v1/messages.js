let messages = [];

export const list = (req, res) => {
  const result = {
    status: "success",
    data: {
      messages: messages,
    },
  };

  res.json(result);
};

export const get = (req, res) => {
  res.send(req.params.id);
};

export const create = (req, res) => {
  let message = {
    user: "John Doe",
    text: "Hello, gangstah!",
  };

  messages.push(message);

  const result = {
    status: "success",
    data: {},
  };

  res.json(result);
};
