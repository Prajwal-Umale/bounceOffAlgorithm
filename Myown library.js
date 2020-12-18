function bounceOff(body1,body2){
    if (body1.x - body2.x < body2.width/2 + body1.width/2
      && body2.x - body1.x < body2.width/2 + body1.width/2) {
        body1.velocityX = body1.velocityX * (-1);
        body2.velocityX = body2.velocityX * (-1);
  }
  if (body1.y -body2.y < body1.height/2 + body2.height/2
    && body2.y - body1.y < body1.height/2 + body2.height/2){
    body1.velocityY = body1.velocityY * (-1);
    body2.velocityY = body2.velocityY * (-1);
  }
  }

  function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;
  }
    else {
        return false;
    }
  }