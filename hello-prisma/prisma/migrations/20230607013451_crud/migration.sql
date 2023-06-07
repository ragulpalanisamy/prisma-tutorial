/*
  Warnings:

  - You are about to drop the `perference` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userPerferenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPerferenceId" TEXT;

-- DropTable
DROP TABLE "perference";

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" TEXT NOT NULL,
    "emailUpadates" BOOLEAN NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userPerferenceId_key" ON "User"("userPerferenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPerferenceId_fkey" FOREIGN KEY ("userPerferenceId") REFERENCES "UserPreference"("id") ON DELETE SET NULL ON UPDATE CASCADE;
