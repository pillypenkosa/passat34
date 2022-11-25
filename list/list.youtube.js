const arrYoutubeNav = [



{ id: 'review' 			, title: 'Обзор' 					, descr: 'Обзоры' 									, },
{ id: 'body' 			, title: 'Кузов' 					, descr: 'Кузов' 									, },
{ id: 'b3' 				, title: 'B3' 						, descr: 'B3 1988-1993' 							, },
{ id: 'b4' 				, title: 'B4' 						, descr: 'B4 1993-1997' 							, },
{ id: 'sedan' 			, title: 'Седан' 					, descr: 'Седан' 									, },
{ id: 'wagon' 			, title: 'Универсал' 				, descr: 'Универсал' 								, },
{ id: 'lkp' 			, title: 'ЛКП' 						, descr: 'Лако-красочное покрытие' 					, },

{ id: 'engine' 			, title: 'Двигатель' 				, descr: 'Двигатель' 								, },
{ id: 'gas' 			, title: 'Газ' 						, descr: 'Топливо: газ' 							, },
{ id: 'benzin' 			, title: 'Бензин' 					, descr: 'Топливо: бензин' 							, },
{ id: 'diesel' 			, title: 'Дизель' 					, descr: 'Топливо: дизель' 							, },
{ id: 'v8' 				, title: 'v8' 						, descr: '8 клапанов' 								, },
{ id: 'v16' 			, title: 'v16' 						, descr: '8 клапанов' 								, },
{ id: 'l16' 			, title: '1.6' 						, descr: 'Объем двигателя 1.6 л' 					, },
{ id: 'l18' 			, title: '1.8' 						, descr: 'Объем двигателя 1.8 л' 					, },
{ id: 'l19' 			, title: '1.9' 						, descr: 'Объем двигателя 1.9 л' 					, },
{ id: 'l20' 			, title: '2.0' 						, descr: 'Объем двигателя 2.0 л' 					, },
{ id: 'l28' 			, title: '2.8' 						, descr: 'Объем двигателя 2.8 л' 					, },
{ id: 'ee' 				, title: '2E' 						, descr: 'Двигатель 2E' 							, },
{ id: 'abf' 			, title: 'ABF' 						, descr: 'Двигатель ABF' 							, },
{ id: 'agg' 			, title: 'AGG' 						, descr: 'Двигатель AGG' 							, },
{ id: 'pg' 				, title: 'PG' 						, descr: 'Двигатель PG G60' 						, },

{ id: 'monojetronic' 	, title: 'MonoJetronic' 			, descr: 'Mono-Jetronic' 							, },
{ id: 'turbo' 			, title: 'Turbo' 					, descr: 'Турбо' 									, },

{ id: 'lpg2' 			, title: 'ГБО2' 					, descr: 'ГБО 2 поколения' 							, },
{ id: 'lpg4' 			, title: 'ГБО4' 					, descr: 'ГБО 4 поколения' 							, },

{ id: 'gearbox' 		, title: 'КПП' 						, descr: 'Коробка передач' 							, },
{ id: 'gearbox_a' 		, title: 'АКПП' 					, descr: 'Коробка-автомат' 							, },
{ id: 'gearbox_m' 		, title: 'МКПП' 					, descr: 'Механическая коробка передач' 			, },

{ id: 'clutch' 			, title: 'Сцепление' 				, descr: 'Сцепление' 								, },

{ id: 'sensors' 		, title: 'Датчики' 					, descr: 'Датчики' 									, },
{ id: 'sensorsDmrv' 	, title: 'ДМРВ' 					, descr: 'Датчик массового расхода воздуха' 		, },
{ id: 'sensorsDpdz' 	, title: 'ДПДЗ' 					, descr: 'Датчик положения дроссельной заслонки' 	, },

{ id: 'brakes' 			, title: 'Тормоз' 					, descr: 'Тормоз' 									, },

{ id: 'diagnostics' 	, title: 'Диагностика' 				, descr: 'Диагностика' 								, },
{ id: 'testdrive' 		, title: 'Тестдрайв' 				, descr: 'Тест-драйв' 								, },
{ id: 'tuning' 			, title: 'Тюнинг' 					, descr: 'Тюнинг' 									, },





];

// поколение / объем / клапана / модель / топливо / КПП / кузов / категория / узел / запчасть



const arrYoutube = [



// id - моя Copy 			// href = Original автора


{ 
	title: 'B3 1.8 Turbo PG G60 универсал. Полный привод', ch: 'iling show',
	id: 'OEoAvdItyHo', href: 'OEoAvdItyHo',
	hash: { b3:1, l18:1, pg:1, turbo:1, wagon:1, review:1, }, 
},
{ 
	title: 'B3 1.8 седан. Авто до 100 тыс. рублей', ch: '#Всёобовсем#',
	id: 'lHxTfjp_HSc', href: 'lHxTfjp_HSc',
	hash: { b3:1, l18:1, v8:1, benzin:1, sedan:1, review:1, }, 
},
{ 
	title: 'B3 1.8 седан. Капсула времени. Идеальный с конфиската', ch: 'PRO100 DIMA',
	id: 'z6ooXGIuF3c', href: 'z6ooXGIuF3c',
	hash: { b3:1, review:1, }, 
},
{ 
	title: 'B3 1.8 седан. 28-летний авто для студента', ch: '10 RUS',
	id: 'LIZroMaeAPE', href: 'LIZroMaeAPE',
	hash: { b3:1, l18:1, v8:1, benzin:1, sedan:1, review:1, }, 
},
{
	title: 'B3 1.8 универсал. Анти тест драйв', ch: 'Vitali Burak',
	id: 'neXxqSFf6bQ', href: 'neXxqSFf6bQ',
	hash: { b3:1, l18:1, v8:1, benzin:1, wagon:1, review:1, testdrive:1, }, 
},
{ 
	title: 'B3 1.9 дизель универсал. Тест-драйв', ch: 'Царёв Антон',
	id: 'o4OFM1SqwP8', href: 'o4OFM1SqwP8',
	hash: { b3:1, l19:1, diesel:1, wagon:1, review:1,  }, 
},
{ 
	title: 'B3 2.0 2E седан. Жизнь (про поломки)', ch: 'VoronoV',
	id: 'Z9K2o0frPXQ', href: 'Z9K2o0frPXQ',
	hash: { b3:1, l20:1, ee:1, v8:1, sedan:1, review:1, }, 
},
{ 
	title: 'B3 2.0 ABF универсал. Описание', ch: 'Web Mebli',
	id: 'Sv6Zy0K3yHQ', href: 'Sv6Zy0K3yHQ',
	hash: { b3:1, l20:1, v16:1, abf:1, benzin:1, gearbox_m:1, wagon:1, review:1, }, 
},
{ 
	title: 'B3 2.0 ABF Turbo. Тюнинг. Тест-драйв', ch: 'VoronoV',
	id: 'ipJDcQo4CVs', href: 'ipJDcQo4CVs',
	hash: { b3:1, l20:1, turbo:1, v16:1, abf:1, wagon:1, review:1, testdrive:1, tuning:1, }, 
},
{ 
	title: 'B3 cедан. Обзор', ch: 'Серега AvtokuzoV',
	id: 'y1heZO7NpDs', href: 'y1heZO7NpDs',
	hash: { b3:1, sedan:1, review:1, }, 
},
{ 
	title: 'B3 седан. Подготовка и покраска', ch: 'Гараж47',
	id: '7O211mbdzFU', href: '7O211mbdzFU',
	hash: { b3:1, sedan:1, body:1, lkp:1, }, 
},
{ 
	title: 'B3 универсал. Восстановление. Покраска', ch: 'Allo_Karaganda',
	id: 'w-uvsk0DikA', href: 'w-uvsk0DikA',
	hash: { b3:1, sedan:1, body:1, lkp:1, }, 
},
{ 
	title: 'B3 универсал. Живые есть', ch: 'Лучше Ездить',
	id: 'th0NWHWM99E', href: 'th0NWHWM99E',
	hash: { b3:1, wagon:1, review:1, }, 
},
{ 
	title: 'B3 универсал. Купил', ch: 'Мутные Замуты',
	id: 'wbyi-JBNke0', href: 'wbyi-JBNke0',
	hash: { b3:1, wagon:1, review:1, }, 
},
{ 
	title: 'B3 универсал. Миллион рублей за 10 лет', ch: 'Patmall',
	id: 'MEL5T6PTw_s', href: 'MEL5T6PTw_s',
	hash: { b3:1, wagon:1, review:1, }, 
},















{ 
	title: 'B3. Дешёвки за 20 тысяч рублей', ch: 'AcademeG',
	id: 'M00-vfYOdgU', href: 'M00-vfYOdgU',
	hash: { b3:1, sedan:1, review:1, }, 
},
{ 
	title: 'B3. Документалочка', ch: 'Alex Dorneo',
	id: 'gJmBgUBpWWA', href: 'gJmBgUBpWWA',
	hash: { b3:1, sedan:1, review:1, }, 
},
{ 
	title: 'B3. Можно ли еще покупать', ch: 'iev kuzm',
	id: 'lWBn0iP752s', href: 'lWBn0iP752s',
	hash: { b3:1, review:1, }, 
},
{ 
	title: 'B3. Обслуживание и ремонт', ch: 'АВТО БУ',
	id: 'UOJXFdfDMPk', href: 'UOJXFdfDMPk',
	hash: { b3:1, review:1, }, 
},
{ 
	title: 'B3. Покупка. Основные моменты', ch: 'MiniLady',
	id: '82hWgg3mLPU', href: '82hWgg3mLPU',
	hash: { b3:1, review:1, }, 
},
{ 
	title: 'B3. Экстерьер и интерьер (1991)', ch: 'hirudov',
	id: 'VPOuA340mKI', href: 'VPOuA340mKI',
	hash: { b3:1, review:1, }, 
},
{ 
	title: 'B3 и Lanos. Сравнительный тест', ch: 'INDIGO RACING CLUB',
	id: 'nfiBxfOGn8c', href: 'nfiBxfOGn8c',
	hash: { b3:1, review:1, }, 
},
{ 
	title: 'B4 1.8 седан. Анти тест драйв', ch: 'Vitali Burak',
	id: 'GW2Cgo_SvKs', href: 'GW2Cgo_SvKs',
	hash: { b4:1, l18:1, v8:1, benzin:1, sedan:1, review:1, testdrive:1, }, 
},
{ 
	title: 'B4 1.8 универсал. Тестдрайв от Арнольдыча', ch: 'Петр Арнольдавiч',
	id: '_W4vnDZPU5w', href: '_W4vnDZPU5w',
	hash: { b4:1, l18:1, v8:1, benzin:1, wagon:1, review:1, }, 
},
{ 
	title: 'B4. 1.9. TD против Audi A6 2.4 Quattro', ch: 'ProstoRomka',
	id: '56H9qvAWIzE', href: '56H9qvAWIzE',
	hash: { b4:1, l19:1, turbo:1, diesel:1, review:1, testdrive:1, }, 
},






{ 
	title: 'Двигатель 2E. Golf. Сборка 1', ch: 'Андрей Козлов',
	id: 'nBMNNRteEOY', href: 'nBMNNRteEOY',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. Golf. Сборка 2', ch: 'Андрей Козлов',
	id: 'JBmCpineixA', href: 'JBmCpineixA',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. ГБО 2', ch: 'Жизнь Авто',
	id: 'n32j7hCwqQA', href: 'n32j7hCwqQA',
	hash: { b4:1, ee:1, l20:1, v8:1, benzin:1, engine:1, gas:1, lpg2:1, }, 
},
{ 
	title: 'Двигатель 2E. ГБЦ. Прокладка. Замена', ch: 'владимир 04 регион',
	id: '1ao678owDL8', href: '1ao678owDL8',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. Лечим нестабильный холостой ход', ch: 'lamanov YT',
	id: 'JzrsBtxJGYg', href: 'rOBgACZE8HI',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, diagnostics:1, }, 
},
{ 
	title: 'Двигатель 2E. Плохо заводится. Долго запускается', ch: 'MECHANDOS',
	id: 'o6lmtCrkI9g', href: 'o6lmtCrkI9g',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. ГРМ. Ремень. Замена', ch: 'НЕ БОЙСЯ И ТВОРИ',
	id: 'C5sSE7Q7z0U', href: 'C5sSE7Q7z0U',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. Дроссель', ch: 'Александр Копейкин',
	id: 'H-li6avu7rU', href: 'H-li6avu7rU',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. Разборка', ch: 'LMV',
	id: 'IBGf68KZ0_U', href: 'IBGf68KZ0_U',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},
{ 
	title: 'Двигатель 2E. Трубки вакуумные. Правильное подключение', ch: 'lamanov YT',
	id: '1j5KHWL9sqY', href: '1j5KHWL9sqY',
	hash: { b4:1, l20:1, v8:1, ee:1, engine:1, }, 
},











{ 
	title: 'B3. Двигатель. Mono-Jetronic. Решение проблемы', ch: 'ТехноМастер',
	id: 'x78uOR-FLTk', href: 'x78uOR-FLTk',
	hash: { b3: 1, l18:1, v8:1, sedan:1, engine:1, monojetronic:1, }, 
},
{ 
	title: 'B4. Тормоза новые', ch: 'Vitali Burak',
	id: '2w_zbzT9Tdg', href: '2w_zbzT9Tdg',
	hash: { b4:1, brakes:1, }, 
},


{ 
	title: 'B4. Тюнинг. Делаем авто быстрее', ch: 'YURA',
	id: 'XA6uHfkJwdU', href: 'XA6uHfkJwdU',
	hash: { b4:1, l18:1, v8:1, wagon:1, review:1, tuning:1, }, 
},



{ 
	title: 'B3. LED-подсветка', ch: 'pasha 4itkuy',
	id: 'U_u-SIitquU', href: 'U_u-SIitquU',
	hash: { b3:1, tuning:1, }, 
},
{ 
	title: 'B3. Редкие вещи', ch: 'Гараж47',
	id: '_MtKBLCRhzU', href: '_MtKBLCRhzU',
	hash: { b3:1, tuning:1, }, 
},
{ 
	title: 'B3. Решетка bad boy своими руками. Стиль 90е', ch: 'Deep & Cars',
	id: 'JOJdYI6aZJA', href: 'JOJdYI6aZJA',
	hash: { b3:1, tuning:1, }, 
},
{ 
	title: 'B3. Светодиодная подсветка Блока Управления Печки', ch: 'vanikon',
	id: '6Gv6gh2-Fw8', href: '6Gv6gh2-Fw8',
	hash: { b3:1, tuning:1, }, 
},
{ 
	title: 'B3. Светодиодная подсветка. Габариты (B3)', ch: 'Фёдор Хлуд',
	id: 'gGewrOYFUWE', href: 'gGewrOYFUWE',
	hash: { b3:1, tuning:1, }, 
},
{ 
	title: 'B4. Легкий руль после доработки золотника', ch: 'юра мар',
	id: '0CERs4Mwee0', href: '0CERs4Mwee0',
	hash: { b4:1, tuning:1, }, 
},
{ 
	title: 'B4. Мультируль от B5', ch: 'jackson kalatsei',
	id: 'GmhxUhtJAn8', href: 'GmhxUhtJAn8',
	hash: { b4:1, tuning:1, }, 
},

{ 
	title: 'B4. Ништяки с AliExpress 1', ch: 'Walkman Channel',
	id: 'DJN0CC9bM_4', href: 'DJN0CC9bM_4',
	hash: { b4:1, tuning:1, }, 
},
{ 
	title: 'B4. Ништяки с AliExpress 2', ch: 'Walkman Channel',
	id: 'TRszslMg03s', href: 'TRszslMg03s',
	hash: { b4:1, tuning:1, }, 
},
{ 
	title: 'B4. Ништяки с AliExpress 3', ch: 'Walkman Channel',
	id: 'gcw7ODjHaV4', href: 'gcw7ODjHaV4',
	hash: { b4:1, tuning:1, }, 
},
{ 
	title: 'B4. Оптика новая', ch: 'NeМЕХАНИК',
	id: 'XEhc-RQeNRo', href: 'XEhc-RQeNRo',
	hash: { b4:1, tuning:1, }, 
},
{ 
	title: 'Разварки R14', ch: '𝙳𝚒𝚖𝚊 𝚂𝚑𝚒𝚕𝚒𝚖𝚘𝚟',
	id: 'AVbQCAxm0nw', href: 'AVbQCAxm0nw',
	hash: { b4:1, tuning:1, }, 
},




{ 
	title: '2Е. Обзор', ch: 'ИльдарKZ',
	id: 'rCPKpKbkO-U', href: 'rCPKpKbkO-U',
	hash: { b4:1, ee:1, v8:1, benzin:1, engine:1, review:1, }, 
},



{ 
	title: 'ВАГ-Ком 1', ch: 'Евгений Стариков',
	id: 'ZUZiPI2zVZQ', href: 'ZUZiPI2zVZQ',
	hash: { diagnostics:1, }, 
},
{ 
	title: 'ВАГ-Ком 2', ch: 'Евгений Стариков',
	id: 'vvtUC_qhnBQ', href: 'vvtUC_qhnBQ',
	hash: { diagnostics:1, }, 
},



{ 
	title: 'Охлаждение. Пробка воздушная. Устранение', ch: 'Дмитрий Мазницын',
	id: 'Qu1snO9Z9uk', href: 'Qu1snO9Z9uk',
	hash: { b4:1, }, 
},
{ 
	title: 'Охлаждение. Радиатор. Вентилятор охлаждения. Как проверить', ch: 'Дмитрий Мазницын',
	id: 'x9lOO8vMvkY', href: 'x9lOO8vMvkY',
	hash: { b4:1, }, 
},
		

{ 
	title: 'ABS. Холостой ход. Как уменьшить', ch: 'Дмитрий Мазницын',
	id: 'ZGuZ408ra7w', href: 'ZGuZ408ra7w',
	hash: { b4:1, }, 
},

{ 
	title: 'BR 1.8 RP Mono-Motronic. Не заводится. Заливает', ch: 'Иван Сайченко',
	id: 'Z5AIXc7fLeA', href: 'Z5AIXc7fLeA',
	hash: { b3:1, }, 
},

{ 
	title: 'Заводим в сильный мороз', ch: '',
	id: 'MEg4dKde9H4', href: 'MEg4dKde9H4',
	hash: { b3:1, }, 
},




{ 
	title: 'B3/B4. Машину тянет влево. Причины и решение', ch: 'METALL SURGERY',
	id: 'uDaHKhBI1cw', href: 'uDaHKhBI1cw',
	hash: { b3:1, b4:1, diagnostics:1, }, 
},

{ 
	title: 'B3. ЭБУ. Опрос. Коды медленных ошибок', ch: 'Дмитрий Мазницын',
	id: 'Q2XHYCHC4hY', href: 'Q2XHYCHC4hY',
	hash: { b4:1, diagnostics:1, }, 
},



{ 
	title: 'Аккумулятор - Зарядка. Генератор. Замена', ch: 'Дмитрий Мазницын',
	id: '6TGWpz4Y34k', href: '6TGWpz4Y34k',
	hash: { b3:1, }, 
},
{ 
	title: 'B3. Ремонт и замена помпы', ch: 'ОЖИВИТЕЛИ',
	id: 'uNo9L3JsSao', href: 'uNo9L3JsSao',
	hash: { b3:1, }, 
},
{ 
	title: 'Напряжение. Проверка', ch: 'Дмитрий Мазницын',
	id: 'fOZjSp2q7K8', href: 'fOZjSp2q7K8',
	hash: { b3:1, }, 
},
{ 
	title: 'Щетки. Замена', ch: 'Дмитрий Мазницын',
	id: 'EPr6fG2N5fQ', href: 'EPr6fG2N5fQ',
	hash: { b3:1, }, 
},



{ 
	title: 'B3. ГРМ. Метки. Установка', ch: 'TTF - Время Чинить',
	id: 'vu6EvQ1oyek', href: 'vu6EvQ1oyek',
	hash: { b3:1, }, 
},
{ 
	title: 'B3 1.8 ГРМ. Ремень. Замена', ch: 'AndRamons',
	id: 'kXaaMSauqrY', href: 'kXaaMSauqrY',
	hash: { b3:1, }, 
},
{ 
	title: 'B3 PF 1.8 Ремень и помпа. Замена', ch: 'АВТО МАСТЕРСКАЯ',
	id: 'Sx1Tdwc7OTw', href: 'Sx1Tdwc7OTw',
	hash: { b3:1, }, 
},
{ 
	title: 'B3/B4. ГРМ. Метки', ch: 'Коротко и ясно!',
	id: 'sXwerUcHb6c', href: 'sXwerUcHb6c',
	hash: { b3:1, b4:1, }, 
},
{ 
	title: 'ADY поверх 2E', ch: 'boot trunk',
	id: 'w9iZL93ZiIw', href: 'w9iZL93ZiIw',
	hash: { b4:1, }, 
},
{ 
	title: 'AGG. Начало ремонта, замена МСК', ch: 'GarageLip',
	id: 'o5_aD3AXSRw', href: 'o5_aD3AXSRw',
	hash: { b4:1, }, 
},
{ 
	title: 'AGG. Поломки и проблемы', ch: 'Поломки',
	id: 'qFN0OZbVtfY', href: 'qFN0OZbVtfY',
	hash: { b4:1, agg:1, }, 
},
{ 
	title: 'B3. ГБЦ. Прокладка. Замена', ch: 'Коротко и ясно!',
	id: 'Gpq82wqXxjk', href: 'Gpq82wqXxjk',
	hash: { b4:1, }, 
},



		



{ 
	title: 'Датчик вентилятора - Вся цепь. Проверка (ch: Д.Мазницын)', ch: '',
	id: 'ASbePxxxz4A', href: 'ASbePxxxz4A',
	hash: { sensors: 1, }, 
},
{ 
	title: 'B3. Датчик вентилятора- Замена', ch: '',
	id: 'gNq-09OmiVQ', href: 'gNq-09OmiVQ',
	hash: { b3:1, sensors: 1, }, 
},
{ 
	title: 'Датчик включения заднего хода - Проверка (ch: Д.Мазницын)', ch: '',
	id: 'zFxJ8R9PpoY', href: 'zFxJ8R9PpoY',
	hash: { sensors: 1, }, 
},
{ 
	title: 'λ-зонд - 2E. Расход без лямбды', ch: '',
	id: 'zNwQ2RHq5Qs', href: 'zNwQ2RHq5Qs',
	hash: { sensors: 1, }, 
},
{ 
	title: 'λ-зонд - Как выкрутить (ch: Д.Мазницын)', ch: '',
	id: 'Qd4V1KAiF-k', href: 'Qd4V1KAiF-k',
	hash: { sensors: 1, }, 
},
{ 
	title: 'λ-зонд - Проверка. 1 (ch: Д.Мазницын)', ch: '',
	id: 'bb3HAMy3714', href: 'bb3HAMy3714',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'λ-зонд - Проверка. 2 (ch: Д.Мазницын)', ch: '',
	id: '2tGxhSdKLp4', href: '2tGxhSdKLp4',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'B3. λ-зонд - Замена (B3)', ch: '',
	id: 'uGqIYCD0dUQ', href: 'uGqIYCD0dUQ',
	hash: { b3:1, sensors: 1, }, 
},
{ 
	title: '2E. ДМРВ. Быстро оживить в домашних условиях', ch: '',
	id: '98QPX2jvQXc', href: '98QPX2jvQXc',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: '2E. ДМРВ. Ремонт (Pavel Golovin)', ch: '',
	id: '4RAlU3biT34', href: '4RAlU3biT34',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'PF 1.8. ДМРВ. Разгон на бесконтактном расходомере', ch: '',
	id: 'TWn6h_armps', href: 'TWn6h_armps',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'B3. Датчик переключения горячий-холодный - Заслонка. Восстановление (ch: Д.Мазницын)', ch: '',
	id: 'CS1YLtmAlsk', href: 'CS1YLtmAlsk',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'ДПДЗ - Моновпрыск. Настройка', ch: '',
	id: 'Pp1JuZrq2DI', href: 'Pp1JuZrq2DI',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'Датчик стоп-сигналов - B3. Лягушка (ch: Д.Мазницын)', ch: '',
	id: 'gS8oy5qyTNU', href: 'gS8oy5qyTNU',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'B3. ДТОЖ', ch: '',
	id: 'Vo5wJNzH4TE', href: 'Vo5wJNzH4TE',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'B3. ДТОЖ. Моновпрыск. Проверка', ch: '',
	id: '2AEvlwXMmxk', href: '2AEvlwXMmxk',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'ДТОЖ - Проверка', ch: '',
	id: 'Y_xTTK4B5k8', href: 'Y_xTTK4B5k8',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'ДТОЖ. Секреты диагностики (ch: Д.Мазницын)', ch: '',
	id: 'PinNBeTvKoA', href: 'PinNBeTvKoA',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'B3/B4. Датчик топлива и температуры. Почему не работают', ch: '',
	id: 'qDtS9v3V0iw', href: 'qDtS9v3V0iw',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'Датчик холла - Проверка (Д.Мазницын)', ch: '',
	id: 'y_eyRdxfpUQ', href: 'y_eyRdxfpUQ',
	hash: { b4:1, sensors: 1, }, 
},
{ 
	title: 'Датчик холла - Проверка простая', ch: '',
	id: 'sLaqztwsMEE', href: 'sLaqztwsMEE',
	hash: { b4:1, sensors: 1, }, 
},

		

		

		

/*
{ 
	title: '', ch: '',
	id: '', href: '',
	hash: { b4:1, }, 
},

*/












];










const del222 = [

{
	id: 'vw_passat_b3b4', title: 'VW Passat B3/B4', 
	nav: [ 
		{ id: 'all' 			, title: 'Все' 			, },
		{ id: 'b3' 				, title: 'B3' 			, },
		{ id: 'b4' 				, title: 'B4' 			, },
		{ id: 'total' 			, title: 'Общее' 		, },
		{ id: 'diagnostics' 	, title: 'Диагностика' 	, },
		{ id: 'tuning' 			, title: 'Тюнинг' 		, },
		{ id: 'lpg' 			, title: 'ГБО' 			, },
		{ id: 'generator' 		, title: 'Генератор' 	, },
		{ id: 'sensors' 		, title: 'Датчики' 		, },
		{ id: 'engine' 			, title: 'Двигатели' 	, },

		//{ id: '' 	, title: '' 		, },
	],
	arr: [



		//{ href: '' , title: '' 													, cat: { total: 1 		, } , },
		//{ href: '' , title: '' 													, cat: { total: 1 		, } , },
		//{ href: '' , title: '' 													, cat: { total: 1 		, } , },










		//{ href: '' , title: '' 											, cat: { engine: 1 		, } , },




	],
},




];







let objYoutubeNav = {};
arrYoutubeNav.forEach( k => {
	objYoutubeNav[ k.id ] = k;
});
//console.log( objYoutubeNav );


let objYoutube = {};
arrYoutube.forEach( k => {
	objYoutube[ k.id ] = k;
});

//console.log( objYoutube );





/*



      <H3>Автомобиль</H3>
      <DL>
            <H3>VW Passat</H3>
            <DL>


                  <H3>Двигатель</H3>
                  <DL>



                        <H3>Свечи</H3>
                        <DL>
                              <A HREF="https://www.youtube.com/watch?v=U4I8KX5zzLY">Искра. Проверка (Д.Мазницын)</A>
                              <A HREF="https://www.youtube.com/watch?v=n2VktnOSVZI">Заливает. Богатая смесь.</A>
                              <A HREF="https://www.youtube.com/watch?v=Ztds_CEA7lw">Провода. Сопротивление (Д.Мазницын)</A>
                        </DL>

                        <A HREF="https://www.youtube.com/watch?v=ypPVtvlpXZk">Вал. Сальник. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=6r3wwrJFXe0">Заслонка зима/лето. Переключение. Проверка (B3 Д.Мазницын)</A>
                        <A HREF="https://www.youtube.com/watch?v=xJRDScZw9LY">Зуммер. Пищит  на трассе (B3 RP)</A>
                        <A HREF="https://www.youtube.com/watch?v=ZhKf6ZfgXKg">Капремонт 1 (B3 PF В.Кравченко)</A>
                        <A HREF="https://www.youtube.com/watch?v=hgRVvWfZr0o">Капремонт 2. ГБЦ. Ремонт/сборка (B3 PF В.Кравченко)</A>
                        <A HREF="https://www.youtube.com/watch?v=2QtBqCpKv2I">Капремонт 3. Сборка (B3 PF В.Кравченко)</A>
                        <A HREF="https://www.youtube.com/watch?v=xjfVxeGIw7g">Клапан. Втулка направляющая. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=FuRyxAeDvno">Клапан вентиляции картерных газов. Замена (2E)</A>
                        <A HREF="https://www.youtube.com/watch?v=2NlpRoFE8Lc">Насос масляный. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=JtZxZn9dJec">Номер. Где выбит</A>
                        <A HREF="https://www.youtube.com/watch?v=YQS2_RyIfFg">Опора передняя. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=m2WfhY_YuEY">Перегрев 1 (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=rvic6Tp3GWY">Перегрев 2 (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=HLz6q470h1U">Плавают обороты (B3 Д.Мазницын)</A>
                        <A HREF="https://www.youtube.com/watch?v=xcIp0v68Oj0">Разоборка (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=eaAvCPpKgDE">Форсунка. Проверка на герметичность (B3 Д.Мазницын)</A>
                        <A HREF="https://www.youtube.com/watch?v=UfMORGLJywU">Форсунка. Проверка работоспособности (B3 Д.Мазницын)</A>
                  </DL>

                  <H3>Зажигание</H3>
                  <DL>
                        <A HREF="https://www.youtube.com/watch?v=HBnKWK2HoWE">Замок. Разборка</A>
                        <A HREF="https://www.youtube.com/watch?v=RIHA0V397sI">Замок. Контактная группа. Замена (B3, КАS 6 russian garage)</A>
                        <A HREF="https://www.youtube.com/watch?v=uKz6P5lI1Hg">Замок. Контактная группа. Замена (B3, Д.Мазницын)</A>
                        <A HREF="https://www.youtube.com/watch?v=iNvokiM5850">Угол. Установка (2E)</A>
                  </DL>

                  <H3>Кузов</H3>
                  <DL>
                        <H3>Двери</H3>
                        <DL>
                              <H3>Замки и ручки</H3>
                              <DL>
                                    <A HREF="https://www.youtube.com/watch?v=DNNEvYm3waw">Замок (B3/B4)</A>
                                    <A HREF="https://www.youtube.com/watch?v=3bkN61Qlcz8">Замок. Доработка. Регулировка двери</A>
                                    <A HREF="https://www.youtube.com/watch?v=EYZMf5Asc4c">Замок. Замена. Плохо закрывается дверь (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=ZR8qJpzUISA">Замок. Замена, ремонт и регулировка (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=oUJDRIMBZuE">Замок. Замёрз. Не закрывается дверь (B4)</A>
                                    <A HREF="https://www.youtube.com/watch?v=iPeHsEH-NAI">Замок. Новый на водительскую дверь (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=Wt_jovxtTWA">Замок. Причины и неисправности (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=Ra3_hIxdI64">Замок. Разборка, сборка, ревизия, доработка (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=9BkXz8ncCEw">Замок. Съем (B3/B4)</A>
                                    <A HREF="https://www.youtube.com/watch?v=-8f0fr3sRKI">Замок центральный. Вакуумно-нагнетательная системе. Поиск неисправности (B4)</A>
                                    <A HREF="https://www.youtube.com/watch?v=VoRmcpVzliE">Замок центральный. Компрессор. Ремонт (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=KQ0RFftm3Uc">Замок центральный. Не срабатывает. Не открывается дверь (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=MrJbrjX4_MM">Замок центральный. Плохо срабатывает (B3 Д.Мазницын)</A>
                                    <A HREF="https://www.youtube.com/watch?v=Uyupn0BPdK8">Замок центральный. Установка нового (B3 Сергей Любимов)</A>
                                    <A HREF="https://www.youtube.com/watch?v=GhaYhGPGz0A">Замок центральный с кнопочки (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=J5IBp3FLtIU">Клипса. Установка</A>
                                    <A HREF="https://www.youtube.com/watch?v=3rNTI7L0LNg">Один ключ ко всем замкам (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=1k8-HR94JyI">Открытие багажника (B3 Василий Авторазбор)</A>
                                    <A HREF="https://www.youtube.com/watch?v=eYY42bUehUM">Открытие дверей. Задняя (B3 Игорёха 26RUS)</A>
                                    <A HREF="https://www.youtube.com/watch?v=2wZ8D1sl6aY">Открытие дверей. Передняя (B3 Игорёха 26RUS)</A>
                                    <A HREF="https://www.youtube.com/watch?v=ZcBbszN7btE">Открытие дверей (B4 Дядько Василь)</A>
                                    <A HREF="https://www.youtube.com/watch?v=ah5OCa-OZmg">Открытие дверей. Отвёртка в помощь (B4)</A>
                                    <A HREF="https://www.youtube.com/watch?v=otmUH6hUZ28">Плохо открывается (B3 Д.Мазницын)</A>
                                    <A HREF="https://www.youtube.com/watch?v=dVPwgtWRDYo">Плохо открываются двери. Решение проблемы (B3 Гараж47)</A>
                                    <A HREF="https://www.youtube.com/watch?v=UWpxODeueiM">Ремонт (B3 Sergey Kursk)</A>
                                    <A HREF="https://www.youtube.com/watch?v=xprPv0n4brY">Ремонт (B3 Rinat Pak)</A>
                                    <A HREF="https://www.youtube.com/watch?v=SPbixK2oZJM">Ремонт (B3 Д.Мазницын)</A>
                                    <A HREF="https://www.youtube.com/watch?v=dw-tGqvtbWI">Ремонт (B3 Жека Клянц)</A>
                                    <A HREF="https://www.youtube.com/watch?v=u59Fxg-pp10">Ремонт (B3 Скутер Питер)</A>
                                    <A HREF="https://www.youtube.com/watch?v=Lrlf5U4Jy5Y">Ремонт (B4 Василий Авторазбор)</A>
                                    <A HREF="https://www.youtube.com/watch?v=gdhrYrZPJgc">Ремонт. Быстрый (B3 TehnoFAN)</A>
                                    <A HREF="https://www.youtube.com/watch?v=sY6G_u0OEVM">Ремонт. Не закрывается дверь (Василий Авторазбор)</A>
                                    <A HREF="https://www.youtube.com/watch?v=pDZtHz918MU">Ремонт. Нестандартный метод (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=5_sE19US9ms">Ригель. Замена (Yuriy777888)</A>
                                    <A HREF="https://www.youtube.com/watch?v=4IxpKKXzhrc">Ручка. Электропривод</A>
                                    <A HREF="https://www.youtube.com/watch?v=A1lF8PVnvPE">Ручка внутренняя. Ремонт (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=roLQjfbt-8Q">Ручка наружная. Topran (B4)</A>
                                    <A HREF="https://www.youtube.com/watch?v=Yt2J7BtG204">Ручка наружная. Восстановление (B3 Абдулла Андыбаев)</A>
                                    <A HREF="https://www.youtube.com/watch?v=Fiw-6oSMdgs">Ручка наружная. Вырвал ручку (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=pBqScOhhZko">Ручка наружная. Доработка</A>
                                    <A HREF="https://www.youtube.com/watch?v=nLv63LNjJ3U">Ручка наружная. Замена (B3 Сергей Любимов)</A>
                                    <A HREF="https://www.youtube.com/watch?v=0rgPlm_zHyU">Ручка наружная. Не замыкается дверь после замены (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=KjHR52Sdv_E">Ручка наружная. Обзор китайских (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=R6NkxR_ZRAA">Ручка наружная. От Опеля (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=zRegTJZpmXk">Ручка наружная. Почему не работает (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=zhxQuLcuhwY">Ручка наружная. Разбор (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=rlYzun-z9Y0">Ручка наружная. Регулировка (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=H0STt8nHnIY">Ручка наружная. Ремонт и замена. Почему ломаются (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=LwlcqHB4ems">Ручка наружная. Секрет настройки. 100% результат</A>
                                    <A HREF="https://www.youtube.com/watch?v=iOqHpLqY2pY">Ручка наружная передняя. Замена (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=TdOC1mPivDY">Ручка с центральным замком. Замена (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=IxwNhjCJjdM">Сломалась дверная ручка (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=flcapbcJ1b0">Тяжело открыть дверки (B3)</A>





                              </DL>

                              <H3>Стеклоподъемник</H3>
                              <DL>
                                    <A HREF="https://www.youtube.com/watch?v=Pz3SLn1u5CQ">Гранат. Установка. Сабрина (B3)</A>
                                    <A HREF="https://www.youtube.com/watch?v=o8RaJrjIc0w">Кнопка. Ремонт</A>
                                    <A HREF="https://www.youtube.com/watch?v=i-gkG1kvLDQ">Ремонт 1 (B4 Иван Сайченко)</A>
                                    <A HREF="https://www.youtube.com/watch?v=6nbfG6Svp3c">Ремонт 2 (B4 Иван Сайченко)</A>
                                    <A HREF="https://www.youtube.com/watch?v=ZLc_8xRHOsk">Установка (B3)</A>
                              </DL>

                              <A HREF="https://www.youtube.com/watch?v=9IxTzIuTFaM">Доводчик стёкл (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=5I_374iPilQ">Зеркало. Полировка корпуса (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=wXwN3NoC81o">Карта передняя. Снятие (B3/B4)</A>
                              <A HREF="https://www.youtube.com/watch?v=h7XwAc96neA">Карта передняя. Снятие (B4 АвтоМастер)</A>
                              <A HREF="https://www.youtube.com/watch?v=y2mufet20xs">Петли. Провисание. Устранение (B3/B4)</A>
                              <A HREF="https://www.youtube.com/watch?v=LyDHPdfl4Do">Уплотнитель. Где взять (B3/B4)</A>
                        </DL>



                        <A HREF="https://www.youtube.com/watch?v=3ThldNRonEQ">Капот. Упоры газовые. (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=hmzkPGZglpc">Крыша. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=vPkMqz4Dbmk">Пороги. Частичная замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=5vBOmiowPDI">Решетка радиатора. Установка (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=PldPV5p0ny4">Стаканы. Замена (B3 TDI)</A>
                        <A HREF="https://www.youtube.com/watch?v=kNcsU9KA5RQ">Стакан передний. Ремонт (B3)</A>
                  </DL>

                  <H3>КПП</H3>
                  <DL>
                        <A HREF="https://www.youtube.com/watch?v=r8gcgyt1Duk">Корпус. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=dLoRRb1TWns">Кулиса. Переборка, осмотр (B3/B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=UlYwBOe1awI">Кулиса. Регулировка (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=9vrL429_-yE">Масло. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=4wE8HqvRuP0">Масло. Менять или не менять</A>
                        <A HREF="https://www.youtube.com/watch?v=z-x5JD-fylw">Механизм выбора передач. Переборка (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=OdBOs8NxkpM">Механизм переключения передач, плохо включаются передачи (B3 vova techniс)</A>
                        <A HREF="https://www.youtube.com/watch?v=xBAozLGqwEA">Передачи. Плохо включаются (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=uqcZO6wfAe0">Снимаем и удивляемся</A>
                        <A HREF="https://www.youtube.com/watch?v=xf9rfu4bM6Y">Сцепление. Гидроцилиндр главный. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=ZolrxJa0pSI">Съем. Сцепление. Ремонт (B3)</A>


                  </DL>

                  <H3>Рулевое управление</H3>
                  <DL>
                        <A HREF="https://www.youtube.com/watch?v=jPaVZLfM60g">ГУР. Насос. Разборка (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=FuDtXhgBiLU">ГУР. Установка (B3 ТехноМастер)</A>
                  </DL>

                  <H3>Салон</H3>
                  <DL>
                        <H3>Панель приборов</H3>
                        <DL>
                              <A HREF="https://www.youtube.com/watch?v=arqyC2mAiNk">Заслонка печки не снимая торпеду. Переклейка (B4)</A>
                              <A HREF="https://www.youtube.com/watch?v=pW3swpwjU-w">Модернизация. Что получилось (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=RV2zLMCUm_4">Съем (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=be9Ckz45hrY">Тахометр вместо часов. Как поставить (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=qn5Hdfp81pk">Тюнинг своими руками (B3)</A>
                        </DL>

                        <A HREF="https://www.youtube.com/watch?v=ochnSXyuChQ">Говорили сдай на металл, но я дал жизни</A>
                        <A HREF="https://www.youtube.com/watch?v=-GHL2YKG6DM">Переключатель подрулевой. Снятие, чистка и ремонт (B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=h4bcpzkn-5I">Печка. Плохо греет. Что делать (B3/B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=Jir-7mlnZLI">Печка. Ремонт, с заменой радиатора (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=V5Rd3BUjIBQ">Подсветки БУП и приборки (B3 35i)</A>
                        <A HREF="https://www.youtube.com/watch?v=Ie9cksFBqP0">Пол. Спустя год эксплуатации (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=B5xB74sDXvs">Потолок. Перетяжка (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=D54Yepft7o4">Потолок. Снятие, перетяжка, обезшумка (B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=Awa99AsE00I">Сиденья. Снятие установка</A>
                        <A HREF="https://www.youtube.com/watch?v=MOKLAenT0xk">Шумоизоляция (B3)</A>
                  </DL>

                  <H3>Стартер</H3>
                  <DL>
                        <A HREF="https://www.youtube.com/watch?v=RCzzDmPUx2Q">Втулка. Как заменить</A>
                        <A HREF="https://www.youtube.com/watch?v=bu6_ojLqiKg">Снятие и установка (B3/B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=QWr2bkFfFCk">Щетки. Замена. +Стойки стабилизатора (B4 2E/AGG)</A>
                  </DL>

                  <H3>Ходовая</H3>
                  <DL>
                        <H3>Тормоза</H3>
                        <DL>
                              <A HREF="https://www.youtube.com/watch?v=vB0KkJNLh_w">Барабан. Замена (B3/B4)</A>   
                              <A HREF="https://www.youtube.com/watch?v=0VCFg5HUnN4">Колодки тормозные. Колесо заднее. Замена (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=ymJn6bGEMCY">Тормоз стояночный. Тросик. Замена (B3)</A>
                              <A HREF="https://www.youtube.com/watch?v=9IeHSe3oeXI">Шланг тормозной передний. Замена (2E)</A>
                        </DL>

                        <A HREF="https://www.youtube.com/watch?v=9uzp1JIXbM0">Замена передней ступицы и подшипника (B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=MhXZgRsKEUY">Подшипник ступичный задний. Замена (B3 Гараж Регион-51)</A>
                        <A HREF="https://www.youtube.com/watch?v=6EmrahIq7wE">Подшипник ступичный задний. Замена своими руками (B3/B4 Aliaksei Kolau)</A>
                        <A HREF="https://www.youtube.com/watch?v=9v6PfW00Lmc">Стабилизатор. Втулка. Восстановление (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=S-Cv65KO_5k">Ступица и подшипник. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=6NkGNNaeHKA">Суппорт передний. Поршень. Ремкомплект. Замена (B3/B4)</A>
                        <A HREF="https://www.youtube.com/watch?v=U9pi2pYw3lc">ШРУС внешний. Пыльник. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=p2ZHTGdKWUc">ШРУС внутренний. Замена (B3)</A>
                        <A HREF="https://www.youtube.com/watch?v=QsbhilpzBjA">ШРУС внутренний. Пыльник. Замена (B4)</A>


                  </DL>

                  <H3>Электрика</H3>
                  <DL>
                        <H3>Свет</H3>
                        <DL>
                              <A HREF="https://www.youtube.com/watch?v=qL0w6YYCmX8">Огни ходовые. Как подключить</A>
                              <A HREF="https://www.youtube.com/watch?v=6LO0bwaW98E">Свет фар. Лампочка. Замена</A>
                              <A HREF="https://www.youtube.com/watch?v=tvfDqIAAWHQ">Свет фар ближний. Как улучшить (B3/B4)</A>  
                        </DL>

                        <A HREF="https://www.youtube.com/watch?v=43wYY6YtEYk">Блок реле и предохранителей. Съем</A>
                  </DL>

                  <H3>Прочее</H3>
                  <DL>
                        <A HREF="https://www.youtube.com/watch?v=ITmjnYYs23I">Звуковой сигнал (B3)</A>

                  </DL>
            </DL>

            <H3>Вокруг да около</H3>
            <DL>  
                  <A HREF="https://www.youtube.com/watch?v=PLZnPzXu0TY">MPI или GDI. Впрыск.</A>
                  <A HREF="https://www.youtube.com/watch?v=q-M9muGec9g">Как расшифровать маркировку дисков: ET, PCD, DIA и другие обозначения</A>
                  <A HREF="https://www.youtube.com/watch?v=EC_jWfP_g28">Какую клему аккумулятора снимать/надевать первой</A>
                  <A HREF="https://www.youtube.com/watch?v=sLiZMSiTWXQ">Масло моторное. Допуск. Как узнать.</A>
                  <A HREF="https://www.youtube.com/watch?v=LINPvpJcBn4">Обзор съемника подшипников</A>
                  <A HREF="https://www.youtube.com/watch?v=Fy-ET6YDq38">Прикуривание (Авто Soviet)</A>
                  <A HREF="https://www.youtube.com/watch?v=lP1sB70j2z4">Прикуривание (Project X)</A>
                  <A HREF="https://www.youtube.com/watch?v=tKkguxNIRp0">Съемник передних ступичных подшипников</A>
            </DL>

            <H3>Allo_Karaganda</H3>
            <DL> 
                  <A HREF="https://www.youtube.com/watch?v=f1rmFUhT_hQ">Реставрация ручек, установка салоного фильтра, свечи NGK, карбюратор</A>
                  <A HREF="https://www.youtube.com/watch?v="></A>
                  <A HREF="https://www.youtube.com/watch?v="></A>
                  <A HREF="https://www.youtube.com/watch?v="></A>
                  <A HREF="https://www.youtube.com/watch?v="></A>
                  <A HREF="https://www.youtube.com/watch?v="></A>
                  <A HREF="https://www.youtube.com/watch?v="></A>
                  <A HREF="https://www.youtube.com/watch?v="></A>

            </DL>





            <A HREF="https://www.youtube.com/channel/UCj1lrUHOfH1hU_wJp6cZzKA/videos">Allo_Karaganda</A>
            <A HREF="https://www.youtube.com/channel/UC7oQ3Fg-FE1sLi4d2e23k4w/videos">Вячеслав Кравченко (VK Garage) </A>
            <A HREF="https://www.youtube.com/c/dimonmaznicin81/videos">Дмитрий Мазницын</A>
            <A HREF="https://www.youtube.com/channel/UCNIEALUW5diY4pi2CLCL2Ww/videos">Игорёха 26RUS</A>
            <A HREF=""></A>
            <A HREF=""></A>
            <A HREF=""></A>
            <A HREF=""></A>


      </DL>















*/





