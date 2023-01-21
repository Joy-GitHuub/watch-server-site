const User = require('../Schema/User.Schema');

exports.signUpUserService = async (userInfo) => {
    const data = userInfo;
    const email = userInfo.email;
    const user = await User.updateOne({ email: email }, { $set: data }, { upsert: true });

    const updateSignUp = await User.updateOne({ email: email }, { $inc: { signInCount: +1 } }, { upsert: true })
    return user;
};


exports.getSingleUserService = async (email) => {
    const user = await User.findOne({ email: email })
        .populate('addToCollection.id')
        .populate('imagePost')
    return user;
};


exports.addToCollectionService = async (photoDetails) => {
    const { userEmail, id } = await photoDetails;
    const findFirstAddToCollectionID = await User.updateOne(
        { email: userEmail, "addToCollection.id": id },
        { $pull: { addToCollection: { id: id } } },
        { upsert: false }, // Upsert // Multi
    );
    const result = await User.updateOne({ email: userEmail }, { $push: { addToCollection: { id } } })
    return result;
};