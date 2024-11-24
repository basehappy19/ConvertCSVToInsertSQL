const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

async function csvToSqlInsert(csvFilePath, tableName) {
    try {
        const sqlInserts = [];
        const csvData = [];

        // อ่านไฟล์ CSV
        const stream = fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (row) => {
                csvData.push(row);
            })
            .on('end', () => {
                console.log(`Loaded ${csvData.length} rows from CSV.`);

                csvData.forEach((row) => {
                    const columns = Object.keys(row)
                        .map((col) => `\`${col}\``)
                        .join(', '); // คอลัมน์ทั้งหมด
                    const values = Object.values(row)
                        .map((val) => `'${val.replace(/'/g, "''")}'`) // Escape เครื่องหมาย '
                        .join(', '); // ค่าทั้งหมด
                    const insertSQL = `INSERT INTO \`${tableName}\` (${columns}) VALUES (${values});`;
                    sqlInserts.push(insertSQL);
                });

                const outputFile = path.join(__dirname, 'output.sql');
                fs.writeFileSync(outputFile, sqlInserts.join('\n'), 'utf8');
                console.log(`SQL Insert statements have been saved to ${outputFile}`);
            });
    } catch (error) {
        console.error('Error processing CSV to SQL:', error);
    }
}

const csvFilePath = './File.csv'; 
const tableName = 'Table'; 
csvToSqlInsert(csvFilePath, tableName);
