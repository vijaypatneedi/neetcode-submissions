/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let dia = 0;
        function maxLength(node){
            if(node == null) return 0;
            let leftMax = maxLength(node.left);
            let rightMax = maxLength(node.right);
            dia = Math.max(dia, leftMax+rightMax);
            return 1+Math.max(leftMax, rightMax);
        }
        maxLength(root);
        return dia;
    }
}
