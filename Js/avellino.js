		/*
		En estas dos variables vamos a almacenar el número total de elementos y el elemento que se está mostrando 
		actualmente
		*/
		var gal_n_elem = 0;
		var gal_page = 1;
		/*
		Cuando el documento está listo, miramos el número de elementos que tenemos, y hacemos que el .wrapper
		tenga un ancho de 100*gal_n_elem %. 
		Es decir, si tenemos 6 elementos, el wrapper tendrá que medir 600% de ancho para albergar las 6 imágenes.
		Después hacemos que cada li mida 100/6 % del padre.
		*/
		$(document).ready(function(){
   gal_n_elem = $('#gallery .wrapper li').length;
   $('#gallery .wrapper').width(gal_n_elem * 100 + '%');
   $('#gallery .wrapper li').width(100 / gal_n_elem + '%');
		})
		/*
		Esta función se ejecuta al pulsar el botón anterior. Si no estamos en la página 1, cargamos la página anterior
		*/
		function galeriaAnterior(){
   if(gal_page < 2) return;
   galeriaCargarPagina(gal_page - 1);
		}
		/*
		Esta función se ejecuta al pulsar el botón siguiente. Si no estamos en la última página, cargamos la página anterior
		*/
		function galeriaSiguiente(){
   if(gal_page > gal_n_elem-1) return;
   galeriaCargarPagina(gal_page + 1);
		}
		/*
		Esta es la función para mostrar una página.
		Modifica el margin-left del wrapper para mostrar la página solicitada. 
		En esta función controlamos también si los botones de anterior y siguiente deben estar deshabilitados. 
		*/
		function galeriaCargarPagina(n){
   gal_page = n;
   if(n > 1){
      $('#gallery .anterior').removeClass('disabled');
   }else{
      $('#gallery .anterior').addClass('disabled');
   }
   if(n < gal_n_elem){
      $('#gallery .siguiente').removeClass('disabled');
   }else{
      $('#gallery .siguiente').addClass('disabled');
   }
   $('#gallery .wrapper').animate({"margin-left":-100 * (n-1) + '%'},500);
}
 