var presto = {
	el: function(el, attrs, css) {
		var el = document.createElement(el)
		for(n in attrs) el[n] = attrs[n]
		for(n in css) el.style[n] = css[n]
		el.put = el.appendChild
		return el
	},
	text: function(text) {
		return document.createTextNode(text)
	}
}
var prestoDiv = presto.el('div', {id: 'presto'}, {'textAlign': 'center', position: 'fixed', bottom: '0px', width: '100%', zIndex: 2000})
prestoDiv.put(presto.el('img', {src: 'data:image/jpeg;base64,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'}))
var tagLine = presto.el('div')
tagLine.put(presto.text('Powered by Presto!'))
prestoDiv.put(tagLine)
document.body.appendChild(prestoDiv)
