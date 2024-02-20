require('dotenv').config();

const dropchainAppId = process.env.DROPCHAIN_APP_ID
const dropchainApiKey = process.env.DROPCHAIN_API_KEY
const dropchainAppSessionToken = process.env.DROPCHAIN_APP_SESSION_TOKEN
const dropchainAppUid = process.env.DROPCHAIN_APP_UID

const DropChainSDK = require('dropchain-sdk');
 
const dropchainSdk = new DropChainSDK(dropchainApiKey, dropchainAppId);

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express()

const corsOptions = {
    origin: 'localhost:3000', // the url that is making the request to the backend. You will want to configure this to localhost:3000 for local development, or to your frontend's URL when it's deployed
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],   
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

async function validateTokenMiddleware(req, res, next) { // this validates that the request is coming from someone who is logged into your app successfully (active and valid)
    try {
        const { session1_token, user1_uid } = req.body;
        // console.log({ session1_token, user1_uid })
        const validationResponse = await dropchainSdk.validateSessionToken(session1_token, user1_uid);
        console.log(validationResponse)
        if (validationResponse.session_token_valid) {
            next();
        } else {
            res.status(403).json({ error: 'Invalid session token' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error validating session token' });
    }
}

async function handleFreeNftClaimRoute(req, res) { // this is used to airdrop your token (hardcoded to my asset ID 7289, you will change it to your NFT you've minted). You can mint your token before trying out the flow using the dropchainSdk.assetMintDropnet(createdAssetAmountInt, createdAssetDecimals, createdAssetName, createdAssetUnitName, createdAssetUrl, session1Token, user1Uid) with your test user 1 credentials
    try {
        const { user1_uid } = req.body;
        const result = await dropchainSdk.assetAirdropDropnet(1, 7289, user1_uid, dropchainAppSessionToken, dropchainAppUid);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.'});
    }
}

async function redeemSessionTokenRoute(req, res) { // this is used to sign in a user into your app with the DropChain SSO
    try {
        const { session1_token } = req.body;
        const result = await dropchainSdk.redeemSessionToken(session1_token);
        console.log(result)
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred.'});
    }
}


// define your POST routes. This should be a route that allows an end user to claim a free NFT
// app.post('/grabUserPoapAssets', validateTokenMiddleware, grabUserPoapAssets);
// app.post('/grabUserPoapAssetsFull', validateTokenMiddleware, grabUserPoapAssetsFull);
app.post('/handleFreeNftClaim', validateTokenMiddleware, handleFreeNftClaimRoute);
app.post('/redeemSessionToken', redeemSessionTokenRoute);

const PORT = process.env.PORT || 5001; // defining the port for the server to run on
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});