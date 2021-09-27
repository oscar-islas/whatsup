const request = require('supertest');
const faker = require('faker');

const app = require("../../src/app");
const userService = require("../../src/services/users.services");
const getDataValues = require("../../src/utils/sequelize");

const BASE_URL = `/api/v1`;
const RESOURCE = "/users";

//Debería de obtener un status 200 y un arreglo
describe("Pruebas sobre rutas de usuarios", () => {

  let userCreated = {};
  beforeAll(async() => {
    let newUser = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
      phone: faker.phone.phoneNumber('+52(###)#######')
    }

    userCreated = await userService.create(newUser);

    userCreated = getDataValues(userCreated);
  });

  it("Debería de obtener un status 200 y un arreglo -> GET /users ", async() => {

    const response = await request(app).get(`${BASE_URL}${RESOURCE}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
    expect(response.body).toContainEqual(expect.objectContaining({...userCreated}));
  });
});

//1. BeforeAll -> Crear un usuario

//2. AfterAll -> Borrar todos los usuarios

//3. Debería de obtener un objeto de usuario

//4. Debería de obtener un status 201 y un objeto de usuario

//5. Debería de obtener un status 200 al actualizar un usuario

//6. Debería de obtener un status 204 al borrar un usuario

//Probar insertar un usuario con el mismo email
//7. Debería de obtener un status 400 al insertar un usuario con el mismo email 

//Probar insertar un usuario sin un nombre
//8. Debería de obtener un status 400 al insertar un usuario con campos vacios

//9. Debería de obtener un status 400 al tratar de actualizar un usuario que no existe

//10. Debería de obtener todas las conversaciones de un usuario por su ID