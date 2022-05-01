const { faker } = require("@faker-js/faker");

const express = require("express");
const res = require("express/lib/response");

const app = express();
const port = 8000;

const createUser = () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const createComapany = () => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  adress: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});
// console.log(createUser());

app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newComp = createComapany();
  res.json(newComp);
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newComp = createComapany();
  const responseObject = { user: newUser, company: newComp };
  res.json(responseObject);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
