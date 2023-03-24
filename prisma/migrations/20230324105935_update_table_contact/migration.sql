/*
  Warnings:

  - You are about to alter the column `firstname` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(40)`.
  - You are about to alter the column `lastname` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(40)`.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "firstname" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "lastname" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "email" SET DATA TYPE VARCHAR;

-- DropTable
DROP TABLE "User";
