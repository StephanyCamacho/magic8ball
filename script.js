let answers = () => {
    
    const imageResponses = [
        'magic8ball_1.png',
        'magic8ball_2.png',
        'magic8ball_3.png',
        'magic8ball_4.png',
        'magic8ball_5.png',
        'magic8ball_6.png',
        'magic8ball_7.png',
        'magic8ball_8.png',
        'magic8ball_9.png',
        'magic8ball_10.png',
        'magic8ball_11.png',
        'magic8ball_12.png',
        'magic8ball_13.png',
        'magic8ball_14.png',
        'magic8ball_15.png',
        'magic8ball_16.png',
        'magic8ball_17.png',
        'magic8ball_18.png',
        'magic8ball_19.png',
        'magic8ball_20.png',
      ];

    // let imageResponses = [];

    var image = new Image();
    // image.src = 'Images/magic8ball_1.png';
    // image.src = 'Images/magic8ball_2.png';
    // image.src = 'Images/magic8ball_3.png';
    // image.src = 'Images/magic8ball_4.png';
    // image.src = 'Images/magic8ball_5.png';
    // image.src = 'Images/magic8ball_6.png';
    // image.src = 'Images/magic8ball_7.png';
    // image.src = 'Images/magic8ball_8.png';
    // image.src = 'Images/magic8ball_9.png';
    // image.src = 'Images/magic8ball_10.png';
    // image.src = 'Images/magic8ball_11.png';
    // image.src = 'Images/magic8ball_12.png';
    // image.src = 'Images/magic8ball_13.png';
    // image.src = 'Images/magic8ball_14.png';

    // imageResponses.push(image);
    
    image.src = `./Images/${imageResponses[Math.floor(Math.random() * imageResponses.length)]}`;
   
    document.getElementById('8ballImages').src = image.src;

    // console.log(response)
}