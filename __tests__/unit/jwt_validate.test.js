const auth = require("../../src/middlewares/auth.middleware");

const {authenticate} = require("../../src/controllers/auth.controller");

describe("Validando la autenticación de usuarios", () => {
  beforeAll(() => {
    //1. Crear un objeto de usuario con datos falsos y elegir una contraseña fija
    //2. Insertar el usuario en la base de datos
    //3. Iniciar sesión con el servicio login
    //4. Guardar el token
  });

  afterAll(() => {
    //5. Eliminar el usuario de la DB creado en el hook beforeAll
  });

  it("Probando el controlador authenticate", async() => {

  }); 

  it("Debería de obtener un token pasando como argumento un objeto de usuario", () => {
    //6. Crear la prueba para comprobar si el token se ha creado correctamente
  });

  it("Debería de obtener un token pasando como argumento un objeto de usuario", () => {
    //6. Crear la prueba para comprobar si el token se ha creado correctamente
  });

  it("Debería de llamar a la funcion next sin argumentos con un token valido", () => {
    //7. Crear la prueba para comprobar si el token es valido

  });

  it("Debería de llamar a la funcion next con argumentos cuando es un token invalido", () => {
    //8. Crear la prueba para comprobar si el token es invalido

    //Token valido -> tiene un formato incorrecto o ya ha expirado

  });
});