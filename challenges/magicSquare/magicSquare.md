## Introduction

We define a [magic square](https://en.wikipedia.org/wiki/Magic_square) to be an matrix of distinct positive integers from 1 to n where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

## Problem

You will be given a 3x3 matrix of integers in the range of [1,9] where the **goal is to find the minimal cost to transform this matrix into a magic square**. To calculate the cost, you need the value of |b - a|, where b is the new element and a is the old element that is being replaced to create the magic square. You can do as many replacement as needed and for each replacement it adds to the full cost to tranform this matrix.

Example:

* The matrix

|5 3 4|
|1 5 8|
|6 4 2|

* The Magic Square of that matrix:

|8 3 4|
|1 5 9|
|6 7 2|

The cost of this is |5-8| + |8-9| + |4-7| = 7

## Hints
* The Magic Constant for 3x3 matrices is 15
* Magic Square matrices have a specific way of being built

## My Solution
TBD
