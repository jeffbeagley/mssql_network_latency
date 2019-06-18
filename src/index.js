const sql = require('mssql')

console.log('SQL_USERNAME: ', process.env.SQL_USERNAME)
console.log('SQL_PASSWORD: ', process.env.SQL_PASSWORD)
console.log('SQL_HOSTNAME: ', process.env.SQL_HOSTNAME)
console.log('SQL_DB: ', process.env.SQL_DB || 'master')

async function run_query() {
	sql.close()
	try {
		console.time('total_time')
		await sql.connect('mssql://' + process.env.SQL_USERNAME + ':' + process.env.SQL_PASSWORD + '@' + process.env.SQL_HOSTNAME + '/' + process.env.SQL_DB || 'master')
		const result = await sql.query`SELECT SYSDATETIME()`
		console.timeEnd('total_time')
		return true
	} catch (err) {
		console.log(err)
	}
}

async function run() {
	for (var i = 0, len = 50; i < len; i++) {
		await run_query()
	}

	process.exit()
}

run()

process.on('SIGINT', function() {
	console.log('exiting...')
	process.exit
})
