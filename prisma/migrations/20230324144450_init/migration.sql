-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL,
    "firstname" VARCHAR(40) NOT NULL,
    "lastname" VARCHAR(40) NOT NULL,
    "email" VARCHAR NOT NULL,
    "message" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
