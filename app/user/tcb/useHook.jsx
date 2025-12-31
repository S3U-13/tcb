"use client";
import React, { useState } from "react";

export default function useHook() {
  const [openModalAddPatient, setOpenModalAddPatient] = useState(false);
  return { openModalAddPatient, setOpenModalAddPatient };
}
