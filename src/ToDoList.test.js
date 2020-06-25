import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ToDoList from "./ToDoList";
import { fireEvent } from "@testing-library/react"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("must a todo list with 0 items", () => {
  act(() => {
    render(<ToDoList />, container);
  });

  let title = container.querySelector("h1");

  expect(title.textContent).toBe("to-do (0)");
});


it("must increment item if added and submitted", () => {
  act(() => {
    render(<ToDoList />, container);
  });

  let title = container.querySelector("h1");
  let submitButton = container.querySelector("[data-testid='submitBtn']");
  let input = container.querySelector("input");

  input.value = "item 1";
  fireEvent.click(submitButton);

  expect(title.textContent).toBe("to-do (1)");

  let li = container.querySelector("li");
  expect(li.textContent).toBe("item 1");
});

it("must remove item clicked upon", () => {
  act(() => {
    render(<ToDoList />, container);
  });

  let title = container.querySelector("h1");
  let submitButton = container.querySelector("[data-testid='submitBtn']");
  let input = container.querySelector("input");

  input.value = "item 1";
  fireEvent.click(submitButton);

  input.value = "item 2";
  fireEvent.click(submitButton);

  let li = container.querySelector("li");

  fireEvent.click(li);
  expect(title.textContent).toBe("to-do (1)");
});