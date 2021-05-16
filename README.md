There are two datasets both were created using mockaroo for random data
Customer-2.json is a list of customers, it has random values associated with it, the only important one is its id 

data-6.json is a list of transactions, each entry has an row number, an amount (which is the transaction amount), a transaction date, and the customer that made the transaction 
data-6.json is linked to the list of customers, so only customers with ids matching customers-2.json can appear in data-6.json. I made all transactions randomize to whole values, I did not include cents as points were calculated by dollar so I decided to not deal with cents as there was no mention of cents in the point calculation. The way the code is written it would have dealt with decimals fine however. 

point(x) is a helper function that properly calculates the amount of points that amount is worth based off the formula 1x point for every dollar over 50, and 2x points for every dollar over 100 

The function itself is a map inside a map. The outer map goes through every customer
The interior map gets every transaction associated with that customer and properly calculates the amount of points that customer has for each of the 3 months and the total

