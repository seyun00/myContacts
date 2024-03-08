const asyncHandler = require("express-async-handler") 
const Contact = require("../models/contactModel");
// const { request } = require("express");

// @desc Get all contacts
// @route Get /contacts
const getAllContacts = asyncHandler (async (req, res) => {
  const contacts = await Contact.find();
  // res.status(200).render("getAll",{heading:"User List",contacts:contacts}); // 경로 지정 안해줘도 views 안에서 찾음
  res.render("index",{contacts:contacts})
})

// @desc view add contact form
// @route Get /contacts/add
const addContactForm = (req,res) => {
  res.render("add");
}

// @desc Create a contacts
// @route POST /contacts
const createContact = asyncHandler (async (req, res) => {
  const {name,email,phone} = req.body;
  if(!name || !email || !phone) {
    return res.status(400).send("필수값이 입력안됨")
  }
  const contact = await Contact.create({name,email,phone})
  // res.status(201).send("Create Contacts");
  res.redirect("/contacts");
});

// @desc get contacts
// @route Get /contacts/:id
const getContact = asyncHandler(async(req, res) => {
  // 연락처 상세보기
  const contact = await Contact.findById(req.params.id)
  // res.status(200).send(contact)
  res.render("update",{contact:contact})
})

// @desc put contacts
// @route PUT /contacts/:id
const updateContact = asyncHandler (async (req, res) => {
  // 연락처 수정하기
  const id = req.params.id;
  const {name,email,phone} = req.body;
  const contact = await Contact.findById(id);
  if(!contact){
    res.status(404);
    throw new Error("연락처가 없습니다.")
  }
  contact.name = name
  contact.email = email
  contact.phone = phone
  contact.save()
  
  // res.status(200).send(`update: ${req.params.id}`)
  res.redirect("/contacts")
})

// @desc delete contacts
// @route DELETE /contacts/:id
const deleteContact = asyncHandler( async(req, res) => {
  //연락처 삭제하기
  const id = req.params.id;
  const contact = await Contact.findByIdAndDelete(id)
  // res.status(200).send(`Delete: ${req.params.id}`)
  res.redirect("/contacts")
})


module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact, addContactForm}
