import express from 'express';
import bcrypt from 'bcrypt';
import {Donation} from '../models/Donation.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/donate', async (req, res) => {
    const {items, name, address, phone} = req.body;
    // const user = await User.findOne({email});
    // if(user){
    //     return res.json({message: "user already exists"});
    // }
 
    const newDonation = new Donation({
        items, 
        name,
        address,
        phone
    })

    await newDonation.save();
    return res.json({message: "record registered"});
})

export {router as DonationRouter};