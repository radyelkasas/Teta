/**
 * منيو تيته — منقول حرفيًا عن المنيو المطبوع (download.pdf).
 * الأسعار بالجنيه المصري. لا يُضاف أو يُعدَّل أي صنف أو سعر هنا
 * إلا بتأكيد من المحل.
 */

export type WeightPrices = {
  /** طبق */
  plate: number;
  /** نص كيلو */
  half: number;
  /** كيلو */
  kilo: number;
};

export type Variant = { label: string; price: number | null; note?: string };

export type Item =
  | { kind: 'weight'; name: string; prices: WeightPrices }
  | { kind: 'single'; name: string; price: number }
  | { kind: 'variants'; name: string; variants: Variant[] };

export type Section = {
  id: string;
  title: string;
  /** يظهر تحت العنوان — وصف واقعي للقسم، مش ادعاء تسويقي */
  blurb: string;
  /** شريط التصنيفات */
  chip: string;
  layout: 'weight' | 'list' | 'grid';
  photo?: 'rice' | 'tres' | 'molten' | 'torte1' | 'torte2' | 'baklava';
  photoAlt?: string;
  items: Item[];
  footnote?: string;
};

const w = (name: string, plate: number, half: number, kilo: number): Item => ({
  kind: 'weight',
  name,
  prices: { plate, half, kilo },
});

const s = (name: string, price: number): Item => ({ kind: 'single', name, price });

export const TIERS = [
  { id: 'plate', label: 'طبق', hint: 'طبق واحد' },
  { id: 'half', label: 'نص كيلو', hint: '½ كيلو' },
  { id: 'kilo', label: 'كيلو', hint: 'كيلو كامل' },
] as const;

export type TierId = (typeof TIERS)[number]['id'];

export const sections: Section[] = [
  {
    id: 'sharqi',
    title: 'الشرقي',
    chip: 'الشرقي',
    blurb: 'البسبوسة والكنافة والبقلاوة — تتباع بالوزن، اختار المقاس من فوق.',
    layout: 'weight',
    photo: 'baklava',
    photoAlt: 'صواني حلويات شرقية مرصوصة',
    items: [
      w('بسبوسة سادة', 50, 90, 180),
      w('بسبوسة تركى', 60, 110, 220),
      w('بسبوسة بندق', 60, 120, 240),
      w('بسبوسة فسدق', 70, 135, 270),
      w('بسبوسة قشطة', 55, 110, 220),
      w('بسبوسة نوتيلا', 55, 100, 200),
      w('مدلعة كراميل', 55, 110, 220),
      w('كنافة كريمة مانجا', 60, 150, 250),
      w('بلح الشام كريمة', 75, 125, 250),
      w('بلح الشام نوتيلا', 75, 125, 250),
      w('زلابية', 55, 90, 180),
      w('كنافة سادة', 50, 90, 180),
      w('كنافة كريمة', 60, 95, 190),
      w('كنافة اساور', 75, 125, 250),
      w('كنافة بورمه', 55, 210, 420),
      w('كنافة مكسرات', 75, 210, 420),
      w('جلاش سادة', 50, 90, 180),
      w('جلاش مكسرات', 60, 125, 250),
      w('جلاش كريمة', 60, 90, 180),
      w('بقلاوة', 65, 170, 340),
      w('عزيزية', 50, 95, 190),
      w('لينزا', 55, 100, 200),
      w('روانى', 55, 100, 200),
      w('هريسة', 55, 125, 250),
      w('بلح الشام', 40, 80, 160),
      w('صوابع زينب', 40, 80, 160),
      w('مشبك', 40, 80, 160),
      w('رموش الست', 50, 95, 190),
      w('شكلمه', 55, 200, 400),
      w('جلاش حجاب', 55, 100, 200),
    ],
  },
  {
    id: 'rozbelaban',
    title: 'رز بلبن',
    chip: 'رز بلبن',
    blurb: 'مطبوخ على نار هادية، بالسادة أو مغطى بالمكسرات والصوص.',
    layout: 'list',
    photo: 'rice',
    photoAlt: 'رز بلبن بالمكسرات وصوص الشوكولاتة',
    items: [
      s('رز بلبن سادة', 30),
      s('رز بلبن مكسرات', 60),
      s('رز بلبن لوتس', 50),
      s('رز بلبن نوتيلا', 50),
      s('رز بلبن كراميل', 50),
      s('رز بلبن بستاشيو', 60),
      s('رز بلبن مانجو', 50),
    ],
  },
  {
    id: 'treleche',
    title: 'ترى ليتشي',
    chip: 'ترى ليتشي',
    blurb: 'كيكة مشربة لبن، باردة وطرية.',
    layout: 'list',
    photo: 'tres',
    photoAlt: 'قطعة ترى ليتشي عليها صوص كراميل',
    items: [
      s('ترى ليتشي ساده', 65),
      s('ترى ليتشي نوتيلا', 75),
      s('ترى ليتشي لوتس', 75),
      s('ترى ليتشي كراميل', 75),
      s('ترى ليتشي بستاشيو', 90),
      s('ترى ليتشي مانجا', 80),
      s('ترى ليتشي مكسرات', 85),
      s('ترى ليتشي موز كراميل', 70),
    ],
  },
  {
    id: 'gharbi',
    title: 'الغربي',
    chip: 'الغربي',
    blurb: 'التشيز كيك والمولتن والجاتوه — بالقطعة.',
    layout: 'list',
    photo: 'molten',
    photoAlt: 'مولتن كيك مقطوع وجواه حشو سايح',
    items: [
      s('ام على مكسرات', 55),
      s('طاجن نوتيلا', 60),
      s('فادج شيكولاتة', 55),
      s('ترافيل', 40),
      s('كب كيك', 40),
      s('مولتن كيك', 70),
      {
        kind: 'variants',
        name: 'ديسباسيتو / نوتيلا',
        variants: [
          { label: 'صغير', price: null, note: 'السعر غير واضح في المنيو المطبوع' },
          { label: 'كبير', price: 80 },
        ],
      },
      s('موس اوريو', 50),
      s('تشيز كيك لوتس', 60),
      s('تشيز كيك توت احمر', 60),
      s('تشيز كيك بلوبيرى', 60),
      s('كب كنافة لوتس', 60),
      s('كنافة لوتس', 60),
      s('كب كنافة مانجو', 60),
      s('اكلير', 30),
      s('جاتوة كريمه / شوكليت', 30),
      s('دسته جاتوه', 360),
      s('ميلفيه مربي / شوكليت', 28),
      s('علبة براونيز', 80),
      s('ريد ڤلڤيت', 55),
      {
        kind: 'variants',
        name: 'كيكة دبي',
        variants: [
          { label: 'صغير', price: 70 },
          { label: 'كبير', price: 150 },
        ],
      },
      {
        kind: 'variants',
        name: 'تشيز دبي',
        variants: [
          { label: 'نوتيلا', price: 55 },
          { label: 'بستاشيو', price: 85 },
        ],
      },
      s('مدلعة كراميل', 70),
    ],
    footnote: 'سعر الحجم الصغير من الديسباسيتو مش ظاهر في المنيو المطبوع — اسأل عليه في الفرع.',
  },
  {
    id: 'makhbouzat',
    title: 'المخبوزات',
    chip: 'المخبوزات',
    blurb: 'فطير وكرواسون وسينابون — خارجة من الفرن.',
    layout: 'list',
    items: [
      s('فطير مشلتت', 100),
      s('علبه سواريه سينابون', 100),
      s('كرواسون ساده', 15),
      s('كرواسون رومى', 30),
      s('كرواسون كيرى', 35),
      s('كرواسون رومى مبشور', 25),
      s('كرواسون جبنة زيتون', 25),
      s('كرواسون نوتيلا', 25),
      s('باتيه جبنة', 25),
      s('باتيه شوكولاتة', 25),
      s('قطعه دانش شوكولاتة', 25),
      s('قطعه دانش فاكهة', 35),
      s('دونتس نوتيلا', 30),
      s('دونتس نوتيلا بيضاء', 30),
      s('دونتس لوتس', 30),
      s('بيتزا', 35),
      s('علبة مينى ساندويتش', 100),
      s('سينابون لوتس', 55),
      s('سينابون نوتيلا', 55),
      s('علب تارت وسباليه', 150),
    ],
  },
];

export type TorteSize = { size: string; serves: string; from: number };

export const torteSizes: TorteSize[] = [
  { size: 'مقاس 18', serves: 'تكفى 4 افراد', from: 200 },
  { size: 'مقاس 20', serves: 'تكفى 6 افراد', from: 250 },
  { size: 'مقاس 24', serves: 'تكفى 8 افراد', from: 370 },
];

export const tortePhotoPrints = [
  { size: '30 × 30', price: 100 },
  { size: '40 × 30', price: 125 },
  { size: '60 × 40', price: 150 },
];

export const addons = [
  { name: 'مكسرات', price: 30 },
  { name: 'نوتيلا', price: 20 },
  { name: 'لوتس', price: 20 },
  { name: 'كراميل', price: 20 },
  { name: 'بستاشيو', price: 30 },
  { name: 'مانجو', price: 20 },
  { name: 'كندر', price: 20 },
  { name: 'قشطة', price: 30 },
  { name: 'بسبوسة', price: 30 },
];

export const branches = [
  { area: 'ترسا', address: 'الهرم — أمام شارع العمدة' },
  { area: 'الحوامدية', address: 'شارع جمال عبد الناصر' },
  { area: 'الهرم', address: 'فاطمة رشدي — خاتم المرسلين' },
  { area: 'حدائق حلوان', address: 'شارع جمال عبد الناصر' },
  { area: 'القناطر الخيرية', address: 'الكورنيش' },
];

export const PHONE = '17476';
export const MENU_LINK = 'https://me-qr.com/f/teta-menu';

/** كل التصنيفات اللي بتظهر في شريط التنقل، بالترتيب */
export const navChips = [
  ...sections.map((x) => ({ id: x.id, label: x.chip })),
  { id: 'torta', label: 'التورتة' },
  { id: 'idafat', label: 'اضافات' },
  { id: 'branches', label: 'فروعنا' },
];
