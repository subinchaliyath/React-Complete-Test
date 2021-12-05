import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginScreen from "./LoginScreen";












// test('login screen submit button disabled initialy', () => {
//     render(<LoginScreen />);
//     // screen.debug();
//     // screen.getByRole('');
//     expect(screen.getByRole('button',{name: /submit/i})).toBeEnabled();
// });

test('login screen submit button disabled initialy', async () => {
    render(<LoginScreen/>);
    // expect(await screen.findByRole('button',{name: /submit/i})).toBeEnabled();
    expect(await screen.findByRole('button', { name: /submit/i })).toBeDisabled();
});

test('login screen submit button enabled after valid input', async () => {
    render(<LoginScreen />);
    userEvent.type(screen.getByPlaceholderText(/First Name/i), "subin");
    userEvent.type(screen.getByPlaceholderText(/Email Address/i), "subin@gmail.com");
    // expect(await screen.findByRole('button',{name: /submit/i})).toBeDisabled();
    expect(await screen.findByRole('button', { name: /submit/i })).toBeEnabled();
});

// integration test

test('login screen submit button initialy disabled and enabled after valid input', async () => {
    render(<LoginScreen />);
    expect(await screen.findByRole('button', { name: /submit/i })).toBeDisabled();
    userEvent.type(screen.getByPlaceholderText(/First Name/i), "subin");
    expect(await screen.findByRole('button', { name: /submit/i })).toBeDisabled();
    userEvent.type(screen.getByPlaceholderText(/Email Address/i), "subin@gmail.com");
    // expect(await screen.findByRole('button',{name: /submit/i})).toBeDisabled();
    expect(await screen.findByRole('button', { name: /submit/i })).toBeEnabled();
});