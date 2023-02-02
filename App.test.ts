import React from "react";

import App from "./App";

describe("App", () => {
  it("renders", () => {
    expect(App).toBeTruthy();
  }, 1000);
});

// snapshot test

describe("App", () => {
  it("renders", () => {
    expect(App).toMatchSnapshot();
  }, 1000);
});
