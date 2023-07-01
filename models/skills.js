const skills = [
    {id: 125223, skill: 'Node.js', gained: "yes"},
    {id: 127904, skill: 'Express', gained: "yes"},
    {id: 139608, skill: 'Javascript', gained: "yes"},
    {id: 139609, skill: 'HTML', gained: "yes"},
    {id: 139607, skill: 'CSS', gained: "yes"},
    {id: 139610, skill: 'MongoDB',gained: "yes"},
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    id = parseInt(id);
    //find the index so it knows which skill to delete
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.gained = true;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }