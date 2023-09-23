const express = require('express')

const app= express();

const port = 3000;

app.use(express.json());

app.get('/trains',async (req,res)=>{
    try { 
        const trainData =[
            {
                trainNumber: 12267,

                trainName: "MUMBAI CENTRAL AHMEDABAD AC Duronto Exp",

                trainType: "Duranto",

                runDays: "M.T,W,T,F,S,S",
                 departureTime: "23:25",
                seatsSleeper: Math.floor(Math.random()* 151) + 50, // Random seats in sleeper priceSleeper: Math.floor(Math.random() 1501 500, // Random price in sleeper seateAC: Math.floor(Math.random() 151) 50. // Random seats in AC class (50-3 priceAC: Math.floor(Math.random() 1501) 500, // Random price in AC class (50
                priceSleeper: Math.floor(Math.random()* 1501) + 500,
                seatSAC:Math.floor(Math.random()* 151) + 50,
                priceAc: Math.floor(Math.random()* 1501) + 500,
            },
            {
                trainNumber: 12268,

                trainName: "AHMEDABAD MUMBAI CENT AC Duronto Exp",

                trainType: "Duronto",

                runDays: "M,T,W,T,F,S,S",

                departureTime:" 23:40",

                seatsSleeper: Math.floor(Math.random() *151)+50,

                priceSleeper: Math.floor(Math.random()* 1501)+500,

                seatSAC: Math.floor(Math.random() *151) + 50,

                priceAC: Math.floor(Math.random()* 1501) + 500,
            },

{
trainNumber: 22201,

trainName: "KOLKATA SEALDAH PURI Duronto Express",

trainType: "Duronto",

IunDays: "M,W.F. departureTime: 20:00",

seatsSleeper: Math.floor(Math.random() * 151) + 50,
 priceSleeper: Math.floor(Math.random() * 1501) + 500,
seatsAC: Math.floor(Math.random() * 151) + 50,
priceAC: Math.floor(Math.random() * 1501) + 500,
            },
        ];

// Filter trains departing in the next 12 hours (excluding the next 30 minutes)

const currentTime = new Date();

const twelveHoursLater = new Date(currentTime.getTime()+12 *60 *60 * 1000);

const filteredTrains = trainData.filter(train =>{

    const departureTime = new Date(train.departureTime);

return( 
    currentTime.getTime()+30*60* 1000 < departureTime.getTime() &&

    departureTime.getMinutes()<= twelveHoursLater.getTime()
);
});
// Sort the filteredTrains based on your criteria

const sortedTrains=filteredTrains.sort((a, b) => {
    if (a.priceSleeper !== b.priceSleeper) {
        return a.priceSleeper- b.priceSleeper;
    } else if (a.seatsSleeper !== b.seatsSleeper) { 
    return b.seatsSleeper - a.seatsSleeper;
}else{
const aDepartureTime = new Date(a.departureTime).getHours(); 
const bDepartureTime = new Date(b.departureTime).getHours();
return bDepartureTime- aDepartureTime;
}
});

res.json(sortedTrains);

} catch (error) {
console.error("Error:", error);
 res.status(500).json({error: 'Internal Server Error'});
}
});

app.listen(port, () => {

console.log('Server is listening at http://localhost:${port}');
});
