import Link from "next/link";
import { NextPage } from "next";

const ViewTripPlan: NextPage = () => {
  return (
    <div>
      <div>누군가가 이미 세운 여행 계획을 확인할 수 있는 페이지입니다. 🎉</div>
      <div>
        게시자가 공개로 설정한 여행계획의 경우 누구나 이 페이지에 진입
        가능합니다. 비공개로 설정된 여행계획의 경우, 게시자 본인만 페이지 진입이
        가능합니다.
      </div>
      <Link href="/home">홈으로 돌아가기</Link>
    </div>
  );
};

export default ViewTripPlan;
