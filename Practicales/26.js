db.employee.insertMany([
    {
        "EID": 1,
        "ENAME": "Nick",
        "GENDER": "Male",
        "JOININGDATE": new Date("01-JAN-13"),
        "SALARY": 4000,
        "CITY": "London"
    },
    {
        "EID": 2,
        "ENAME": "Julian",
        "GENDER": "Female",
        "JOININGDATE": new Date("01-OCT-14"),
        "SALARY": 3000,
        "CITY": "New York"
    },
    {
        "EID": 3,
        "ENAME": "Roy",
        "GENDER": "Male",
        "JOININGDATE": new Date("01-JUN-16"),
        "SALARY": 3500,
        "CITY": "London"
    },
    {
        "EID": 4,
        "ENAME": "Tom",
        "GENDER": "Male",
        "JOININGDATE": new Date(null),
        "SALARY": 4500,
        "CITY": "London"
    },
    {
        "EID": 5,
        "ENAME": "Jerry",
        "GENDER": "Male",
        "JOININGDATE": new Date("01-FEB-13"),
        "SALARY": 2800,
        "CITY": "Sydney"
    },
    {
        "EID": 6,
        "ENAME": "Philip",
        "GENDER": "Male",
        "JOININGDATE": new Date("01-JAN-15"),
        "SALARY": 7000,
        "CITY": "New York"
    },
    {
        "EID": 7,
        "ENAME": "Sara",
        "GENDER": "Female",
        "JOININGDATE": new Date("01-AUG-17"),
        "SALARY": 4800,
        "CITY": "Sydney"
    },
    {
        "EID": 8,
        "ENAME": "Emily",
        "GENDER": "Female",
        "JOININGDATE": new Date("01-JAN-15"),
        "SALARY": 5500,
        "CITY": "New York"
    },
    {
        "EID": 9,
        "ENAME": "Michael",
        "GENDER": "Male",
        "JOININGDATE": new Date(null),
        "SALARY": 6500,
        "CITY": "London"
    },
    {
        "EID": 10,
        "ENAME": "John",
        "GENDER": "Male",
        "JOININGDATE": new Date("01-JAN-15"),
        "SALARY": 8800,
        "CITY": "London"
    }
])

----------------------------A---------------------------

db.employee.find({ "GENDER": "Male" });

db.employee.find({ "CITY": "London" });

db.employee.find({ "SALARY": { $gt: 3500 } });

db.employee.find({"JOININGDATE": { $lt:ISODate("2015-01-01")}})

db.employee.find({ "EID": { $gte: 7 } })

db.employee.find({ "CITY": { $in: ["London", "New York"] } })

db.employee.find({ "CITY": { $nin: ["London", "New York"] } })

db.employee.find({ CITY: "London" }, { EID: 1, _id: 0 })

db.employee.find({ CITY: "New york" }, { ENAME: 1, _id: 0 }).limit(2);

db.employee.find({ CITY: "London" }, { ENAME: 1, _id: 0 }).skip(2).limit(2);

db.employee.find({ GENDER: "Male", CITY: "Sydney" })

db.employee.find({ CITY: { $in: ["London", "Sydney"] } }, { EID: 1, ENAME: 1, CITY: 1, SALARY: 1 })

db.employee.find({ SALARY: { $gt: 7000 } }, { ENAME: 1, SALARY: 1, CITY: 1 })

db.employee.find({ ENAME: { $regex: /^E/ } })

db.employee.find({ ENAME: { $regex: /^[SM]/ } })

db.employee.find({ CITY: { $regex: /^[A-M]/ } })

db.employee.find({ CITY: { $regex: /ney$/ } })

db.employee.find({ ENAME: { $regex: /^n/i } })

db.employee.find({ ENAME: { $regex: /^E.{4}/ } })

db.employee.find({ ENAME: { $regex: /^S.*a$/i } })

db.employee.find({ ENAME: { $regex: /^Phi/ } }, { EID: 1, ENAME: 1, CITY: 1, SALARY: 1 })

db.employee.find({ CITY: { $regex: /.dne/ } }, { ENAME: 1, JOININGDATE: 1, CITY: 1 })

db.employee.find({ CITY: { $nin: ["London", "Sydney"] } }, { ENAME: 1, JOININGDATE: 1, CITY: 1 })

db.employee.deleteMany({ CITY: "New York" })

db.employee.updateOne({ ENAME: "Nick" }, { $set: { ENAME: "Naysa", GENDER: "Female" } })

-----------------------B-----------------------

db.students.insertMany([
        {
            ROLLNO: 101,
            SNAME: "Vina",
            DEPARTMENT: "CE",
            FEES: 15000,
            SEM: 3,
            GENDER: "Female",
            CITY: "Rajkot"
        },
        {
            ROLLNO: 102,
            SNAME: "Krisha",
            DEPARTMENT: "EC",
            FEES: 8000,
            SEM: 5,
            GENDER: "Female",
            CITY: "Ahmedabad"
        },
        {
            ROLLNO: 103,
            SNAME: "Priti",
            DEPARTMENT: "Civil",
            FEES: 12000,
            SEM: 7,
            GENDER: "Female",
            CITY: "Baroda"
        },
        {
            ROLLNO: 104,
            SNAME: "Mitul",
            DEPARTMENT: "CE",
            FEES: 15000,
            SEM: 3,
            GENDER: "Male",
            CITY: "Rajkot"
        },
        {
            ROLLNO: 105,
            SNAME: "Keshav",
            DEPARTMENT: "CE",
            FEES: 15000,
            SEM: 3,
            GENDER: "Male",
            CITY: "Jamnagar"
        },
        {
            ROLLNO: 106,
            SNAME: "Zarna",
            DEPARTMENT: "Civil",
            FEES: 12000,
            SEM: 5,
            GENDER: "Female",
            CITY: "Ahmedabad"
        },
        {
            ROLLNO: 107,
            SNAME: "Nima",
            DEPARTMENT: "EE",
            FEES: 9000,
            SEM: 5,
            GENDER: "Female",
            CITY: "Rajkot"
        },
        {
            ROLLNO: 108,
            SNAME: "Dhruv",
            DEPARTMENT: "Mechanical",
            FEES: 10000,
            SEM: 5,
            GENDER: "Male",
            CITY: "Rajkot"
        },
        {
            ROLLNO: 109,
            SNAME: "Krish",
            DEPARTMENT: "Mechanical",
            FEES: 10000,
            SEM: 7,
            GENDER: "Male",
            CITY: "Baroda"
        },
        {
            ROLLNO: 110,
            SNAME: "Zeel",
            DEPARTMENT: "EE",
            FEES: 9000,
            SEM: 3,
            GENDER: "Female",
            CITY: "Jamnagar"
        }
    ])

db.students.find({ GENDER : "Female"})

db.students.find({ CITY: "Rajkot" })

db.students.find({ SEM: 7 })

db.students.find({ SEM: {$ne: 3} })

db.students.find({ ROLLNO: { $gt: 107 } })

db.students.find({ CITY: { $in: ["Jamnagar","Baroda"]}})

db.students.find({FEES:{$lt:9000}})

db.students.find({ DEPARTMENT: "Mechanical"}, { ROLLNO : 1})

db.students.find({ CITY: "Baroda" }).limit(2)

db.students.find({ GENDER : "Male",SEM:3})

db.students.find({ ROLLNO:{ $lt:105 }},{SNAME:1,CITY:1,FEES:1})

db.students.find({SNAME:{$regex: /^K/ }})

db.students.find({ SNAME: { $regex: /^[ZD]/ } })

db.students.find({ SNAME: { $regex: /^P.*i$/ } })

db.students.find({ DEPARTMENT : {$regex: /^C/ }})

db.students.find({CITY:{$regex: /.med/ }}, { SNAME:1,SEM:1,FEES:1,DEPARTMENT:1 })

db.students.find({ CITY: { $nin: ["Rajkot","Baroda"] } }, { SNAME: 1, SEM: 1, FEES: 1, DEPARTMENT: 1 })

db.student.deleteMany({ CITY:"Jamnagar"})

db.student.updateOne({SNAME:"Krish"},{$set:{SNAME:"fenny",GENDER:"Female"}})


-----------------------------C---------------------------

db.students.find({ CITY: "Ahmedabad" }).skip(2).limit(2)

db.students.find({ CITY: "Baroda", DEPARTMENT:"CE" }, { ROLLNO:1, SNAME: 1, FEES: 1, DEPARTMENT: 1 })

db.students.find({ CITY: { $regex: /oda$/ } })

db.students.find({ SNAME: { $regex: /v/i } })

db.students.find({ SNAME: { $regex: /^V.{3}/ } })
