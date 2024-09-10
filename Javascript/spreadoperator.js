//spread operator
const set1 = [10,20,30]
const set2 = [...set1,40,50,60]
console.log(set2)
const engineering =
{
    sem : 5,
    branch : "Cyber Security"
};
const sectionC =
{
    ...engineering,
    noStudents : 73
};
console.log(sectionC)