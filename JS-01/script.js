var heightPhuc = 163;
var heightPhu = 175;

var agePhuc = 23;
var agePhu = 18;
 
var scorePhuc = heightPhuc + 5*agePhuc;
var scorePhu = heightPhu + 5*agePhu;

if (scorePhuc > scorePhu)
{
    console.log('Phuc wins the games with ' + scorePhuc+'points!');
}
else if (scorePhu > scorePhuc)
{
    console.log('Phu wins the games with ' + scorePhu+'points!');
}
else if (scorePhu == scorePhuc)
{
    console.log('There is a draw');
}