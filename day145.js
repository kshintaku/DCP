/*
Google (linked list)

Given the head of a singly linked list,
swap every two nodes and return its head.

For example, given 1 -> 2 ->3 -> 4 , return
2 -> 1 -> 4 -> 3
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let test1 = new ListNode(1);
test1.next = new ListNode(2);
test1.next.next = new ListNode(3);
test1.next.next.next = new ListNode(4);
test1.next.next.next.next = new ListNode(5);

let twoSwap = function(nodes) {
    let head = nodes;
    while (nodes.next != null) {
        let temp = new ListNode(nodes.next.val);
        temp.next = nodes.next.next;
        [nodes.val, nodes.next.val] = [nodes.next.val, nodes.val];
        nodes = nodes.next;
        if (nodes.next != null)
            nodes = nodes.next;
    }
    return head;
}

let ans = twoSwap(test1);

while (ans != null) {
    console.log(ans.val);
    ans = ans.next;
}