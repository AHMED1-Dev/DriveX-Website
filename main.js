// ============================
// 1. NAVIGATION MENU (شغال في كل الصفحات)
// ============================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const manuBtnIcon = menuBtn?.querySelector("i");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    // contains بيستخدم للتحقق مما إذا كانت فئة معينة موجودة في قائمة الفئات لعنصر معين، وفي هذا السياق يتم استخدامه للتحقق مما إذا كانت قائمة التنقل مفتوحة أم لا بعد النقر على زر القائمة.
    manuBtnIcon?.setAttribute(
      "class",
      isopen ? "ri-close-line" : "ri-menu-3-line",
    );
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    manuBtnIcon?.setAttribute("class", "ri-menu-3-line");
  });
}

// ============================
// 2. SCROLL REVEAL OPTIONS
// ============================
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ============================
// 3. INDEX PAGE ANIMATIONS (شغال بس في index.html)
// ============================
if (document.querySelector(".header__image")) {
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
  });
}

if (document.querySelector(".about__image")) {
  ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
  });
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2500,
  });
}

if (document.querySelector(".fleet__wrapper-1")) {
  const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
  const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

  if (fleet1) {
    const fleet1content = Array.from(fleet1.children);
    // Array.from تستخدم لتحويل HTMLCollection أو NodeList إلى مصفوفة حقيقية في JavaScript، مما يسمح باستخدام جميع وظائف المصفوفات مثل forEach و map وغيرها، وهذا مفيد هنا لأن fleet1.children يرجع HTMLCollection الذي لا يدعم هذه الوظائف بشكل مباشر.
    // هذا الجزء من الكود يقوم بإنشاء نسخ مكررة من كل عنصر داخل حاوية الصور في الأسطول الأول والثاني، ويضيف لها خاصية aria-hidden لتكون غير مرئية لقراء الشاشة، ثم يضيف هذه النسخ إلى نفس الحاوية. هذا يخلق تأثيرًا بصريًا لملء الحاوية بالصور بشكل مستمر أثناء التمرير.
    fleet1content.forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      // cloneNode(true) يقوم بإنشاء نسخة عميقة من العنصر، مما يعني أنه سينسخ العنصر نفسه وجميع عناصره الفرعية، وهذا ضروري هنا لأننا نريد تكرار كل صورة داخل الحاوية وليس فقط العنصر الرئيسي.
      duplicateNode.setAttribute("aria-hidden", true);
      // هذا السطر يضيف خاصية aria-hidden إلى النسخة المكررة من العنصر، مما يجعلها غير مرئية لقراء الشاشة وأدوات الوصول، وهذا مهم لتحسين تجربة المستخدم للأشخاص الذين يستخدمون هذه الأدوات، حيث لن يتم قراءة العناصر المكررة التي لا تضيف قيمة للمحتوى.
      fleet1.appendChild(duplicateNode);
      // هذا السطر يضيف النسخة المكررة من العنصر إلى نفس الحاوية، مما يخلق تأثيرًا بصريًا لملء الحاوية بالصور بشكل مستمر أثناء التمرير، وهذا يمكن أن يعطي انطباعًا بأن هناك عددًا أكبر من الصور في الأسطول مما هو موجود فعليًا، مما يعزز الجاذبية البصرية للصفحة.
    });
  }

  if (fleet2) {
    const fleet2content = Array.from(fleet2.children);
    fleet2content.forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      duplicateNode.setAttribute("aria-hidden", true);
      fleet2.appendChild(duplicateNode);
    });
  }
}

if (document.querySelector(".feature__card")) {
  ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 500,
  });
}

if (document.querySelector(".banner__container")) {
  ScrollReveal().reveal(".banner__container .section__header", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".banner__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".banner__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
}

// ============================
// 4. CARS PAGE ANIMATIONS (شغال بس في cars.html)
// ============================
if (document.querySelector(".car_card")) {
  const bookButtons = document.querySelectorAll(".car_info .btn");

  bookButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // هذا الجزء من الكود يضيف حدث نقر لكل زر "Book Now" داخل بطاقات السيارات، وعند النقر على أي زر، يتم استخراج اسم السيارة من العنوان (h3) الموجود في نفس البطاقة، ثم يتم إعادة توجيه المستخدم إلى صفحة الحجز (book.html) مع تمرير اسم السيارة كمعامل في URL. هذا يسمح لصفحة الحجز بمعرفة السيارة التي تم اختيارها مسبقًا وتعبئة الحقل المناسب تلقائيًا، مما يحسن تجربة المستخدم ويجعل عملية الحجز أكثر سلاسة.
      const carName = button.parentElement.querySelector("h3").textContent;
      // هذا السطر يستخدم للوصول إلى اسم السيارة المرتبط بزر "Book Now" الذي تم النقر عليه. يتم الوصول إلى العنصر الأب (car_info) ثم البحث عن عنصر h3 الذي يحتوي على اسم السيارة واستخراج نصه.
      window.location.href = `book.html?car=${encodeURIComponent(carName)}`;
      // هذا السطر يقوم بإعادة توجيه المستخدم إلى صفحة الحجز (book.html) مع تمرير اسم السيارة كمعامل في URL. يتم استخدام encodeURIComponent لضمان أن اسم السيارة يتم ترميزه بشكل صحيح في URL، مما يمنع حدوث مشاكل إذا كان الاسم يحتوي على مسافات أو أحرف خاصة.
    });
  });
}

// ============================
// 5. BOOKING PAGE ANIMATIONS (شغال بس في booking.html)
// ============================
if (document.querySelector(".booking_form")) {
  ScrollReveal().reveal(".booking_group", {
    ...scrollRevealOption,
    interval: 300,
  });

  ScrollReveal().reveal(".booking_form .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  const bookingForm = document.querySelector(".booking_form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault(); // منع إعادة تحميل الصفحة
      // تعطيل زر الإرسال وتغيير نصه أثناء الإرسال

      const submitBtn = bookingForm.querySelector("button[type='submit']");
      // قم بحصول على زر الإرسال
      if (submitBtn) {
        submitBtn.disabled = true;
        // تغيير نص الزر لإظهار أنه يتم الإرسال
        // disabled بيمنع المستخدم من الضغط عليه مرة أخرى أثناء عملية الإرسال، مما يمنع الإرسال المتكرر ويعطي إشارة بصرية أن الطلب قيد المعالجة.
        submitBtn.innerHTML = `<span><i class="ri-loader-4-line"></i></span> Sending...`;
        // يمكنك إضافة أي تأثير تحميل آخر هنا إذا أردت
      }

      fetch(bookingForm.action, {
        // action في HTML بيحدد URL اللي هتروح له البيانات لما نستخدم fetch، وبيكون عادةً URL لخادم أو خدمة بتتعامل مع البيانات.
        method: "POST",
        // استخدام الطريقة POST للإرسال
        body: new FormData(bookingForm),
        // FormData: بيجمع كل البيانات اللي المستخدم كتبها في الفورم تلقائياً.
        headers: { Accept: "application/json" },
        // headers: { Accept: "application/json" } بيخبر السيرفر إننا نتوقع رد بصيغة JSON، وهذا يساعد في التعامل مع الرد بشكل صحيح إذا كان السيرفر يدعم ذلك.
        // تحديد نوع البيانات المتوقعة من السيرفر (اختياري، حسب إعدادات السيرفر).
      })
        .then((res) => {
          if (res.ok) {
            // res.ok: بيتأكد إن الإرسال نجح (status 200).
            alert("✅ Booking sent successfully! We will contact you soon.");
            bookingForm.reset(); // إعادة تعيين الفورم بعد الإرسال الناجح.
          } else {
            alert("❌ Something went wrong. Please try again.");
          }
        })
        .catch(() => {
          alert("❌ Network error. Please check your connection.");
          // هذا catch بيتم تنفيذه إذا كان هناك مشكلة في الشبكة أو إذا لم يتم الوصول إلى السيرفر، مما يعطي المستخدم رسالة واضحة عن المشكلة بدلاً من تركه في حالة انتظار غير محددة.
        })
        .finally(() => {
          // إعادة تمكين زر الإرسال وتغيير نصه مرة أخرى بعد الانتهاء من العملية، سواء كانت ناجحة أو فاشلة.
          if (submitBtn) {
            // قم بحصول على زر الإرسال
            submitBtn.disabled = false;
            // إعادة تمكين الزر بعد الانتهاء من العملية
            submitBtn.innerHTML = `<span><i class="ri-check-line"></i></span> Confirm Booking`;
            // إعادة تعيين نص الزر إلى الحالة الأصلية بعد الانتهاء من العملية، مما يسمح للمستخدم بمحاولة الإرسال مرة أخرى إذا لزم الأمر.
          }
        });
    });
  }

  // FIX: تحديد السيارة من URL بشكل صح
  const urlParams = new URLSearchParams(window.location.search);
  // الحصول على قيمة "car" من URL (مثلاً: book.html?car=CarName)
  const selectedCar = urlParams.get("car");
  // إذا كانت هناك سيارة محددة في URL، حاول تعيينها في قائمة الاختيار

  if (selectedCar) {
    const carSelect = document.querySelector('select[name="car"]');
    // إذا كان عنصر select موجود، ابحث عن الخيار الذي يطابق اسم السيارة وحدده
    if (carSelect) {
      // تحويل خيارات select إلى مصفوفة للبحث بسهولة
      const options = Array.from(carSelect.options);
      // البحث عن الخيار الذي يطابق اسم السيارة (بغض النظر عن حالة الأحرف)
      const match = options.find(
        // البحث عن الخيار الذي يطابق اسم السيارة
        (opt) => opt.text.toLowerCase() === selectedCar.toLowerCase(),
        // مقارنة النصوص بدون حساسية لحالة الأحرف
      );
      if (match) carSelect.value = match.value;
      // إذا لم يتم العثور على تطابق، يمكن ترك القيمة الافتراضية أو التعامل مع الحالة حسب الحاجة
    }
  }

  const pickupDate = document.querySelector('input[name="pickup-date"]');
  // عند تغيير تاريخ الاستلام، قم بتحديث الحد الأدنى لتاريخ الإرجاع ليكون نفس تاريخ الاستلام أو بعده
  const returnDate = document.querySelector('input[name="return-date"]');
  // هذا يضمن أن المستخدم لا يمكنه اختيار تاريخ إرجاع قبل تاريخ الاستلام

  if (pickupDate && returnDate) {
    // تعيين الحد الأدنى لتاريخ الإرجاع ليكون نفس تاريخ الاستلام عند تحميل الصفحة
    pickupDate.addEventListener("change", () => {
      returnDate.min = pickupDate.value;
      // إذا كان تاريخ الإرجاع الحالي أقل من تاريخ الاستلام الجديد، قم بتحديثه ليكون نفس تاريخ الاستلام
    });
  }
}

// ============================
// 6. PAGE HEADER ANIMATIONS (شغال في cars.html و booking.html)
// ============================
if (document.querySelector(".page-header")) {
  ScrollReveal().reveal(".page-header h1", {
    ...scrollRevealOption,
    delay: 200,
  });

  ScrollReveal().reveal(".page-header .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });
}

// ============================
// 7. SCROLL EFFECT (شغال في كل الصفحات)
// ============================
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      nav.style.boxShadow = "none";
    }
  }
});

// ============================
// 8. PAGE LOADER (شغال في كل الصفحات)
// ============================
window.addEventListener("load", () => {
  // load الحدث بيتم إطلاقه عندما يتم تحميل كل محتوى الصفحة، بما في ذلك الصور والملفات الأخرى، مما يضمن أن المستخدم لن يرى صفحة غير مكتملة أثناء التحميل.
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("preloader")?.classList.add("hidden");
    // هذا يضيف فاصل زمني بسيط بعد تحميل الصفحة قبل إخفاء عنصر التحميل، مما يعطي تأثيراً أكثر سلاسة ويضمن أن المستخدم يرى الصفحة بشكل كامل بعد التحميل.
  }, 500);
});

// ============================
// 9. CAR DETAILS MODAL LOGIC (تم التعديل)
// ============================
const modal = document.getElementById("carModal");

function openDetails(
  carName,
  carImage,
  engine,
  topSpeed,
  Seats,
  Transmission,
  rentalPrice,
  purchasePrice,
) {
  // التأكد من وجود العناصر قبل التحديث
  const titleEl = document.getElementById("modalTitle");
  const imageEl = document.getElementById("modalImage");
  const specsEl = document.getElementById("modalEngine");
  const speedEl = document.getElementById("modalSpeed");
  const seatsEl = document.getElementById("modalSeats");
  const transmissionEl = document.getElementById("modalTransmission");
  const priceRentalEl = document.getElementById("modalPrice");
  const pricePurchaseEl = document.getElementById("modalPricePurchase");

  if (titleEl) titleEl.innerText = carName;
  if (imageEl) imageEl.src = carImage;
  if (specsEl) specsEl.innerHTML = `<strong>Engine:</strong>: ${engine}`;
  if (speedEl) speedEl.innerHTML = `<strong>Top Speed:</strong> ${topSpeed}`;
  if (seatsEl) seatsEl.innerHTML = `<strong>Seats:</strong> ${Seats}`;
  if (transmissionEl)
    transmissionEl.innerHTML = `<strong>Transmission:</strong> ${Transmission}`;
  if (priceRentalEl)
    priceRentalEl.innerHTML = `<strong>Price (Rental):</strong> ${rentalPrice}`;
  if (pricePurchaseEl)
    pricePurchaseEl.innerHTML = `<strong>Price (Purchase):</strong> ${purchasePrice}`;

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeDetails() {
  if (modal) {
    modal.style.display = "none";
  }
}

// FIX: إغلاق المودال بـ Escape key - كان ناقص
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDetails();
  // هذا يضيف إمكانية إغلاق المودال عند الضغط على زر Escape، مما يحسن تجربة المستخدم ويجعل التنقل أسهل.
});

// إغلاق المودال عند الضغط خارجه
window.addEventListener("click", (e) => {
  if (e.target === modal) closeDetails();
  // هذا يضمن أن المودال سيغلق فقط إذا تم النقر خارج محتوى المودال وليس داخل أي عنصر داخلي
});

const carsContainer = document.querySelector(".cars_container");

if (carsContainer) {
  fetch("./cars.json")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load cars data");
      //هذا الشرط يتحقق مما إذا كان الاستجابة ناجحة (status 200-299)، وإذا لم تكن كذلك، يتم رمي خطأ يتم التقاطه في الـ catch لاحقًا لعرض رسالة خطأ للمستخدم بدلاً من محاولة معالجة بيانات غير صحيحة.
      return response.json();
      // تحويل الاستجابة إلى JSON لاستخدامها في عرض السيارات، مما يسمح لنا بالتعامل مع البيانات بشكل منظم وسهل في JavaScript.
    })
    .then((carsData) => {
      renderCars(carsData);
      // هذا يستدعي دالة renderCars لعرض السيارات على الصفحة باستخدام البيانات التي تم جلبها من cars.json، مما يجعل الصفحة ديناميكية ويتيح تحديث قائمة السيارات بسهولة عن طريق تعديل ملف JSON فقط دون الحاجة لتغيير الكود.
    })
    .catch((error) => {
      console.error("Error loading cars:", error);
      // في حالة حدوث خطأ أثناء جلب البيانات، يتم تسجيل الخطأ في وحدة التحكم وعرض رسالة خطأ للمستخدم داخل حاوية السيارات، مما يحسن تجربة المستخدم ويعطيه معلومات واضحة عن المشكلة بدلاً من ترك الصفحة فارغة أو غير مكتملة.
      carsContainer.innerHTML = `<p style="text-align:center;color:red;">Failed to load cars. Please refresh the page.</p>`;
      // هذا يستخدم لعرض رسالة خطاء على الصفحة، ويتم استخدام زيتة CSS لتحديد الحالة واللون المطلوب.
    });
}

function renderCars(carsData) {
  const carsContainer = document.querySelector(".cars_container");

  if (!carsContainer) return;
  // هذا الشرط يتحقق مما إذا كان عنصر carsContainer موجودًا قبل محاولة الوصول إليه، مما يمنع حدوث أخطاء في حالة عدم وجود العنصر في الصفحة.

  let div = document.createElement("div");
  div.className = "cars_grid";

  carsData.forEach((car) => {
    const carDiv = document.createElement("div");
    carDiv.className = "car_card";
    carDiv.setAttribute("data-name", car.brand);

    const img = document.createElement("img");
    img.src = car.img;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = car.name;

    const carInfo = document.createElement("div");
    carInfo.className = "car_info";

    const h3 = document.createElement("h3");
    h3.textContent = car.name;

    const p = document.createElement("p");
    p.className = "car_price";
    p.textContent = car.rentalPrice;

    const ul = document.createElement("ul");
    ul.className = "car_specs";
    const li1 = document.createElement("li");
    li1.innerHTML = `<i class="ri-user-3-line"> ${car.Seats}</i>`;
    const li2 = document.createElement("li");
    li2.innerHTML = `<i class="ri-suitcase-2-line"> ${car.Bags}</i>`;
    const li3 = document.createElement("li");
    li3.innerHTML = `<i class="ri-speed-line"> ${car.Transmission}</i>`;

    ul.append(li1, li2, li3);

    const carBtns = document.createElement("div");
    carBtns.className = "car-btns";

    const detailsBtn = document.createElement("button");
    detailsBtn.className = "btn btn-outline";
    detailsBtn.innerHTML = `<i class="ri-information-line"></i> Details`;
    detailsBtn.onclick = () => {
      openDetails(
        car.name,
        car.img,
        car.engine,
        car.topSpeed,
        car.Seats,
        car.Transmission,
        car.rentalPrice,
        car.purchasePrice,
      );
    };

    const bookBtn = document.createElement("button");
    bookBtn.className = "btn";
    bookBtn.innerHTML = `<span><i class="ri-check-line"></i></span>  Book Now`;
    bookBtn.onclick = () => bookCar(car.name);

    carBtns.append(detailsBtn, bookBtn);
    carInfo.append(h3, p, ul, carBtns);
    carDiv.append(img, carInfo);
    div.appendChild(carDiv);
  });

  if (carsContainer) {
    carsContainer.appendChild(div);
  }

  // ============================
  // 10. CAR FILTER FUNCTIONALITY
  // ============================
  const filterButtons = document.querySelectorAll(".fillter_buttons button");
  const carCards = document.querySelectorAll(".cars_grid .car_card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelector(".fillter_buttons .active")
        ?.classList.remove("active");
      // هذا السطر يستخدم لإزالة فئة "active" من الزر الذي كان نشطًا سابقًا، مما يضمن أن الزر النشط الحالي هو الوحيد الذي يحمل هذه الفئة، وبالتالي يعطي المستخدم إشارة بصرية واضحة عن الفلتر المطبق حاليًا.
      e.target.classList.add("active");
      // هذا السطر يضيف فئة "active" إلى الزر الذي تم النقر عليه، مما يبرز هذا الزر كخيار الفلتر الحالي ويعطي المستخدم إشارة بصرية عن الفلتر الذي تم تطبيقه.

      carCards.forEach((card) => {
        // هذا الجزء من الكود يقوم بإظهار أو إخفاء بطاقات السيارات بناءً على الفلتر المحدد. إذا كان اسم السيارة في بطاقة يتطابق مع الفلتر المحدد أو إذا كان الفلتر "all"، يتم عرض البطاقة، وإلا يتم إخفاؤها.
        card.classList.add("hide");
        // هذا السطر يضيف فئة "hide" إلى كل بطاقة سيارة بشكل افتراضي، مما يخفيها جميعًا في البداية قبل تطبيق الفلتر.
        if (
          card.dataset.name === e.target.dataset.name ||
          e.target.dataset.name === "all"
          // هذا الشرط يتحقق مما إذا كانت بطاقة السيارة تحتوي على نفس اسم الفلتر الذي تم النقر عليه أو إذا كان الفلتر "all"، وفي هذه الحالة يتم إزالة فئة "hide" لإظهار البطاقة.
        ) {
          card.classList.remove("hide");
          // هذا السطر يزيل فئة "hide" من البطاقة التي تطابق الفلتر المحدد، مما يجعلها مرئية للمستخدم.
        }
      });
    });
  });

  ScrollReveal().reveal(".car_card", {
    ...scrollRevealOption,
    interval: 300,
  });
}

// ========== WHATSAPP DOWNLOAD APP ==========
// في main.js - استبدل دالة sendToWhatsApp بـ:
/*
${carName ? `🚘 Car: ${carName}` : ""}
هذا السطر يستخدم لإضافة اسم السيارة إلى الرسالة إذا تم تمريره كمعامل إلى الدالة، مما يجعل الرسالة أكثر تخصيصًا ويوفر معلومات إضافية عن الحجز الذي يتم طلبه.

📅 Date: ${new Date().toLocaleDateString("en-EG")}
هذا السطر يضيف تاريخ اليوم إلى الرسالة باستخدام تنسيق التاريخ المحلي لمصر (en-EG)، مما يعطيك معلومات عن متى تم طلب الحجز من خلال واتساب.

🌐 Page: ${document.title}
 هذا السطر يضيف عنوان الصفحة الحالية إلى الرسالة، مما يساعدك في معرفة من أي صفحة تم إرسال طلب الحجز، سواء كانت صفحة السيارات أو صفحة الحجز، مما يسهل عليك تتبع الطلبات وفهم سياقها بشكل أفضل.
*/

function sendToWhatsApp(carName = "") {
  // هذا هو الرسالة التي سيتم إرسالها إلى واتساب، ويمكنك تخصيصها حسب احتياجاتك. يتم تضمين اسم السيارة إذا تم تمريره كمعامل، بالإضافة إلى تاريخ اليوم وعنوان الصفحة الحالية. هذا يعطيك معلومات مفيدة عن الحجز الذي تم طلبه من خلال واتساب.
  const msg = `🚗 *DriveX - New Booking Request*
${carName ? `🚘 Car: ${carName}` : ""}
📅 Date: ${new Date().toLocaleDateString("en-EG")}
🌐 Page: ${document.title}
--- 
I want to book now 🙌`;

/*
https://wa.me/201113650935?text=${encodeURIComponent(msg)}
هذا السطر يستخدم لفتح رابط واتساب مع الرسالة المشفرة في نافذة جديدة، مما يسمح للمستخدم بإرسال طلب الحجز مباشرة إلى رقم واتساب المحدد (201113650935) مع تضمين الرسالة التي تم إعدادها مسبقًا.
 encodeURIComponent(msg) يستخدم لترميز الرسالة بشكل صحيح في URL، مما يضمن أن جميع الأحرف الخاصة والمسافات يتم تمثيلها بطريقة صحيحة عند إرسالها إلى واتساب، مما يمنع حدوث أخطاء في الرابط ويضمن وصول الرسالة كما هو مقصود.
*/

  window.open(
    `https://wa.me/201113650935?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

// دالة الحجز (لربطها بصفحة الحجز)
function bookCar(carName) {
  window.location.href = `book.html?car=${encodeURIComponent(carName)}`;
}
// هذا السطر يستخدم للوصول إلى صفحة الحجز (book.html) مع تمرير اسم السيارة كمعامل في URL.
