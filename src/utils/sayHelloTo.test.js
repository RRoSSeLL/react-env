const expect = require('chai').expect;

import { sayHelloTo } from "./sayHelloTo";

describe("Hello Test", () => {

  it('Greets "Me"', () => {
    expect(sayHelloTo("Me")).to.equal("Hello Me!");
  });

  it('Greets the World', () => {
    expect(sayHelloTo()).to.equal("Hello World!");
  });
});