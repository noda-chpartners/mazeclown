export const siteName = 'まぜらーくらうん';
export const siteNameEn = 'Mazera Clown';

export const defaultTitle = 'まぜらーくらうん｜川口市蓮沼のまぜらー・らーめん';
export const defaultDescription =
	'埼玉県川口市蓮沼298-8、カウンター8席のまぜらーくらうん。看板のまぜらー、とり塩らーめん、背脂醤油らーめん。平日・土曜・祝日11:00〜19:00、日曜11:00〜14:30、水曜定休。鳩ヶ谷駅からバス。';

export const postalCode = '334-0064';
export const addressRegion = '埼玉県';
export const addressLocality = '川口市';
export const streetAddress = '蓮沼298-8';
export const fullAddress = `〒${postalCode} ${addressRegion}${addressLocality}${streetAddress}`;

export const instagramUrl = 'https://www.instagram.com/mazera_clown/';
export const googleMapsUrl = 'https://share.google/8wK1vUyxKeI6M8o3n';

export const menuItems = [
	{
		name: 'まぜらー',
		description:
			'濃厚だれに、レア寄りのチャーシュー、温玉、ネギ、揚げ玉ねぎ。混ぜて喰らう看板メニュー。',
	},
	{
		name: 'とり塩らーめん',
		description: '鶏の旨みをすくう塩スープ。さっぱり見えて、芯がある一杯。',
	},
	{
		name: '背脂醤油らーめん',
		description: '生姜背脂と濃厚鶏出汁のこっさりな醤油らーめんです。',
	},
] as const;
