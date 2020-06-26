const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch((err) => res.status(400).json("error getting user"));
};

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;
  db("users")
    .where({ id })
    .update({ name })
    .then((response) => {
      if (response) {
        response.json("Success");
      } else {
        response.status(400).json("Unable to Update");
      }
    })
    .catch((err) => res.status(400).json("error updating User"));
};

module.exports = {
  handleProfileGet,
  handleProfileUpdate,
};
