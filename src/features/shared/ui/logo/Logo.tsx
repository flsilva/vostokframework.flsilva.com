import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  readonly onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <h1 className="flex">
    <Link href="/" onClick={onClick}>
      <Image
        src="/images/logo@2x.png"
        alt="AS3CoreAddendum"
        width={173}
        height={86}
      />
    </Link>
  </h1>
);
