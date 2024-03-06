import Link from "next/link";
import { NextPage } from "next";

const LogIn: NextPage = () => {
  return (
    <div>
      <div>로그인 페이지 입니다. 🎉</div>
      <div>가입된 계정이 없다면, 아래 회원가입 페이지로 이동해주세요!</div>
      <Link href="/sign-up">회원가입</Link>
    </div>
  );
};

export default LogIn;
