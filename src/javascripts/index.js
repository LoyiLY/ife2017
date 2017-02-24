function createCard(obj) {
	return `
<div class="card">
	<img class="img" src="${obj.img}" alt="" />
	<p>
		题目：
		<a href="${obj.topic_site}" class="topic">${obj.name}</a>
	</p>
	<p>
		完成作品：
		<a href="${obj.href}" class="link">Demo</a>
	</p>
</div>
`
}

function loadList(list) {
	let html = ''
	let container = document.body

	Array.from(list, (obj) => {
		html += createCard(obj)
		container.innerHTML = html
	})
}

window.onload = () => {
	const products = [{
		name: '有趣的鼠标悬浮模糊效果',
		img: 'https://ww3.sinaimg.cn/large/006tNbRwly1fcr5jmrmujg30cj06xqv5.gif',
		href: 'views/mouseOverhang.html',
		topic_site: 'http://ife.baidu.com/course/detail/id/14'
	}, {
		name: '动态数据绑定',
		img: 'http://ww1.sinaimg.cn/large/005Y4a20ly1fcr9i4yyamj30b40b474b',
		href: 'views/vue.html',
		topic_site: 'http://ife.baidu.com/course/detail/id/15'
	}]

	loadList(products)
}