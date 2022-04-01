let answers = () => {
    
    // imageResponses = [
    //     'magic8ball_1.png',
    //     'magic8ball_2.png',
    //     'magic8ball_3.png',
    //     'magic8ball_4.png',
    //     'magic8ball_5.png',
    //     'magic8ball_6.png',
    //     'magic8ball_7.png',
    //     'magic8ball_8.png',
    //     'magic8ball_9.png',
    //   ];

    let imageResponses = [];

    var image = new Image();
    image.src = 'Images/magic8ball_1.png';
    image.src = 'Images/magic8ball_2.png';
    image.src = 'Images/magic8ball_3.png';
    image.src = 'Images/magic8ball_4.png';
    image.src = 'Images/magic8ball_5.png';
    image.src = 'Images/magic8ball_6.png';
    image.src = 'Images/magic8ball_7.png';
    image.src = 'Images/magic8ball_8.png';
    image.src = 'Images/magic8ball_9.png';
    image.src = 'Images/magic8ball_10.png';
    image.src = 'Images/magic8ball_11.png';
    image.src = 'Images/magic8ball_12.png';
    image.src = 'Images/magic8ball_13.png';
    image.src = 'Images/magic8ball_14.png';

    imageResponses.push(image);
    
    response = imageResponses[Math.floor(Math.random() * imageResponses.length)];
   
    document.getElementById('answersDiv').append(response)

    console.log(response)
}