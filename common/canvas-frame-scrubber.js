const CanvasFrameScrubber = (() => {
  const create = (context, frames) => {
    let currentFrame = 0;

    const observer = {
      next: (percentage) => {
        const frameIndex = Math.floor((percentage * (frames.length - 1)) / 100);

        if (currentFrame === frameIndex) return;

        window.requestAnimationFrame(() => {
          // THIS IS ADDED TO SCRUB OLD PNG
          const canvas = document.querySelector(".canvas");
          const context = canvas.getContext("2d");
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(frames[frameIndex], 0, 0);
        });
      },
    };

    return observer;
  };

  return {
    create: create,
  };
})();
