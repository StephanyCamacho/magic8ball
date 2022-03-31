
let answers = () => {
    
    imageResponses = [
        'magic8ball_1.png',
        'magic8ball_2.png',
        'magic8ball_3.png',
        'magic8ball_4.png',
        'magic8ball_5.png',
        'magic8ball_6.png',
        'magic8ball_7.png',
        'magic8ball_8.png',
        'magic8ball_9.png',
      ];


      response = imageResponses[Math.floor(Math.random() * imageResponses.length)];
      document.getElementById('answersDiv').innerHTML = response;

   
}