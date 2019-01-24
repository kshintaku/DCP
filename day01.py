'''
Google
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
'''

def addsUp(k, arr):
    size = len(arr)
    index = 0
    start = arr[index]
    while index < size-2:
        for x in range(index, size):
            if start + arr[x] == k:
                return True
        index += 1
        start = arr[index]
    return False

if __name__ == "__main__":
    k = int(17)
    # k = int(input())
    arr = [10, 15, 3, 7]
    # arr = list(map(int, input().rstrip().split()))
    res = addsUp(k, arr)
    print(res)
