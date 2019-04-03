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
router.get('/business', (req, res) =>{
  console.log('here')
 Business.findAll()
 .then(business => {
   res.status(200).json({
     business: business
   })
 })
   .catch(e => console.log(e));
} )

router.get("/user/:id/business/", (req, res) => {
  User.findByPk(req.params.id, {
    include: [{ model: Business, as: "businesses" }]
  })
    .then(user => res.json(user.businesses))
    .catch(e => console.log(e));
});

export default router;
