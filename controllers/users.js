import { v4 as uuidv4 } from "uuid";
// Define empty array of users
let users = [];

export const createUser = (req, res) => {
  // Get the user information
  const user = req.body;

  // Get user information and set id
  const userWithId = { ...user, id: uuidv4() };
  // Save user in array
  users.push(userWithId);

  res.send(`User with name: ${user.firstName} has been deleted successfully!`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  // Get the user ID
  const { id } = req.params;

  // Find the user by the id
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  // Get the user ID
  const { id } = req.params;
  // Remove user with array filter method(Iterate over each user and display excluding the found ID)
  res.send(`User with id: ${id} has been deleted successfully!`);
  users = users.filter((user) => user.id !== id);
};

export const updateUser = (req, res) => {
  // Get the user ID
  const { id } = req.params;

  // Get the user information from request
  const { firstName, lastName, age } = req.body;

  // Find the user by ID
  const user = users.find((user) => user.id === id);

  // Update the user information
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with id: ${id} has been updated successfully!`);
};
