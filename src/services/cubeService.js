const Cube = require("../models/Cube");

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();

  //TODO: use mongoose to filter in DB !

  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }

  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }

  return result;
};
// Without accessories
exports.getOne = (cubeId) => Cube.findById(cubeId);
// With accessories
exports.getOneWithAccessories = (cubeId) =>
  this.getOne(cubeId).populate("accessories");

exports.create = (cubeData) => {
  const cube = new Cube(cubeData);

  return cube.save();
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  // return Cube.findByIdAndUpdate(cubeId, {
  //   $push: { accessories: accessoryId },  ---------------> One way to attach
  // });
  // Other way with two queries. This method is easier but other is better with only One Query :P
  const cube = await Cube.findById(cubeId);
  cube.accessories.push(accessoryId);

  return cube.save();
};
