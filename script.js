function changeTab(tabNumber) {
  let title = document.querySelector(".title");
  let text = document.querySelector(".text");
  let image = document.querySelector(".image-container img");
  let fullScreenSection = document.querySelector(".full-screen-section");

  switch (tabNumber) {
    case 1:
      title.textContent = "> FCS: Foundations of Computer Science";
      text.textContent =
        "// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.";
      image.src = "Assets/tab1.jpeg";
      fullScreenSection.style.backgroundColor = "rgb(255, 198, 53)";
      break;
    case 2:
      title.textContent = "> FSW: Full-Stack Web Development";
      text.textContent =
        "// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.";
      image.src = "Assets/tab2.jpeg";
      fullScreenSection.style.backgroundColor = "rgb(40, 238, 167)";
      break;
    case 3:
      title.textContent = "> FSD: Full-Stack Data";
      text.textContent =
        "// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.";
      image.src = "Assets/tab3.jpeg";
      fullScreenSection.style.backgroundColor = "rgb(152, 100, 218)";
      break;
    case 4:
      title.textContent = "> UIX: UI/UX Design Bootcamp";
      text.textContent =
        "// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.";
      image.src = "Assets/tab4.jpeg";
      fullScreenSection.style.backgroundColor = "rgb(251, 80, 142)";
      break;
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("testimonial-title");
  const textElement = document.getElementById("testimonial-text");
  const imageElement = document.getElementById("testimonial-image");

  const testimonials = [
    {
      title: "#",
      text: "Growing up, I saw that every girl that had taken interest in anything technical or scientific had been undermined and underestimated in her field. That isn't fair, breaking this stereotype is a must. The first step I took towards doing this was to join SEF, a bootcamp that supported diversity and inclusion.",
      image: "Assets/1.jpeg",
    },
    {
      title: "#",
      text: "Looking back, I cannot believe that only a year ago, I knew almost nothing about programming, and now I am a professional software engineer working remotely for a startup located in Norway. The boot camp was a life-changing experience for me.",
      image: "Assets/2.jpeg",
    },
    {
      title: "#",
      text: "Hiring skilled engineers has never been easy. With SE Factory, this became super easy and effective. Candidates are well-trained and we get to see their strengths before hiring, which is perfect for a growing startup.",
      image: "Assets/3.jpeg",
    },
    {
      title: "#",
      text: "Our business is expanding thanks to talented and dedicated team members that we hired through SE Factory. Looking forward to hiring more developers from them as we grow.",
      image: "Assets/4.jpeg",
    },
  ];

  let currentIndex = 0;

  function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    titleElement.textContent = testimonial.title;
    textElement.textContent = testimonial.text;
    imageElement.src = testimonial.image;

    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  updateTestimonial();
  setInterval(updateTestimonial, 5000);
});
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".show-more");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var contentContainer = button.closest(".faq-card");
      var hiddenContent = contentContainer.querySelector(".hidden-content");
      hiddenContent.style.display =
        hiddenContent.style.display === "none" ? "block" : "none";
    });
  });
});
