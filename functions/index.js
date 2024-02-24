/* eslint-disable semi */
// eslint-disable-next-line no-unused-vars
const functions=require("firebase-functions");

// eslint-disable-next-line no-unused-vars
const express=require("express");

// eslint-disable-next-line no-unused-vars
const cors=require("cors");

// eslint-disable-next-line no-unused-vars, max-len
const stripe=require("stripe")("sk_test_51O8gAdSIAar7v4312nHancGoQbgEn36KfOX7Va19cjcJAzo2csStovQPPZqzU74i6kw1PbML0zoBvKtbdVdFlWeL005o8Ld959");

const app=express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response)=>response.status(200).send("hello world"));

app.post("/payments/create", async (request, response)=>{
  const total=request.query.total;

  console.log("Payment request received >>>", total);

  const paymentIntent =await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});

express.api=functions.https.onRequest(app);

