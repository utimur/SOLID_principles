// const createStore = (initial: any) => {}
// const initialData = () => {}
//
// enum Route {
//   ABOUT='about_page',
//   HOME='home_page',
// }
//
// interface Router {
//   parseUrl: (url) => void;
//   addQueryParams: (params: Record<string, string>) => void;
// }
//
// interface IClientRouter extends Router {
//   navigate: (route: Route) => void;
//   attachEventListeners: () => void;
// }
//
// interface IServerRouter extends Router {
//   prepareUrlForClient: (url: string) => void;
// }
//
// class ServerRouter implements IServerRouter {
//   parseUrl(url): void {}
//   addQueryParams(params: Record<string, string>): void {}
//   prepareUrlForClient(url: string): void {}
// }
//
// class ClientRouter implements IClientRouter {
//   addQueryParams(params: Record<string, string>): void {}
//   parseUrl(url): void {}
//   attachEventListeners(): void {}
//   navigate(route: Route): void {}
// }
//
// const createDependencyContainer = (router: Router, store) => {
//   return {
//     getRouter: () => router,
//     getStore: () => store,
//   }
// }
//
// const renderHtmlPage = (store: any, url: any) => {
// }
//
// const client = () => {
//   const store = createStore(initialData);
//   const router = new ClientRouter();
//
//   const di = createDependencyContainer(router, store);
// }
//
// const server = (req, res) => {
//   const store = createStore(initialData);
//   const router = new ServerRouter();
//
//   const di = createDependencyContainer(router, store);
//
//   const htmlPage = renderHtmlPage(store, req.url)
// }
//

enum Route {
  ABOUT='about_page',
  HOME='home_page',
}

interface UrlParser {
  parseUrl: (url) => void;
  addQueryParams: (params: Record<string, string>) => void;
}

interface Router {
  navigate: (route: Route) => void;
  attachEventListeners: () => void;
}

interface UrlPreparer {
  prepareUrlForClient: (url: string) => void;
}

class ServerRouter implements UrlParser, UrlPreparer {
  parseUrl(url): void {}
  addQueryParams(params: Record<string, string>): void {}
  prepareUrlForClient(url: string): void {}
}

class ClientRouter implements Router, UrlParser {
  addQueryParams(params: Record<string, string>): void {}
  parseUrl(url): void {}
  attachEventListeners(): void {}
  navigate(route: Route): void {}
}
