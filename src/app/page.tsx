import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Image src="/images3.jpeg" alt="Product display" width={200} height={200}/>
    </div>
  );
}
