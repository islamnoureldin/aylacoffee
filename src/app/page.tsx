export default function Home() {
  return (
    <main className="ayla-bg min-h-screen font-cairo text-stone-800">

      {/* ── شريط التنقل ── */}
      <header className="sticky top-0 z-50 bg-[#1a0a00]/95 backdrop-blur border-b border-amber-900/40 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">☕</span>
            <span className="font-cairo text-2xl font-black text-amber-300 tracking-wide">
              AYLA Coffee
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-amber-100/80 font-semibold">
            <a href="#about" className="hover:text-amber-300 transition-colors">من نحن</a>
            <a href="#products" className="hover:text-amber-300 transition-colors">المنتجات</a>
            <a href="#advantages" className="hover:text-amber-300 transition-colors">لماذا AYLA</a>
            <a href="#how-it-works" className="hover:text-amber-300 transition-colors">آلية العمل</a>
            <a
              href="https://wa.me/201007144096"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold rounded-full transition-colors"
            >
              تواصل معنا
            </a>
          </nav>
        </div>
      </header>

      {/* ── قسم البطل ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0a00] via-[#2d1200] to-[#1a0a00] text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, #d97706 0%, transparent 50%),
                              radial-gradient(circle at 75% 20%, #92400e 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-44 text-center">
          <p className="text-amber-400 tracking-widest text-sm font-semibold mb-4">
            مورد قهوة فاخر
          </p>
          <h1 className="font-cairo text-5xl md:text-7xl font-black leading-tight mb-6">
            قهوة استثنائية،<br />
            <span className="text-amber-400">في كل فنجان.</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            حلول قهوة فاخرة للمقاهي والمطاعم والشركات —
            جودة ثابتة وأنواع مختارة بعناية تجعل عملاءك يعودون دائمًا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-[#1a0a00] font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              استعرض منتجاتنا
            </a>
            <a
              href="https://wa.me/201007144096"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-amber-500/60 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-bold rounded-full text-lg transition-all"
            >
              راسلنا على واتساب
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full fill-stone-50">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── من نحن ── */}
      <section id="about" className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 tracking-widest text-xs font-bold mb-3 uppercase">من نحن</p>
            <h2 className="font-cairo text-4xl md:text-5xl font-black text-[#1a0a00] mb-6 leading-tight">
              شريكك الموثوق في عالم القهوة
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-5">
              تتخصص <strong className="text-amber-700">AYLA Coffee</strong> في توريد القهوة للمقاهي
              والمطاعم، حيث تقدم جودة ثابتة وأنواعًا مختارة بعناية من القهوة المحمصة خصيصًا
              لتلبية احتياجات السوق، مع التركيز بشكل أساسي على{" "}
              <strong className="text-amber-700">ثبات المذاق</strong> و{" "}
              <strong className="text-amber-700">جودة الاستخلاص</strong>.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              هدفنا أن نكون موردًا موثوقًا يساعدكم على الحفاظ على مستوى عالٍ من رضا العملاء —
              فنجانًا بعد فنجان، يومًا بعد يوم.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: "✅", title: "جودة ثابتة", desc: "كل دفعة تلتزم بنفس المعيار الدقيق" },
              { icon: "🎯", title: "تركيز على المذاق", desc: "تحميص مُهندَس لجودة الاستخلاص" },
              { icon: "🤝", title: "توريد منتظم", desc: "توصيل منتظم وموثوق يمكنك الاعتماد عليه" },
              { icon: "🧪", title: "تذوق قبل التعاقد", desc: "اختبر المنتج قبل أي التزام" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-cairo font-bold text-[#1a0a00] mb-1">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── المنتجات ── */}
      <section id="products" className="bg-[#fdf6ee] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 tracking-widest text-xs font-bold mb-3 uppercase">قائمة منتجاتنا</p>
            <h2 className="font-cairo text-4xl md:text-5xl font-black text-[#1a0a00] mb-4">
              المنتجات والأسعار
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              مزيجات مختارة بعناية لكل نوع من خدمات القهوة — من المزيج اليومي حتى الأصناف الفاخرة.
            </p>
          </div>

          {/* قهوة تركية */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">☕</span>
              <h3 className="font-cairo text-2xl font-bold text-[#1a0a00]">
                قهوة تركية{" "}
                <span className="text-stone-400 font-normal text-lg">(سوداء – تحميص متوسط)</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">

              {/* مزيج خاص */}
              <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 text-center">
                  <p className="text-xs tracking-widest text-amber-600 font-semibold mb-2 uppercase">
                    المزيج 01
                  </p>
                  <h4 className="font-cairo text-2xl font-black text-[#1a0a00] mb-1">مزيج خاص</h4>
                  <div className="mt-4 text-4xl font-black text-amber-700">650</div>
                  <div className="text-amber-600 font-semibold">جنيه / كجم</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {["مذاق متوازن", "مناسب للاستهلاك اليومي", "جودة ثابتة"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-stone-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* مزيج VIP */}
              <div className="bg-white rounded-3xl shadow-md border-2 border-amber-400 overflow-hidden hover:shadow-xl transition-shadow relative">
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  الأكثر طلبًا
                </div>
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/10 p-8 text-center">
                  <p className="text-xs tracking-widest text-amber-600 font-semibold mb-2 uppercase">
                    المزيج 02
                  </p>
                  <h4 className="font-cairo text-2xl font-black text-[#1a0a00] mb-1">مزيج VIP</h4>
                  <div className="mt-4 text-4xl font-black text-amber-700">840</div>
                  <div className="text-amber-600 font-semibold">جنيه / كجم</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {["قوام أغنى", "جودة أعلى", "مذاق أكثر نعومة وثباتًا"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-stone-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* مزيج AYLA طواف */}
              <div className="bg-gradient-to-br from-[#1a0a00] to-[#3b1a00] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-white">
                <div className="p-8 text-center">
                  <p className="text-xs tracking-widest text-amber-400 font-semibold mb-2 uppercase">
                    المزيج 03
                  </p>
                  <h4 className="font-cairo text-2xl font-black mb-1">مزيج AYLA طواف</h4>
                  <div className="mt-4 text-4xl font-black text-amber-400">1000</div>
                  <div className="text-amber-400/80 font-semibold">جنيه / كجم</div>
                </div>
                <div className="px-6 pb-8">
                  <ul className="space-y-3">
                    {["مزيج فاخر", "رائحة قوية", "مذاق مميز يصنع الفارق"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-amber-100/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* مزيج إسبريسو */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">☕</span>
              <h3 className="font-cairo text-2xl font-bold text-[#1a0a00]">
                مزيج إسبريسو{" "}
                <span className="text-stone-400 font-normal text-lg">(مزيج ٣٠/٧٠)</span>
              </h3>
            </div>
            <div className="max-w-md">
              <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 text-center text-white">
                  <p className="text-xs tracking-widest text-amber-400 font-semibold mb-2 uppercase">
                    إسبريسو
                  </p>
                  <h4 className="font-cairo text-2xl font-black mb-1">مزيج إسبريسو</h4>
                  <div className="mt-4 text-4xl font-black text-amber-400">1000</div>
                  <div className="text-amber-400/80 font-semibold">جنيه / كجم</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "مزيج احترافي مناسب للإسبريسو",
                      "كريمة كثيفة ومتناسقة",
                      "استخلاص متوازن",
                      "مناسب للمقاهي المتخصصة",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-stone-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── مزايا AYLA ── */}
      <section id="advantages" className="bg-[#1a0a00] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-400 tracking-widest text-xs font-bold mb-3 uppercase">لماذا تختارنا</p>
            <h2 className="font-cairo text-4xl md:text-5xl font-black mb-4">
              مزايا التعامل مع AYLA
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "مذاق وجودة ثابتان",
                desc: "يمكنك الاعتماد على نفس الطعم في كل توصيل.",
              },
              {
                icon: "🔥",
                title: "تحميص ملائم لكل استخدام",
                desc: "كل مزيج محمص بعناية لطريقة التحضير المناسبة.",
              },
              {
                icon: "🧪",
                title: "تذوق قبل التعاقد",
                desc: "جرب منتجاتنا في بيئتك قبل أي التزام.",
              },
              {
                icon: "📦",
                title: "توريد منتظم",
                desc: "توصيلات منتظمة وموثوقة حتى لا تنفد مخزونك أبدًا.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-7 transition-colors text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-cairo font-bold text-lg text-amber-300 mb-2">{item.title}</h3>
                <p className="text-amber-100/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── آلية العمل ── */}
      <section id="how-it-works" className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 tracking-widest text-xs font-bold mb-3 uppercase">خطوات بسيطة</p>
            <h2 className="font-cairo text-4xl md:text-5xl font-black text-[#1a0a00] mb-4">
              آلية العمل معنا
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              الأمر بسيط — احصل على عينتك، اختبرها، ثم قرر.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "٠١",
                icon: "📬",
                title: "عينة للاختبار",
                desc: "نوفر لك عينة من مزيجاتنا لتتمكن من تقييم المنتج بنفسك.",
              },
              {
                step: "٠٢",
                icon: "☕",
                title: "اختبار في مقهاك",
                desc: "احضّرها بطريقتك في بيئتك الخاصة وقيّم المذاق والثبات والكريمة.",
              },
              {
                step: "٠٣",
                icon: "🤝",
                title: "اتفاقية التوريد",
                desc: "بعد رضاك، نضع جدول توريد مناسب لحجم طلبك.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-8 shadow-sm border border-stone-100"
              >
                <div className="font-cairo text-7xl font-black text-amber-100 absolute top-4 left-6 select-none">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 relative">{item.icon}</div>
                <h3 className="font-cairo text-xl font-bold text-[#1a0a00] mb-3 relative">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed relative">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* الحد الأدنى للطلب */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-8 py-4">
              <span className="text-2xl">📦</span>
              <div className="text-right">
                <p className="text-amber-800 font-bold text-sm">الحد الأدنى للطلب</p>
                <p className="text-amber-700/80 text-sm">10 كجم للمقاهي والبيع بالجملة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── تواصل معنا ── */}
      <section
        id="contact"
        className="bg-gradient-to-br from-[#2d1200] via-[#1a0a00] to-[#2d1200] text-white py-24"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-amber-400 tracking-widest text-xs font-bold mb-4 uppercase">تواصل معنا</p>
          <h2 className="font-cairo text-4xl md:text-5xl font-black mb-6 leading-tight">
            هل أنت مستعد للارتقاء
            <br />
            بتجربة القهوة لديك؟
          </h2>
          <blockquote className="text-lg text-amber-100/70 italic mb-10 border-r-4 border-amber-500 pr-5 text-right max-w-xl mx-auto">
            &ldquo;المذاق الثابت هو سر ولاء العملاء... وهذا ما نقدمه لكم.&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/201007144096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20c05a] text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              واتساب: 01007144096
            </a>
            <a
              href="tel:+201007144096"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-amber-500/60 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-bold rounded-full text-lg transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              اتصل بنا
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-amber-100/50">
            <span>📍 التوريد إلى: المقاهي والمطاعم والمتاجر الكبرى</span>
            <span>📦 الحد الأدنى: 10 كجم</span>
          </div>
        </div>
      </section>

      {/* ── تذييل ── */}
      <footer className="bg-[#0f0600] text-amber-100/40 py-8 text-center text-sm">
        <p className="font-cairo text-lg font-black text-amber-300/60 mb-1">AYLA Coffee</p>
        <p>حلول قهوة فاخرة للمقاهي والشركات</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} AYLA Coffee. جميع الحقوق محفوظة.
        </p>
      </footer>
    </main>
  );
}
