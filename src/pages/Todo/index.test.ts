import React from "react";

import { Todo } from "./index";

describe("Todo", () => {
  it("renders", () => {
    expect(Todo).toBeTruthy();
  }, 1000);
});

// snapshot test

describe("Todo", () => {
  it("renders", () => {
    expect(Todo).toMatchSnapshot();
  }, 1000);
});
