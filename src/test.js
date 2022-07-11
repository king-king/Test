/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let result = [];
    let index1 = 0,
        index2 = 0;
    if (nums1.length === 0) {
        result = nums2;
    } else if (nums2.length === 0) {
        result = nums1;
    } else {
        nums1.forEach((num, index) => {
            if (num < nums2[index2]) {
                index1 = index + 1;
                result.push(num);
            } else {
                result.push(nums2[index2]);
                index2 += 1;
                for (let i = index2; i < nums2.length; i++) {
                    if (num > nums2[i]) {
                        result.push(nums2[i]);
                        index2 = i;
                    } else {
                        break;
                    }
                }
            }
        })
        if (index1 < nums1.length) {
            for (; index1 < nums1.length; index1++) {
                result.push(nums1[index1])
            }
        } else if (index2 < nums2.length) {
            for (; index2 < nums2.length; index2++) {
                result.push(nums2[index2])
            }
        }
    }
    console.log(result)
    if (result.length % 2 === 0) {
        // 偶数
        return (result[result.length / 2] + result[result.length / 2 - 1]) / 2
    } else {
        return result[(result.length - 1) / 2]
    }
};

console.log(findMedianSortedArrays([1, 3], [2, 7]))