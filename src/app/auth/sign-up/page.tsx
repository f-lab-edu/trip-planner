import Link from "next/link";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <div>
      <div>회원가입 페이지 입니다. 🎉</div>
      <div>이미 가입되어 계시다면, 아래 로그인 페이지로 이동해주세요!</div>
      <Link href="/login">로그인</Link>
    </div>
  );
};

export default SignUp;
