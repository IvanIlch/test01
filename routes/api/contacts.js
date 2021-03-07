const express = require("express");
const path = require("path");
const fs = require("fs");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../model/index");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {},
  });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {},
  });
});

router.post("/", async (req, res, next) => {
  res.status(201).json({
    status: "success",
    code: 201,
    data: {},
  });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: { message: "contact deleted" },
  });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: { message: "contact updated" },
  });
});

module.exports = router;
