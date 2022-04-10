import { useRouter } from "next/router";
import React, { useState } from "react";

function useAuth() {
  return {
    loading: false,
    loggedIn: false,
  }
}

async function handleLogin(email: string, password: string) {
  const resp = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resp.json();

  if (data.success) {
    return;
  }

  throw new Error("Wrong email or password");
}

function Login() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);
  const { loading, loggedIn } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = (event.target as any).elements;

    setLoginError(null);
    handleLogin(email.value, password.value)
      .then(() => router.push("/protected-route"))
      .catch((err) => setLoginError(err.message));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && loggedIn) {
    router.push("/protected-route");
    return null;
  }

  return (
    <div className="m-auto p-4 max-w-xs sm:max-w-sm md:max-w-md w-screen bg-violet-200 rounded-lg ring-2 ring-violet-500 shadow-md shadow-gray-700 sm:p-6 lg:p-8">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 text-center">
          Sign in
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 outline-violet-600 border-violet-500 border-2 placeholder-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 outline-violet-600 border-violet-500 border-2 placeholder-gray-500 text-gray-900 text text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-violet-300 accent-violet-500"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="ml-auto text-sm text-violet-900 hover:underline"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white ring-2 ring-violet-400 bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-600">
          Not registered?{" "}
          <a href="#" className="text-violet-700 hover:underline">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
