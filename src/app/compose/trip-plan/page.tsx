import Link from "next/link";
import { NextPage } from "next";

const ComposeTripPlan: NextPage = () => {
  return (
    <div>
      <div>여행 계획을 세우는 페이지입니다. 🎉</div>
      <div>
        이 페이지는 추후 로그인된 회원만 진입 가능하게 설정할 예정입니다.
      </div>
      <Link href="/home">홈으로 돌아가기</Link>
    </div>
  );
};

export default ComposeTripPlan;
