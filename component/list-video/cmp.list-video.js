//console.log( '' );






class ComponentListVideo {



	static arrArgs = []; 





	static html( arr ) {

		//let txt = 'any text';

		let innerHTML = '';


		arr.forEach( k => {

			//let href = k.href.copy ? k.href.copy : k.href.or;
			let ch = k.ch ? '(ch: ' + k.ch + ')' : '';


			innerHTML += `<div class="each" onclick="ComponentListVideo.clc( this )" data-id="${ k.id }" data-title="${ k.title }" data-ch="${ ch }">
				<div class="img">
					<img src="https://i.ytimg.com/vi/${ k.id }/hqdefault.jpg">
				</div>
				<div class="title">${ k.title } ${ ch }</div>
			</div>`;
		});

		let data = {
			tag: 'list-video',
			innerHTML,
		};


		//console.log( 'ComponentListVideo.html()' );
		//console.log( arr );

		return getComponentHtml( data );
	}



	static clc( elem ) {

		//console.log( elem.dataset.id );
		//console.log( elem.dataset.href );
		//console.log( elem.dataset.title );
		//console.log( elem.dataset.ch );

		//let obj = arrYoutube.find( k => k.id == elem.dataset.id );
		//let obj = objYoutube[ elem.dataset.id ];

		//console.log( obj );


		let hashtags = '';
		for ( let k in objYoutube[ elem.dataset.id ].hash ) {

			hashtags += `#${ objYoutubeNav[ k ].title } `;
		}
		




		document.getElementById( 'screen' ).innerHTML = `<iframe src="https://www.youtube.com/embed/${ objYoutube[ elem.dataset.id ].id }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
		document.getElementById( 'title' ).innerHTML =  `${ objYoutube[ elem.dataset.id ].title } <a class="href-original" href="https://www.youtube.com/watch?v=${ objYoutube[ elem.dataset.id ].href }" target="_blank" title="Оригинал на канале автора может быть здесь...">${ objYoutube[ elem.dataset.id ].ch }</a>`;

		document.getElementById( 'hashtags' ).innerHTML = hashtags;


		//console.log( data );
		//alert( data );
	}










}























