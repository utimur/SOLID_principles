
interface MusicApi {
  getTracks: () => void;
}

class YandexMusicApi implements MusicApi {
  getTracks(): void {}
}

class SpotifyApi implements MusicApi {
  getTracks(): void {}
}

class VKMusicApi implements MusicApi {
  getTracks(): void {}
}

class MusicClient implements MusicApi {
  client: MusicApi;

  constructor(client: MusicApi) {
    this.client = client;
  }

  getTracks() {
    this.client.getTracks();
  }
}

const MusicApp = () => {
  const API = new MusicClient(new SpotifyApi())

  API.getTracks()
}


interface HttpClient {

}


class Axios implements HttpClient {
  request() {
    fetch
    XMLHttpRequest()
    node-fetch
    node http module
  }
}


