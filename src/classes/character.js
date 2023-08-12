export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя не должно быть менее 2х или более 10 символов');
    }
    if (!(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type))) {
      throw new Error('Данный тип несуществует');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
