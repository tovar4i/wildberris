const getGoods = () => {
	const links = document.querySelectorAll('.navigation-link');

	const getData = () => {
		fetch('/db/db.json') /* метод fetch обратился к файлу джейсонаа по указанному адресу с запросом */
			.then((res) => res.json())  /* .then (function (response) {
											return response.json()
										})
										.then (function (data) {
											console.log(data);
										}) */
			/* альтернативный вариант написания закомментирован писать подрбное плохой тон */
			/*  метод .then сработает тогда когда пришел и получен ответ от сервера в данном случае в виде объекта response 
			к которому применили метод json и возвратили его в виде объекта response  */

			.then((data) => {
				/* цепочка .then сработает после получения ответа от верхней ветки, в параметр data попадет  тот ответ сервера кoторый нам вернули   */
				console.log(data);
			})
	}
	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			getData();
		})
	})

	/* localStorage.setItem('goods', JSON.stringify({ name: 'all' }));
	const goods = JSON.parse(localStorage.getItem('goods'))
	console.log(goods);

	localStorage.removeItem('goods');
	console.log(localStorage);
	*/

}
getGoods();