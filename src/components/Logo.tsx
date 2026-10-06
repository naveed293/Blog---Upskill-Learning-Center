interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <img
      src="https://upskillacademy.tech/upskillLogos/blueLogoBack.png"
      alt="Upskill Online"
      className={className}
      loading="eager"
    />
  );
}