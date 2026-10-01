const moveJoinButton = () => {
  const article = document.querySelector(".md-content__inner");
  const joinButton = article?.querySelector(":scope > #join-meeting");
  const heading = article?.querySelector(":scope > h1");

  if (!joinButton || !heading) return;

  const introduction = heading.nextElementSibling;
  if (introduction?.tagName === "P") {
    introduction.after(joinButton);
  } else {
    heading.after(joinButton);
  }
};

moveJoinButton();
if (typeof document$ !== "undefined") document$.subscribe(moveJoinButton);