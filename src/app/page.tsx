import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LogoWithTextVertical from "@assets/logo-with-text-vertical.png";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10%",
        }}
      >
        <Image
          src={LogoWithTextVertical}
          alt="logo"
          style={{
            width: "100%",
            height: "auto",
            alignSelf: "center",
          }}
        />
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "10%",
        }}
      >
        <h1 style={{ color: "#0B0B0B" }}>
          쉽고 빠르게 나만의 여행 계획을 세우고, 주변에 공유하세요!
        </h1>
        <h2 style={{ color: "#30D5C8" }}>지금 바로 가입하세요🎉</h2>
        <Link href="auth/sign-up">계정 만들기</Link>
        <h3>이미 가입된 계정이 있으신가요?</h3>
        <Link href="auth/login">로그인 하기</Link>
      </div>
    </div>
  );
}
