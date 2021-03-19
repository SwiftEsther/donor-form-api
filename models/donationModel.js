const db = require("../data/db.js");

const create = (donor) => {
    try {
        return new Promise(async (resolve, reject) => {
            const donorData = {
                firstName: donor.firstName,
                lastName: donor.lastName,
                streetAddress: donor.address,
                city: donor.city,
                country: donor.country,
                postalCode: donor.postalCode,
                phone: donor.phone,
                email: donor.email,
                preferredFormOfContact: donor.preferredFormOfContact,
                preferredFormOfPayment: donor.preferredFormOfPayment,
                frequencyOfDonation: donor.frequency,
                amount: donor.amount,
                comments: donor.comments
            };
            const query = `INSERT INTO donors SET ?`;
            const result = await db.save(query, donorData);
            resolve(donor);
        });
    } catch (error) {
        throw new(error);
    }
}

const getAll = () => {
    let allDonors = [];
    try {
        return new Promise(async (resolve, reject) => {
            const query = `SELECT * FROM donors`;
            const result = await db.findAll(query, (err, data) => {
                if(err) {
                    reject(err);
                }   else{
                    resolve(data);
                }
            });
        });
    } catch (error) {
        throw new(error);
    }
}

module.exports = {getAll, create}
