const Database = require('better-sqlite3');
const db = new Database('/Users/santosh/munsidata/data/3/munshi.2018.19.db', { readonly: true });

console.time("T1");

const sql = `SELECT * FROM PROD `;
const stmt = db.prepare(sql);
const rows = stmt.all({"TC":100});

console.log(rows.length);
console.timeEnd("T1");