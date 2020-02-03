const User = require('../models/User');

exports.gpage = async (req, res) => {
  const user = await User.findOne({ id: req.user.id });
  res.render('aboutC', {
    title: 'About Company',
    admin: user.username,
    src: './../images/smiley.jpg'
  });
};
