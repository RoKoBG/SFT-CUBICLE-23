const uniqid = require("uniqid"); // Generate unique ID's library

const cubes = [
  {
    id: "2J3ckK0M0d056djlOp",
    name: "TEST CUBE",
    description: "A test cube to represent it :D",
    imageUrl:
      "https://cdn.myminifactory.com/assets/object-assets/5e8d86ea0ffa0/images/720X720-apd-test-cube-2020-apr-07-04.jpg",
    difficultyLevel: 4,
  },

  {
    id: "1gYckKhJ3d7g6djlOp",
    name: "TEST CUBE 2",
    description: "A test cube to represent it :D",
    imageUrl:
      "https://cdn.myminifactory.com/assets/object-assets/5e8d86ea0ffa0/images/720X720-apd-test-cube-2020-apr-07-04.jpg",
    difficultyLevel: 3,
  },
];

exports.getAll = () => cubes.slice();
exports.getOne = (cubeId) => cubes.find((x) => x.id == cubeId);
exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };
  

  cubes.push(newCube);

  return newCube;
};
