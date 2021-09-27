# Ejercicio Validar token y pruebas

1. Completar las pruebas unitarias del archivo **jwt_validate.test.js** y ****refactorizar el código para cumplir los requisitos de las pruebas**.**

    **`BeforeAll`**

    - [ ]  Crear un objeto de usuario usando faker y usando una contraseña predefinida.
    - [ ]  Insertar un usuario con el objeto de usuario creado con faker.
    - [ ]  Iniciar sesión con los datos del usuario recién creado.
    - [ ]  Guardar el token obtenido del servicio login.

    **`afterAll`**

    - [ ]  Eliminar el usuario creado en el hook `beforeAll` de la DB

    `it`

    - [ ]  Probar el servicio genToken → debería de regresar un token si el objeto de usuario es valido.
    - [ ]  Probar el servicio login → debería de regresar un token si la autenticación es correcta (credenciales validas).
    - [ ]  Probar el servicio login → debería de regresar un error si la autenticación es incorrecta (credenciales invalidas).

    `**Reto**`

    - [ ]  Probar el middleware de verificación → debería de regresar true al validar que el token sea valido y colocar los datos decodificados en `req.user` .
    - [ ]  Probar el middleware de verificación → debería arrojar un error cuando el token sea invalido.