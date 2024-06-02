import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={200} height={200} priority alt="" />
    </Link>
  );
};

export default Logo;
