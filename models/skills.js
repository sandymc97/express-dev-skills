const skills = [
    {id: 125223, skill: 'Node.js', gained: true},
    {id: 127904, skill: 'Express', gained: true},
    {id: 139608, skill: 'Javascript', gained: true}
  ];

  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }