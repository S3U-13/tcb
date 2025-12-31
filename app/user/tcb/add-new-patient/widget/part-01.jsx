import { Input } from "@heroui/input";
import { div } from "framer-motion/client";
import React from "react";

export default function Part01() {
  return (
    <div>
      <div className="border border-divider rounded-t-lg p-4 space-y-4">
        <h1>ข้อมูลผู้ป่วยมะเร็ง</h1>
        <div className="mx-auto w-350 grid grid-cols-10 gap-x-1">
          <div className="space-y-4  text-right col-span-1">
            <p>สถานพยาบาล :</p>
            <p>ชื่อ-สกุล :</p>
            <p>เพศ :</p>
            <p>ที่อยู่ :</p>
            <p>โทรศัพท์ 1 :</p>
          </div>
          <div className="space-y-4  text-left col-span-4">
            <p>สถานพยาบาล :</p>
            <p>ชื่อ-สกุล :</p>
            <p>เพศ :</p>
            <p>ที่อยู่ :</p>
            <p>โทรศัพท์ 1 :</p>
          </div>

          <div className="space-y-4 text-right col-span-1">
            <p>HN :</p>

            <p>เลขบัตรประชาชน :</p>

            <p>ว/ด/ป เกิด (พ.ศ.) :</p>

            <p>email :</p>

            <p>โทรศัพท์ 2 :</p>
          </div>
          <div className="space-y-4 text-left col-span-4">
            <p>HN :</p>

            <p>เลขบัตรประชาชน :</p>

            <p>ว/ด/ป เกิด (พ.ศ.) :</p>

            <p>email :</p>

            <p>โทรศัพท์ 2 :</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-r border-l border-b border-divider">
        <h1>ข้อมูลโรคมะเร็ง</h1>
        <div className="grid grid-cols-3 gap-4">
          <Input
            label="26.วันที่รับบริการ รพ.ท่านด้วยโรคมะเร็งครั้งเเรก (พ.ศ):*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="27.วันที่ปัจจุบัน ณ วันที่รับบริการ รพ. (พ.ศ.):*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="28.สิทธิการรักษา:*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="29.ว/ป/ด ที่วินิจฉัย (พ.ศ.):*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="30.วิธีวินิจฉัย:*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="24."
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="24."
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="24."
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="24."
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
        </div>
      </div>
    </div>
  );
}
