/* DCP 127 [Easy]
Microsoft

Let's represent and integer in a linked list format by having each
node represent a digit in the number. The nodes make up the number
in reversed order.

For example, the following linked list:
1 -> 2 -> 3 -> 4 -> 5
is the number 54321.

Given two linked lists in this format, return their sum
in the same linked list format.

For example, given
9 -> 9
5 -> 2
return 124 (99 + 25) as:
4 -> 2 -> 1
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let first = new ListNode(9);
first.next = new ListNode(9);

let second = new ListNode(5);
second.next = new ListNode(2);

function linkListAdd(first, second) {
    let sum = new ListNode(0);
    let head = sum;
    let round = 0;
    while (first != null) {
        let temp = first.val + second.val + round;
        if (temp > 9) {
            round = 1;
            temp = temp % 10;
        }
        sum.next = new ListNode(temp);
        sum = sum.next;
        first = first.next;
        second = second.next;
    }
    return head.next;
}

let ans = linkListAdd(first, second);
while (ans != null) {
    console.log(ans.val);
    ans = ans.next;
}