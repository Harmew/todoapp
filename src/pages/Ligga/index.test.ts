import React from "react";
import { Ligga } from "./index";

describe("Ligga", () => {
  it("renders", () => {
    expect(Ligga).toBeTruthy();
  }, 1000);
});

// snapshot test

describe("Ligga", () => {
  it("renders", () => {
    expect(Ligga).toMatchSnapshot();
  }, 1000);
});
