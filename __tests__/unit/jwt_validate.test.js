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

  it("Debería de obtener un token pasando como argumento un objeto de usuario", () => {
    //6. Crear la prueba para comprobar si el token se ha creado correctamente
  });

  it("Debería de obtener un token pasando como argumento un objeto de usuario", () => {
    //6. Crear la prueba para comprobar si el token se ha creado correctamente
  });

  it("Debería de obtener true al comprobar que un token es valido", () => {
    //7. Crear la prueba para comprobar si el token es valido

    //Token valido -> tiene el formato correcto y no ha expirado
  });

  it("Debería de obtener false al comprobar que un token es invalido", () => {
    //8. Crear la prueba para comprobar si el token es invalido

    //Token valido -> tiene un formato incorrecto o ya ha expirado
  });
});