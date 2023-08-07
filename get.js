const axios = require("axios");
const { expect } = require("chai");

describe("GET API Request Tests", () => {
    it("should be able get user list", async () => {
        try {
            const authToken = 'MnJ4ekdXRkJON2YxVVZmbXRERks6MDBlbXVtYmE0NA==';
            const headers = {
                Authorization: `Basic ${authToken}`, 
            };

            const res = await axios.get('https://emumba.freshdesk.com/api/v2/agents/', {
                headers: headers, 
            });

            console.log(res.data); 
            expect(res.status).to.equal(200); 

        } catch (error) {
            console.error('Error:', error.message);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    });
});
      