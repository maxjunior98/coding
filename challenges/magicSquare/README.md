## Introduction

We define a [magic square](https://en.wikipedia.org/wiki/Magic_square) to be an matrix of distinct positive integers from 1 to n where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

## Problem

You will be given a 3x3 matrix of integers in the range of [1,9] where the **goal is to find the minimal cost to transform this matrix into a magic square**. To calculate the cost, you need the value of |b - a|, where b is the new element and a is the old element that is being replaced to create the magic square. You can do as many replacement as needed and for each replacement it adds to the full cost to tranform this matrix.

Example:

* The matrix

|5 3 4| <br>
|1 5 8| <br>
|6 4 2| <br>

* The Magic Square of that matrix:

|8 3 4| <br>
|1 5 9| <br>
|6 7 2| <br>

The cost of this is |5-8| + |8-9| + |4-7| = 7

## Hints
* The Magic Constant for 3x3 matrices is 15
* Magic Square matrices have a specific way of being built

## My Solution

#### Description
This was based on a method published by the French diplomat de la Loubère in his book, A new historical relation of the kingdom of Siam (Du Royaume de Siam, 1693). His solutions a sequence of 9 steps allowing you to create a Magic Square. Analyzing the possible forms of the magic square, we can conclude that there are 8 possible solutions on 3x3 matrices to satisfy the condition. Originally the solution matrix is:

|8 1 6| <br>
|3 5 7| <br>
|4 9 2| <br>

Knowing that this satisfy the condition of a Magic Square, we can check that if we rotate by 90 degrees, the new matrix will still satisfy the condition, there fore we can rotate 4 times before getting back to the original matrix.

|8 1 6| -> |4 3 8| -> |2 9 4| -> |6 7 2| -> |8 1 6| <br>
|3 5 7| -> |9 5 1| -> |7 5 3| -> |1 5 9| -> |3 5 7| <br>
|4 9 2| -> |2 7 6| -> |6 1 8| -> |8 3 4| -> |4 9 2| <br>

Finally, looking into the simetry of the matrix, if we reproduce the 9 steps but invert the columns 1 and 3, we can reach a matrix that can also satisfy the condition.

|8 1 6| -> |6 1 8| <br>
|3 5 7| -> |7 5 3| <br>
|4 9 2| -> |2 9 4| <br>

This will give us the 8 matrices that can solve the problem. Now the next step is to calculate which one will take the minimal cost of replacements to transform into a Magic Square. For this, I'll call the input matrix A and the Magic Square matrix M. I choose to compare all the 8 possible solutions with the input A by doing the replacement operation on all elements, essentially it is doing A - M = C, where C is the cost matrix of replacements, and the sum of all elements on C is the cost for that solution. After calculating for all 8 matrices, we just have to find the minimum value of all the sums of C's and we will find the **minimum cost**.

#### Pseudocode
The simplification for a code is:

function getMinCost(inputMatrix) { <br>
    array = [] <br>
    for S of solutions ##all 8 solutions <br>
        C = inputMatrix - S <br>
        array[i] = getSumOfElements(C) <br>
    return min(array) <br>
} <br>
