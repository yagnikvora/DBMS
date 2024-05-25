-----------------------------A-----------------------

db.employee.distinct("CITY")

db.employee.aggregate([{$group: {_id: '$CITY',count: { $sum: 1 }}}]);

db.employee.aggregate([{ $group: { _id: null, total_salary: { $sum: "$SALARY" } } }]);

db.employee.aggregate([{ $group: { _id: null, avarage_salary: { $avg: "$SALARY" } } }]);

db.employee.aggregate([{ $group: { _id: null, minimum_salary: { $min: "$SALARY" }, maximum_salary: { $max: "$SALARY" } } }]);

db.employee.aggregate([{ $group: { _id: "$CITY", total_salary: { $sum: "$SALARY" } } }]);

db.employee.aggregate([{ $group: { _id: "$GENDER", maximum_salary: { $max: "$SALARY" } } }]);

db.employee.aggregate([{ $group: { _id: "$CITY", minimum_salary: { $min: "$SALARY" }, maximum_salary: { $max: "$SALARY" } } }]);

db.employee.find({ CITY:"Sydney"}).count()

db.employee.aggregate([{ $match:{CITY:"New York"}},{ $group:{_id: "$CITY", avarage_salary:{$avg: "$SALARY"}}}])

---------------------------------B------------------------------

db.students.distinct("DEPARTMENT")

db.students.aggregate({$group:{_id:"$CITY",count:{$sum:1}}})

db.students.aggregate({$group:{_id:null,total_fees:{$sum:"$FEES"}}})

db.students.aggregate({ $group: { _id: null, total_fees: { $avg: "$FEES" } } })

db.students.aggregate({ $group: { _id: null, minimum_fees: { $min: "$FEES" }, miximum_fees: { $max: "$FEES" } } })

-------------------------C-----------------------

db.students.aggregate({ $group: { _id: "$DEPARTMENT", total_fees: { $sum: "$FEES" } } })

db.students.aggregate({ $group: { _id: "$GENDER", total_fees: { $max: "$FEES" } } })

db.students.aggregate({ $group: { _id: "$DEPARTMENT", maximum_fees: { $max: "$FEES" }, minimum_fees: { $min: "$FEES" } } })

db.students.find({CITY:"Rajkot"}).count()

db.students.aggregate({ $group: { _id: "$DEPARTMENT", total_student: { $sum: 1 } } })
