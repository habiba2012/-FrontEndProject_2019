class TrainMoving {

    constructor() {

        this.trainPositionOne = document.querySelector('#trainPositionOne');
        this.trainPositionTwo = document.querySelector('#trainPositionTwo');
        this.trainPositionThree = document.querySelector('#trainPositionThree');


        this.startBtn = document.querySelector('#start-train');
        this.resetBtn = document.querySelector('#reset-train');


        this.startTrain();
        this.stopTrain();
    }



    startTrain() {
        this.startBtn.addEventListener("click", () => {
            this.trainMovementOne(true);
            this.trainMovementTwo(true);
            this.trainMovementThree(true);

        })
    }

    stopTrain() {
        this.resetBtn.addEventListener("click", () => {
            this.trainMovementOne(false);
            this.trainMovementTwo(false);
            this.trainMovementThree(false);


        })
    }



    trainMovementOne(ride) {
        //One
        let y1 = this.trainPositionOne.offsetTop;
        let x1 = this.trainPositionOne.offsetLeft;
        //this.message = "X: " + x1 + "Y :" + y1;

        if (ride) {
            this.myTime = setInterval(() => {
                this.speedAndDistanceTrainOne()
            }, 500);
        } else {
            console.log("stop");
            clearInterval(this.myTime)
            this.trainPositionOne.style.left = "310px";
            this.trainPositionOne.style.top = "450px";
        }
    }

    speedAndDistanceTrainOne() {


        let distance = 1;

        //Train one(to vestamager)
        let y1 = this.trainPositionOne.offsetTop;
        let x1 = this.trainPositionOne.offsetLeft;

        if (x1 == 356) {
            //console.log("alert");
            this.trainMovementOne(false);
        }
        console.log(x1, y1, "Train has arrived to station.");

        if (x1 == 450) {
            this.trainMovementOne(false);
        }
        console.log("Train reached to Fasaivej.")

        if (x1 < 575) {

            //y = y + distance;
            x1 = x1 + distance;
            //this.trainPositionOne.style.top = y1 + "px"; // vertical movement
            this.trainPositionOne.style.left = x1 + "px"; // horizontal movement

        } else if (x1 <= 590) {
            y1 = y1 - distance;
            x1 = x1 + distance;
            this.trainPositionOne.style.top = y1 + "px"; // vertical movement
            this.trainPositionOne.style.left = x1 + "px"; // horizontal movement

        } else if (x1 <= 640 && y1 >= 434) {
            x1 = x1 + distance;
            this.trainPositionOne.style.left = x1 + "px"; // horizontal movement

        } else if (x1 <= 678) {

            y1 = y1 + distance;
            x1 = x1 + distance;
            this.trainPositionOne.style.top = y1 + "px"; // vertical movement
            this.trainPositionOne.style.left = x1 + "px"; // horizontal movement


        } else if (x1 >= 679 && y1 <= 695) {

            y1 = y1 + distance;
            //x1 = x1 + distance;
            this.trainPositionOne.style.top = y1 + "px"; // vertical movement
            //this.trainPositionOne.style.left = x1 + "px"; // horizontal movement
        } else {
            console.log("Train has arrived to the destination.");
        }


    }

    trainMovementTwo(ride) {
        //Two
        let y2 = this.trainPositionTwo.offsetTop;
        let x2 = this.trainPositionTwo.offsetLeft;

        if (ride) {
            this.myTime = setInterval(() => {
                this.speedAndDistanceTwo()
            }, 500);
        } else {
            clearInterval(this.myTime)
            this.trainPositionTwo.style.left = "680px";
            this.trainPositionTwo.style.top = "700px";
        }

    }

    speedAndDistanceTwo() {
        let distance = 2;

        //Train two(from vestamager)
        let y2 = this.trainPositionTwo.offsetTop;
        let x2 = this.trainPositionTwo.offsetLeft;

        if (y2 > 490) {

            y2 = y2 - distance;
            //x2 = x2 + distance;

            this.trainPositionTwo.style.top = y2 + "px"; // vertical movement
            //this.trainPositionOne.style.left = x2 + "px"; // horizontal movement

        }
        /*else if (y2 <= 490) {
            y2 = y2 - distance;
            x2 = x2 - distance;

            this.trainPositionTwo.style.top = y2 + "px"; // vertical movement
            this.trainPositionOne.style.left = x2 + "px"; // horizontal movement

        } */
        else {
            console.log("Train has not arrived.");
        }


    }

    trainMovementThree(ride) {
        //Three
        let y3 = this.trainPositionThree.offsetTop;
        let x3 = this.trainPositionThree.offsetLeft;

        if (ride) {
            this.myTime = setInterval(() => {
                this.speedAndDistanceThree()
            }, 500);
        } else {
            clearInterval(this.myTime)
            this.trainPositionThree.style.left = "810px";
            this.trainPositionThree.style.top = "700px";
        }


    }

    speedAndDistanceThree() {
        let distance = 2;
        //Train three(from lufthavnen)
        let y3 = this.trainPositionThree.offsetTop;
        let x3 = this.trainPositionThree.offsetLeft;

        if (y3 > 490) {

            y3 = y3 - distance;
            //x2 = x2 + distance;

            this.trainPositionThree.style.top = y3 + "px"; // vertical movement
            //this.trainPositionOne.style.left = x2 + "px"; // horizontal movement

        }
        /*else if (y3 <= 518) {
            y3 = y3 - distance;
            x3 = x3 - 1;

            this.trainPositionThree.style.top = y3 + "px"; // vertical movement
            this.trainPositionThree.style.left = x3 + "px"; // horizontal movement

        } else if (y3 <= 481) {
            y3 = y3 - distance;
            x3 = x3 - 1;

            this.trainPositionThree.style.top = y3 + "px"; // vertical movement
            this.trainPositionThree.style.left = x3 + "px"; // horizontal movement

        } */
        else {
            console.log("Train 3 did not reach to the destination");
        }
    }




}

export default TrainMoving