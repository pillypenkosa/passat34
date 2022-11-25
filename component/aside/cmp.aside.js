//console.log( 'aside' );









class ComponentAside {


	static selectedCat 	= {};
	static select2list 	= [];




	static html() {

		let innerHTML = '';


		arrYoutubeNav.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 									, },
					{ k: 'title' 	, v: k.descr 								, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( this )` 	, },
				], 
			});
		});





/*
		arrYoutube.forEach( k => {
			innerHTML += getComponentHtml({ 
				tag: 'btn', 
				innerHTML: k.title, 
				param: [
					{ k: 'data-id' 	, v: k.id 									, },
					{ k: 'title' 	, v: k.title 								, },
					{ k: 'onclick' 	, v: `ComponentAside.clc( '${ k.id }' )` 	, },
				], 
			});
		});
*/

		return getComponentHtml({ tag: 'aside', innerHTML, });
	}



	static clc( elem ) {


		// подсветка кнопок
		//btnLight( 'cmp-aside', id );


		elem.classList.toggle( 'active' );


		document.getElementById( 'list' ).innerHTML = '';


		//console.log( elem.dataset.id );

		this.selectedCat[ elem.dataset.id ] = !this.selectedCat[ elem.dataset.id ];

		//console.log( this.selectedCat );

		let tempArr = arrYoutube.filter( k => true );

		for ( let k in this.selectedCat ) {

			if ( this.selectedCat[ k ] ) {

				tempArr = tempArr.filter( k1 => k1.hash[ k ] );

			}

			//console.log( k );

		}
		
		//console.log( tempArr );
		//console.log( tempArr );
		//this.select2list = arrYoutube;

		document.getElementById( 'list' ).innerHTML = ComponentListVideo.html( tempArr );




		//this.select2list

/*
		// очистка контента
		let content = document.getElementById( 'content' );
		content.innerHTML = '';
*/


		//ComponentMiddle.showContent( id );


	} 



	static showList() {




	}







}















