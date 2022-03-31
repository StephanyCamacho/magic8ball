let answers = () => {
    responses = [
        'images/magic8ball_1.png',
        'images/magic8ball_2.png',
        'images/magic8ball_3.png',
        'images/magic8ball_4.png',
        'images/magic8ball_5.png',
        'images/magic8ball_6.png',
        'images/magic8ball_7.png',
        'images/magic8ball_8.png',
        'images/magic8ball_9.png',
      ];

      response = responses[Math.floor(Math.random() * responses.length)];
      document.getElementById('answersDiv').innerHTML = response;
}