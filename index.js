// Simple "おまかせ" behaviour: change background color and show a random message
(() => {
	const colors = [
		'#FFFBF0',
		'#FFF0F6',
		'#F0FFF4',
		'#F0F8FF',
		'#FFF8E1',
		'#F5F7FF'
	];

	const messages = [
		'今日はパンケーキ日和！',
		'コーヒーブレイクしよう☕',
		'小さなチャレンジをひとつ。',
		'深呼吸してリフレッシュ。',
		'散歩に出かけるのも良いですね。',
		'静かな音楽を流して集中しよう。'
	];

	const btn = document.getElementById('omakaseBtn');
	const msg = document.getElementById('omakaseMessage');

	if (!btn || !msg) return;

	function pick(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	}

	function applyRandom(){
		const color = pick(colors);
		const message = pick(messages);

		// background as a subtle gradient
		document.body.style.background = `linear-gradient(180deg, ${color}, #ffffff)`;

		msg.textContent = message;
		msg.classList.remove('visible');
		// trigger reflow then show for animation
		void msg.offsetWidth;
		msg.classList.add('visible');
	}

	btn.addEventListener('click', () => {
		applyRandom();
	});

	// also support Enter/Space on focused button by default, nothing extra needed
	// initial pick
	applyRandom();
})();
