// question 2

// what is the value of example.data.name

const transformName = ({ data }) => {
  data.name = 'jeremy';
};

const example = {
  key: 'interview',
  data: {
    name: 'daniel',
    time: new Date(),
  },
};

transformName(example);

console.log(example.data.name);