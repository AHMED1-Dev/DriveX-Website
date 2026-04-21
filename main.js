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
    fleet1content.forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      duplicateNode.setAttribute("aria-hidden", true);
      fleet1.appendChild(duplicateNode);
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
      const carName = button.parentElement.querySelector("h3").textContent;
      window.location.href = `book.html?car=${encodeURIComponent(carName)}`;
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
      const formData = new FormData(bookingForm);
      // تحويل FormData إلى كائن عادي لسهولة العرض أو الإرسال
      const data = Object.fromEntries(formData.entries());
      // يعني لو عايز تضيف حاجة زي "car" في البيانات اللي هتتبعت، ممكن تعملها كده:

      alert(
        "✅ Thank you! Your booking request has been submitted successfully.",
      );
      
      console.log("Booking Data:", data);
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const selectedCar = urlParams.get("car");

  if (selectedCar) {
    const carSelect = document.querySelector('select[name="car"]');
    if (carSelect) {
      carSelect.value = selectedCar.toLowerCase().replace(/\s+/g, "-");
    }
  }

  const pickupDate = document.querySelector('input[name="pickup-date"]');
  const returnDate = document.querySelector('input[name="return-date"]');

  if (pickupDate && returnDate) {
    pickupDate.addEventListener("change", () => {
      returnDate.min = pickupDate.value;
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
  window.scrollTo(0, 0);
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
  const specsEl = document.getElementById("modalEngine"); // تأكد إن الـ ID ده موجود في HTML
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

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./cars.json");
myRequest.send();
let cars = document.querySelector(".cars_container");

myRequest.onload = function () {
  if (myRequest.status === 200) {
    let carsData = JSON.parse(myRequest.responseText);
    console.log(carsData);
    let div = document.createElement("div");
    div.className = "cars_grid";
    for (let i = 0; i < carsData.length; i++) {
      let carDiv = document.createElement("div");
      carDiv.className = "car_card";
      carDiv.setAttribute("data-name", carsData[i].brand);
      let img = document.createElement("img");
      img.src = carsData[i].img;
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = carsData[i].name;
      let div_car_info = document.createElement("div");
      div_car_info.className = "car_info";
      let h3 = document.createElement("h3");
      h3.textContent = carsData[i].name;
      let p = document.createElement("p");
      p.className = "car_price";
      p.textContent = carsData[i].rentalPrice;
      let ul = document.createElement("ul");
      ul.className = "car_specs";
      let li1 = document.createElement("li");
      li1.innerHTML = `<i class="ri-user-3-line"> ${carsData[i].Seats}</i>`;
      let li2 = document.createElement("li");
      li2.innerHTML = `<i class="ri-suitcase-2-line"> ${carsData[i].Bags}</i>`;
      let li3 = document.createElement("li");
      li3.innerHTML = `<i class="ri-speed-line"> ${carsData[i].Transmission}</i>`;
      let div_car_btns = document.createElement("div");
      div_car_btns.className = "car-btns";
      let button1 = document.createElement("button");
      button1.className = "btn btn-outline";
      button1.innerHTML = `<i class="ri-information-line"></i> Details`;
      button1.onclick = function () {
        openDetails(
          carsData[i].name,
          carsData[i].img,
          carsData[i].engine,
          carsData[i].topSpeed,
          carsData[i].Seats,
          carsData[i].Transmission,
          carsData[i].rentalPrice,
          carsData[i].purchasePrice,
        );
      };
      let button2 = document.createElement("button");
      button2.className = "btn";
      button2.innerHTML = `<span><i class="ri-check-line"></i></span>  Book Now`;
      button2.onclick = function () {
        bookCar(carsData[i].name);
      };

      div.appendChild(carDiv);
      carDiv.appendChild(img);
      carDiv.appendChild(div_car_info);
      div_car_info.appendChild(h3);
      div_car_info.appendChild(p);
      div_car_info.appendChild(ul);
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      div_car_info.appendChild(div_car_btns);
      div_car_btns.appendChild(button1);
      div_car_btns.appendChild(button2);
    }
    if (cars) {
      cars.appendChild(div);
    }

    // ============================
    // 10. CAR FILTER FUNCTIONALITY
    // ============================
    // Select all filter buttons and car cards
    let fillterButtons = document.querySelectorAll(".fillter_buttons button");
    let carsgrid = document.querySelectorAll(".cars_grid .car_card");

    console.log(fillterButtons, carsgrid);

    // Function to handle filter button click
    const filltercards = (e) => {
      document.querySelector(".active")?.classList.remove("active");
      // Add active class to clicked button
      e.target.classList.add("active");

      console.log(e.target.dataset.name);

      // Loop through all car cards
      carsgrid.forEach((card) => {
        // Hide all cards first
        card.classList.add("hide");

        // Show cards that match the filter
        if (
          card.dataset.name === e.target.dataset.name ||
          e.target.dataset.name === "all"
        ) {
          card.classList.remove("hide");
        }
      });
    };

    // Add Click Event Listener to Each Filter Button
    fillterButtons.forEach((button) =>
      button.addEventListener("click", filltercards),
    );
    ScrollReveal().reveal(".car_card", {
      ...scrollRevealOption,
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      interval: 300,
    });
  }
};

// أضف في main.js قبل // ========== WHATSAPP
window.addEventListener("load", () => {
  document.getElementById("preloader")?.classList.add("hidden");
});
// ========== WHATSAPP DOWNLOAD APP ==========
// في main.js - استبدل دالة sendToWhatsApp بـ:
function sendToWhatsApp(carName = "") {
  const msg = `🚗 *DriveX - طلب جديد*

${carName ? `🚘 السيارة: ${carName}` : ""}

👤 العميل: ${localStorage.getItem("userName") || "غير محدد"}
📱 الواتساب: 01113650935
🌐 الصفحة: ${document.title}
📅 ${new Date().toLocaleDateString("ar-EG")}

---
*أريد الحجز الآن* 🙌`;
  window.open(
    `https://wa.me/201113650935?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

// إغلاق المودال عند الضغط خارجه
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// دالة الحجز (لربطها بصفحة الحجز)
function bookCar(carName) {
  window.location.href = `book.html?car=${encodeURIComponent(carName)}`;
}
