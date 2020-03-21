export default function(date) {
	if (!date) {
		return ''
	}
  	var tempDate = new Date(date)
  	var targetDate = tempDate.setDate(tempDate.getDate() + 1 )

  	var d = new Date(targetDate)
  	var month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1)
  	var day = d.getDate()<10 ? '0'+d.getDate() : d.getDate()
  	var times = d.getFullYear() + '-' + month + '-' + day
  	return times
}

