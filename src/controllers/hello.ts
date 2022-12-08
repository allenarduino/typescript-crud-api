interface HelloResponse {
  message: string;
}

export default class HelloController {
  public async getMessage(): Promise<HelloResponse> {
    return {
      message: 'Hello Allen Jones',
    };
  }
}
