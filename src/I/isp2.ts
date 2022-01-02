interface Router {
  parseUrl: (url) => void;
  addQueryParams: (params: Record<string, string>) => void;
}

interface HttpRequest {
  get: () => void;
  post: () => void;
  put: () => void;
  delete: () => void;
}

interface TokenStorage {
  addToken: () => void;
  getToken: () => void;
}

// Внутри используем axios или http module
class ServerHttp implements HttpRequest {
  delete(): void {}
  get(): void {}
  post(): void {}
  put(): void {}
}

// Внутри используем fetch
class ClientHttp implements HttpRequest, TokenStorage {
  delete(): void {}
  get(): void {}
  post(): void {}
  put(): void {}

  addToken(): void {
    return localStorage.get('token')
  }
  getToken(): void {}
}

const createDependencyContainer = (router: Router, store, httpRequest: HttpRequest) => {
  return {
    getRouter: () => router,
    getStore: () => store,
    getRequest: () => httpRequest,
  }
}
