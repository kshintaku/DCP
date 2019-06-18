/* DCP 132 [Easy]
Riot Games

Designa nd implement a HitCounter class that keeps track of requests
(or hits). It should support the following operations:

- record(timestamp) : records a hit that happend at timestamp
- total() : returns the total number of hits recorded
- range(lower, upper) : returns the number of hits that occurred
    between timestamps lower and upper (inclusive)

Follow-up: What if our system has limited memory?
*/

class HitCounter {
    constructor () {
        this.hits = [];
    }
    total() {
        return this.hits.length;
    }
    record(timestamp) {
        this.hits.push(timestamp);
    }
    range(lower, upper) {
        let ans = [];
        for (let i = 0; i < this.hits.length; i++) {
            if (this.hits[i] >= lower && this.hits[i] <= upper) {
                ans.push(this.hits[i]);
            }
        }
        return ans;
    }
}

let something = new HitCounter();
something.record(1);
console.log(something.total());
something.record(2);
console.log(something.total());