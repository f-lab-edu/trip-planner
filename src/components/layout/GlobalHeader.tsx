import { useRouter } from "next/navigation";

interface IProps {
  test?: any;
}

export const GlobalHeader = (props: IProps) => {
  const router = useRouter();
  return (
    <div>
      <div onClick={() => router.push("/home")}>피드</div>
      <div onClick={() => router.push("/auth/login")}>로그인</div>
      <div onClick={() => router.push("/auth/sign-up")}>회원가입</div>
      <div>내 정보</div>
    </div>
  );
};
