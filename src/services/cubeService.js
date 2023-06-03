const uniqid = require('uniqid') // Generate unique ID's library
const cubes = [];
exports.getAll = () => cubes.slice();
exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };
  cubes.push(newCube);

  return newCube;
};
