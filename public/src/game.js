var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
  game.load.image('background', 'asset/tileBackground.png');
  game.load.image('mushroom', 'asset/sprites/mushroom2.png');
  game.load.image('ball', 'asset/sprites/green_ball.png');
  game.load.atlasJSONHash('bot', 'asset/sprites/running_bot.png', 'asset/sprites/running_bot.json');
}

var cursors;

function create() {
  width = 600;
  height = 600;
  game.stage.backgroundColor = '#2d2d2d';

  //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
  game.world.setBounds(0, 0, 2000, 2000);
  var background = game.add.tileSprite(-width, -height, game.world.width, game.world.height, 'background');
  for (var i = 0; i < 150; i++)
  {
    sprite = game.add.sprite(game.world.randomX, game.world.randomY, 'mushroom');
  }
  sprite = game.add.sprite(400 , 300, 'bot');
  sprite.animations.add('run');
  sprite.animations.play('run', 15, true);
  changeTint();
  game.camera.follow(sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  cursors = game.input.keyboard.createCursorKeys();

}

function changeTint() {

  sprite.tint = Math.random() * 0xffffff;

}

function update() {

  if (cursors.up.isDown) {
    sprite.position.y -= 4;
  }
  else if (cursors.down.isDown) {
    sprite.position.y += 4;
  }

  if (cursors.left.isDown) {
    sprite.position.x -= 4;
  }
  else if (cursors.right.isDown) {
    sprite.position.x += 4;
  }

}

function render() {

  game.debug.cameraInfo(game.camera, 32, 32);

}
