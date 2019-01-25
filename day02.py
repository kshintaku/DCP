'''
Uber
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1,  2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
'''
def newProd(arr):
    x = 1
    for i in arr:
        x = x * i
    print(x)
    index = 0
    while index < len(arr):
        arr[index] = x / arr[index]
        index += 1
    return arr

if __name__ == "__main__":
    arr = [3, 2, 1]
    # arr = list(map(int, input().rstrip().split()))
    res = newProd(arr)
    print(res)