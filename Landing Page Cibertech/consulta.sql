CREATE TABLE "consulta" (
    "id_peticion" SERIAL PRIMARY KEY,
    "Nombres" VARCHAR,
    "Apellido" VARCHAR,
    "Tipo_De_Documento" VARCHAR,
    "Numero_De_Documento" INTEGER,
    "Celular" INTEGER,
    "Correo" VARCHAR,
    "Servicio" VARCHAR
);