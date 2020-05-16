window.onload = function () {
  Particles.init({
    selector: '.overlay',
    color: '#F8F9FA',
    maxParticles: 150,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 812,
        options: {
          maxParticles: 40,
        },
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 30,
        },
      },
    ],
  });
};
