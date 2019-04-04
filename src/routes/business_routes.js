import express from "express";
// import passport from "passport";
// import jwt from "jsonwebtoken";

// pull in error types and the logic to handle them and set status codes
import { BadParamsError } from "../lib/custom_errors";

import models from "./../db/models";

// const tokenAuth = passport.authenticate("jwt", { session: false });
// const localAuth = passport.authenticate("local", { session: false });
const Business = models.Business;
const User = models.User;

// instantiate a router (mini app that only handles routes)
const router = express.Router();

router.get("/user/:id/business/", (req, res) => {
  User.findByPk(req.params.id, {
    include: [{ model: Business, as: "businesses" }]
  })
    .then(user => res.json(user.businesses))
    .catch(e => console.log(e));
});

router.delete("/My_businesses/delete/:id", (req, res) => {
  let busId = req.params.id;
  Business.findByPk(busId).then(business => business.destroy());
});

router.patch("/My_businesses/edit/:id", (req, res) => {
  let busId = req.params.id;
  let chnges = req.body;
  console.log("chabes kkkkkkkk", chnges);

  Business.findByPk(busId).then(business => business.update(chnges));
});
export default router;
