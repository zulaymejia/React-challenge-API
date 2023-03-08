/*import { render, fireEvent } from "@testing-library/react";
import AppUser from "./components/AppUser";
import { usersFecht } from "./components/AppUser";

//runny junction with jest
jest.mock("./components/AppUser", () => ({
  usersFecht: jest.fn(),
}));

//test button test show users

test("button test show users", () => {
  const sut = render(<AppUser />);
  const btnGetUsers = sut.getByTestId("btnGeUsers");
  fireEvent.click(btnGetUsers);

//checking if when we click the function is executed
  expect(usersFecht).toHaveBeenCalled();
});*/
