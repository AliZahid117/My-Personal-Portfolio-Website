class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        this.load.image('startScreen', './Assets/start.webp');
    }

    create() {
        const background = this.add.image(0, 0, 'startScreen');
        background.setOrigin(0);
        background.setScale(0.5);

        this.input.on('pointerup', () => {
            this.scene.start('GameScene');
            this.scene.stop('StartScene');
        });
    }
}
