import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>
        존재하지 않는 페이지입니다. 홈으로 이동하시려면 아래 버튼을
        클릭해주세요.
      </div>
      <Link href="/home">홈으로 가기</Link>
    </div>
  );
};

export default NotFound;
