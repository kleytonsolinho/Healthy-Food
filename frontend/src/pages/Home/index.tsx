import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={handleClose} />
      <Navbar toggle={handleClose} />
    </>
  )
}