-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL,
    "firstname" VARCHAR(45) NOT NULL,
    "lastname" VARCHAR(45) NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "message" VARCHAR(500) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
