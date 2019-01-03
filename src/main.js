const Database = require('better-sqlite3');
const db = new Database('/Users/santosh/munsidata/data/3/munshi.2018.19.db', { readonly: true });

let ref1 = ()=>{
    try{
        console.time("T1");

        const sql = `SELECT * FROM PROD`;
        const rows = db.prepare(sql).all({});
    
        console.log(rows.length);
        console.timeEnd("T1");
    }catch(err){
        console.log(err);
    }
}


let ref2 = ()=>{
    try{
        console.time("T1");

        const sql = `SELECT * FROM PROD WHERE ID=?`;
        const rows = db.prepare(sql).all();
    
        console.log(rows.length);
        console.timeEnd("T1");
    }catch(err){
        console.log(err);
    }
}


ref2();