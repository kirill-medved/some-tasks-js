class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(name) {
    super(name);
  }
}

class Box extends Entity {
  _stuff = [];
  constructor(name) {
    super(name);
  }

  get stuff() {
    return this._stuff;
  }

  set stuff(stuff) {
    this._stuff.push(stuff);
  }
}

class User extends Entity {
  _box = [];
  constructor(name) {
    super(name);
  }
  get box() {
    return this._box;
  }

  set box(box) {
    this._box.push(box);
  }
}

const user = new User('Kirill');
const books = new Box('books');
const bookOne = new Stuff('Voina i Mir');
const bookTwo = new Stuff('Kolobok');
const tesla = new Stuff('Tesla');
const cars = new Box('car');

books.stuff = bookOne;
books.stuff = bookTwo;
user.box = books;

cars.stuff = tesla;
user.box = cars;
