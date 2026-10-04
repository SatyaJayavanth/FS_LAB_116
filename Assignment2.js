const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017";

// Create MongoDB client
const client = new MongoClient(url);

// Database and collection names
const dbName = "collegeDB";

async function main() {
    try {
        // Connect to MongoDB
        await client.connect();

        console.log("Connected to MongoDB successfully.");

        // Select database
        const db = client.db(dbName);

        // Select collection
        const students = db.collection("students");

        // ---------------------------------------
        // 1. Insert student records
        // ---------------------------------------

        await students.deleteMany({});

        await students.insertMany([
            {
                rollNo: "23CM001",
                name: "Ravi Kumar",
                branch: "CSE-AIML",
                year: 3,
                marks: 85,
                email: "ravi@example.com"
            },
            {
                rollNo: "23CM002",
                name: "Priya Sharma",
                branch: "CSE-AIML",
                year: 3,
                marks: 92,
                email: "priya@example.com"
            },
            {
                rollNo: "23CM003",
                name: "Arjun Reddy",
                branch: "CSE",
                year: 2,
                marks: 68,
                email: "arjun@example.com"
            },
            {
                rollNo: "23CM004",
                name: "Sneha Rao",
                branch: "ECE",
                year: 3,
                marks: 47,
                email: "sneha@example.com"
            },
            {
                rollNo: "23CM005",
                name: "Kiran Kumar",
                branch: "CSE-AIML",
                year: 2,
                marks: 78,
                email: "kiran@example.com"
            }
        ]);

        console.log("\n1. Student records inserted successfully.");

        // ---------------------------------------
        // 2. Display all students
        // ---------------------------------------

        console.log("\n2. All Students:");

        let result = await students.find({}).toArray();

        console.table(result);

        // ---------------------------------------
        // 3. Display students from CSE-AIML
        // ---------------------------------------

        console.log("\n3. Students belonging to CSE-AIML:");

        result = await students.find({
            branch: "CSE-AIML"
        }).toArray();

        console.table(result);

        // ---------------------------------------
        // 4. Students scoring more than 75
        // ---------------------------------------

        console.log("\n4. Students scoring more than 75:");

        result = await students.find({
            marks: { $gt: 75 }
        }).toArray();

        console.table(result);

        // ---------------------------------------
        // 5. Search student using rollNo
        // ---------------------------------------

        console.log("\n5. Search student using rollNo:");

        result = await students.findOne({
            rollNo: "23CM001"
        });

        console.log(result);

        // ---------------------------------------
        // 6. Search based on condition
        // Students in year 3
        // ---------------------------------------

        console.log("\n6. Students in Year 3:");

        result = await students.find({
            year: 3
        }).toArray();

        console.table(result);

        // ---------------------------------------
        // 7. Update marks
        // ---------------------------------------

        await students.updateOne(
            { rollNo: "23CM001" },
            { $set: { marks: 90 } }
        );

        console.log("\n7. Ravi's marks updated to 90.");

        // ---------------------------------------
        // 8. Update email
        // ---------------------------------------

        await students.updateOne(
            { rollNo: "23CM001" },
            {
                $set: {
                    email: "ravi.kumar@example.com"
                }
            }
        );

        console.log("8. Ravi's email updated.");

        // ---------------------------------------
        // 9. Delete student
        // ---------------------------------------

        await students.deleteOne({
            rollNo: "23CM005"
        });

        console.log("\n9. Student 23CM005 deleted.");

        // ---------------------------------------
        // 10. Sort students by marks
        // Descending order
        // ---------------------------------------

        console.log("\n10. Students sorted by marks:");

        result = await students.find({})
            .sort({ marks: -1 })
            .toArray();

        console.table(result);

        // ---------------------------------------
        // 11. Create index on rollNo
        // ---------------------------------------

        await students.createIndex({
            rollNo: 1
        });

        console.log("\n11. Index created on rollNo.");

        // ---------------------------------------
        // 12. Display indexes
        // ---------------------------------------

        console.log("\n12. Available indexes:");

        result = await students.indexes();

        console.table(result);

        // ---------------------------------------
        // 13. Find students scoring above 80
        // ---------------------------------------

        console.log("\n13. Students scoring above 80:");

        result = await students.find({
            marks: { $gt: 80 }
        }).toArray();

        console.table(result);

        // ---------------------------------------
        // 14. Find students scoring below 50
        // ---------------------------------------

        console.log("\n14. Students scoring below 50:");

        result = await students.find({
            marks: { $lt: 50 }
        }).toArray();

        console.table(result);

        // ---------------------------------------
        // 15. Find highest scoring student
        // ---------------------------------------

        console.log("\n15. Highest scoring student:");

        result = await students.find({})
            .sort({ marks: -1 })
            .limit(1)
            .toArray();

        console.table(result);

        // ---------------------------------------
        // 16. Find students from CSE-AIML
        // ---------------------------------------

        console.log("\n16. Students from CSE-AIML:");

        result = await students.find({
            branch: "CSE-AIML"
        }).toArray();

        console.table(result);

        // ---------------------------------------
        // 17. Final sorted student list
        // ---------------------------------------

        console.log("\n17. Final student list sorted by marks:");

        result = await students.find({})
            .sort({ marks: -1 })
            .toArray();

        console.table(result);

        console.log("\nAll MongoDB operations completed successfully.");

    } catch (error) {
        console.error("MongoDB Error:", error);
    } finally {
        // Close connection
        await client.close();

        console.log("\nMongoDB connection closed.");
    }
}

// Run the program
main();