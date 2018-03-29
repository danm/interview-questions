// question 3

// what is the value of example.data.name

const transformName = ({ name }) => {
  name = 'jeremy';
};

const example = {
  key: 'interview',
  data: {
    name: 'daniel',
    time: new Date(),
  },
};

transformName(example.data);

console.log(example.data.name);
