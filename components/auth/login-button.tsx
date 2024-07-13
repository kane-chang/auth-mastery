"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps) => {
  
  const onClick=()=>{
    console.log("clicked");
    
  }

  if (mode === "modal") {
    return (
      <span>Return a modal here</span>
    )
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}