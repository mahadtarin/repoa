const axios = require("axios");
const { expect } = require("chai");

describe("Post API Request Tests", () => {
    it("should be able get user list", async () => {
        try {
            const authToken = 'MnJ4ekdXRkJON2YxVVZmbXRERks6MDBlbXVtYmE0NA==';
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };

      const newUser = {
        "available": false,
        "occasional": true,
        "id": 151038392744,
        "ticket_scope": 11,
      };

      const res = await axios.post(
        "https://emumba.freshdesk.com/api/v2/agents/",
        newUser,
        {
          headers: headers,
        }
      );
            console.log(res.data); 
            expect(res.status).to.equal(201); 

        } catch (error) {
            console.error('Error:', error.message);
            if (error.res) {
                console.error('Response status:', error.res.status);
                console.error('Response data:', error.res.data);
            }
        }
    });
});
      