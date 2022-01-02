// open–closed principle
// Принцип открытости/закрытости


class Sort {
  public static sort(array: any[]): any[] {return []}
}

class BubbleSort extends Sort{
  public static sort(array: any[]): any[] {
    return array;
  }
}

class QuickSort extends Sort {
  public static sort(array: any[]): any[] {
    return array;
  }
}

class MergeSort extends Sort {
  public static sort(array: any[]): any[] {
    return array;
  }
}

class SortClient extends Sort{
  public static sort(array: any[]): any[] {
    if(array.length < 10) {
      return BubbleSort.sort(array);
    } else if (array.length < 1000 ) {
      return MergeSort.sort(array);
    } else {
      return QuickSort.sort(array)
    }
  }
}

class Person {
  fullname: string;

  constructor(fullname: string) {
    this.fullname = fullname;
  }
}

class PersonList {
  persons: Person[]

  constructor(persons: Person[]) {
    this.persons = persons;
  }
  sort() {
    SortClient.sort(this.persons)
  }
}

class Music {}

class MusicList {
  musics: Music[]
  constructor(musics: Music[]) {
    this.musics = musics;
  }

  sort() {
    SortClient.sort(this.musics)
  }
}
