// Single Responsibility Principle
// Принцип единственной ответственности
class HttpClient {
  get(url: string) {}
  post() {}
  put() {}
  delete() {}
}

class UserService {
  client: HttpClient;
  constructor(client) {
      this.client = client;
  }
  getOneUser(id: number) {}
  getAllUsers() {}
}

class RequisitesService {
  createRequisites() {}
  getRequisites() {}
  updateRequisites() {}
}



