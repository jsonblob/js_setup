import Sum from "./Sum";

test("print", () => {
  const sum = new Sum();
  expect(sum.print("a")).toBe("a");
});
