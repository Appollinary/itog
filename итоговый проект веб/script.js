document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        {
            title: "HTML и CSS",
            type: "Frontend",
            level: "Начальный",
            duration: "1 месяц",
            image: "/images/css.jpeg"
        },
        {
            title: "JavaScript",
            type: "Frontend",
            level: "Средний",
            duration: "2 месяца",
            image: "/images/js.png"
        },
        {
            title: "React",
            type: "Frontend",
            level: "Продвинутый",
            duration: "3 месяца",
            image: "/images/react.png"
        },
        {
            title: "Python",
            type: "Backend",
            level: "Начальный",
            duration: "2 месяца",
            image: "/images/ph.jpeg"
        },
        {
            title: "Django",
            type: "Backend",
            level: "Средний",
            duration: "3 месяца",
            image: "/images/gj.png"
        },
        {
            title: "Node.js",
            type: "Backend",
            level: "Средний",
            duration: "2 месяца",
            image: "/images/node.png"
        },
        {
            title: "SQL",
            type: "Backend",
            level: "Начальный",
            duration: "1 месяц",
            image: "/images/sql.png"
        },
        {
            title: "Git",
            type: "Frontend",
            level: "Начальный",
            duration: "2 недели",
            image: "/images/git.png"
        }
    ];

    const cardsContainer = document.getElementById("cards");
        const tableBody = document.getElementById("tableBody");
        const filterButtons = document.querySelectorAll(".filter-btn");

        function renderCards(list) {
            cardsContainer.innerHTML = "";

            list.forEach(course => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <div class="card-image">
                        <img src="${course.image}" alt="${course.title}">
                    </div>
                    <h3>${course.title}</h3>
                    <p>Направление: ${course.type}</p>
                    <p>Уровень: ${course.level}</p>
                    <p>Длительность: ${course.duration}</p>
                `;

                cardsContainer.appendChild(card);
            });
        }

        function renderTable(list) {
            tableBody.innerHTML = "";

            list.forEach((course, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${course.title}</td>
                    <td>${course.type}</td>
                    <td>${course.level}</td>
                    <td>${course.duration}</td>
                `;

                row.addEventListener("click", () => {
                    document.querySelectorAll("tbody tr")
                        .forEach(r => r.classList.remove("active"));
                    row.classList.add("active");
                });

                tableBody.appendChild(row);
            });
        }

        function applyFilter(filter) {
            const filtered = filter === "all"
                ? courses
                : courses.filter(c => c.type === filter);

            renderCards(filtered);
            renderTable(filtered);
        }

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                applyFilter(btn.dataset.filter);
            });
        });

        /* 🔥 ГЛАВНОЕ — начальная отрисовка */
        applyFilter("all");

    });