//console.log( 'header' );




class ComponentMiddle {


	static arrFiltred = [];





	static html() {


		document.title = appProjectName + ' ' + appVersion;



		return getComponentHtml({ tag: 'middle',
			innerHTML: `
				${ ComponentAside.html() }
				<div id="content">
					<div id="video">
						<div id="screen"></div>
						<div id="title"></div>
						<div id="hashtags"></div>
					</div>

					<div id="list"></div>
				</div>
			`, 
		});
	}




	static arr2arr222() {

		let html = '';

		arrYoutube.forEach( k => {
			if ( k.id == 'arr2arr' ) {
				k.arr.forEach( k1 => {
					console.log( k1 );
					html += `{ href: '${ k1.href }' , title: '${ k1.title }' , cat: { bebris_2: 1 , } , }, <br/>`;
				});
			}
		});

		return html;
	}




}











