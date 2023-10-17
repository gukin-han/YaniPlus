import { useState } from "react";

export default function Signin() {
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogInFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(logInFormData);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-300">
      <div className="p-4 rounded rounded-lg bg-white shadow-xl">
        <form className="flex flex-col gap-y-4 p-4" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="border"
              value={logInFormData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-between">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="border"
              value={logInFormData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="border">
            로그인
          </button>
        </form>
        <p>
          아직 회원이 아니신가요?
          <a href="/register" className="border m-4">
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
}
