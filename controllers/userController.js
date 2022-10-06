import { userModel } from "../models/userModel.js";

export const userController = {
    createNewUser: async (req, res) => {
        try {
            const {name, email, password} = req.body;
            const newUser = new userModel({name, email, password});
            await newUser.save();
            res.status(200).json({msj:'successfully'})
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        try {

        } catch (error) {

        }
    },
    logout: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}