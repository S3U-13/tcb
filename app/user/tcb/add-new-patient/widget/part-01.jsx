import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { Radio, RadioGroup } from "@heroui/radio";
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
        <div className="grid grid-cols-3 gap-4 items-center">
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
          <RadioGroup
            label=""
            orientation="horizontal"
            classNames={{ wrapper: "px-2" }}
          >
            <Radio value="out-hos">นอก รพ.</Radio>
            <Radio value="in-hos">ใน รพ.</Radio>
          </RadioGroup>
          <Input
            label="31.ว/ป/ด ที่ตัดชิ้นเนื้อ เพื่อวินิจฉัย (พ.ศ.):*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="32.ว/ป/ด ที่อ่านชิ้นเนื้อ (พ.ศ.):*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="33.Topography:*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <div className="flex items-center gap-2">
            <p>34.</p>
            <CheckboxGroup label="" orientation="">
              <Checkbox value="Recurrent">Recurrent</Checkbox>
            </CheckboxGroup>
            <Input
              className="ml-6"
              label="35.Topography:*"
              size="lg"
              type="text"
              labelPlacement="outside-top"
              radius="sm"
              variant="bordered"
            />
          </div>
          <Input
            label="36.Morphology:*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <Input
            label="37.Behaviour:*"
            size="lg"
            type="text"
            labelPlacement="outside-top"
            radius="sm"
            variant="bordered"
          />
          <div className="grid grid-cols-10 gap-4 items-center col-span-3">
            <Input
              className="col-span-2"
              label="38.Grade:*"
              size="lg"
              type="text"
              labelPlacement="outside-top"
              radius="sm"
              variant="bordered"
            />
            <div className="col-span-4 grid grid-cols-3 gap-4">
              <Input
                className=""
                label="39.T-N-M:*"
                size="lg"
                type="text"
                labelPlacement="outside-top"
                radius="sm"
                variant="bordered"
              />
              <Input
                className=" mt-8"
                label=""
                size="lg"
                type="text"
                labelPlacement="outside-top"
                radius="sm"
                variant="bordered"
              />
              <Input
                className=" mt-8"
                label=""
                size="lg"
                type="text"
                labelPlacement="outside-top"
                radius="sm"
                variant="bordered"
              />
            </div>

            <Input
              className="col-span-2"
              label="40.ว/ป/ด TNM/Stage (พ.ศ.):*"
              size="lg"
              type="text"
              labelPlacement="outside-top"
              radius="sm"
              variant="bordered"
            />
            <Input
              className="col-span-2"
              label="41.Stage:*"
              size="lg"
              type="text"
              labelPlacement="outside-top"
              radius="sm"
              variant="bordered"
            />
          </div>
          <div className="col-span-3 grid grid-cols-10 gap-4">
            <Input
              className="col-span-2"
              label="42.Extend:*"
              size="lg"
              type="text"
              labelPlacement="outside-top"
              radius="sm"
              variant="bordered"
            />
            <Input
              className="col-span-8"
              label="43.ICD-10:*"
              size="lg"
              type="text"
              labelPlacement="outside-top"
              radius="sm"
              variant="bordered"
            />
          </div>
          <div className="col-span-3 ">
            <CheckboxGroup label="44.Metastasis">
              <Checkbox value="Bone">Bone</Checkbox>
              <Checkbox value="Brain">Brain</Checkbox>
              <Checkbox value="Liver">Liver</Checkbox>
              <Checkbox value="Lung">Lung</Checkbox>
              <Checkbox value="Lymph Node">Lymph Node</Checkbox>
              <Checkbox value="Peritoneum">Peritoneum</Checkbox>
              <Checkbox value="Other">Other</Checkbox>
            </CheckboxGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
