"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { Radio, RadioGroup } from "@heroui/radio";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import { Textarea } from "@heroui/input";
import { Plus } from "@deemlol/next-icons";

export default function page({ isOpen, onClose }) {
  return (
    <div>
      {" "}
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        size="full"
        radius="none"
        backdrop="transparent"
        classNames={{
          header: "border-b border-divider",
          body: "overflow-y-scroll",
          footer: "border-t border-divider",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1>เพิ่มโรคมะเร็ง</h1>
              </ModalHeader>
              <ModalBody>
                <div className="border border-divider rounded-t-lg p-4 space-y-4">
                  <h1 className="text-[#e4598c] font-semibold">
                    ข้อมูลผู้ป่วยมะเร็ง
                  </h1>
                  <div className="mx-auto w-350 grid grid-cols-12 gap-x-1 pl-20 text-[#2d6c21] font-semibold">
                    <div className="space-y-4  text-right col-span-2">
                      <p>สถานพยาบาล :</p>
                      <p>ชื่อ-สกุล :</p>
                      <p>เพศ :</p>
                      <p>ที่อยู่ :</p>
                      <p>โทรศัพท์ 1 :</p>
                    </div>
                    <div className="space-y-4  text-left col-span-3">
                      <p>สถานพยาบาล :</p>
                      <p>ชื่อ-สกุล :</p>
                      <p>เพศ :</p>
                      <p>ที่อยู่ :</p>
                      <p>โทรศัพท์ 1 :</p>
                    </div>
                    <div className="col-span-2"></div>
                    <div className="space-y-4 text-right col-span-2 ">
                      <p>HN :</p>

                      <p>เลขบัตรประชาชน :</p>

                      <p>ว/ด/ป เกิด (พ.ศ.) :</p>

                      <p>email :</p>

                      <p>โทรศัพท์ 2 :</p>
                    </div>
                    <div className="space-y-4 text-left col-span-3">
                      <p>HN :</p>

                      <p>เลขบัตรประชาชน :</p>

                      <p>ว/ด/ป เกิด (พ.ศ.) :</p>

                      <p>email :</p>

                      <p>โทรศัพท์ 2 :</p>
                    </div>
                  </div>
                  <div className="col-span-3 border-b border-divider py-4 "></div>
                  <h1 className="text-[#e4598c] font-semibold">
                    ข้อมูลโรคมะเร็ง
                  </h1>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="26.วันที่รับบริการ รพ.ท่านด้วยโรคมะเร็งครั้งเเรก (พ.ศ):*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="27.วันที่ปัจจุบัน ณ วันที่รับบริการ รพ. (พ.ศ.):*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="28.สิทธิการรักษา:*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="29.ว/ป/ด ที่วินิจฉัย (พ.ศ.):*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
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
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="31.ว/ป/ด ที่ตัดชิ้นเนื้อ เพื่อวินิจฉัย (พ.ศ.):*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="32.ว/ป/ด ที่อ่านชิ้นเนื้อ (พ.ศ.):*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="33.Topography:*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[#2d6c21]">
                        34.
                      </p>
                      <CheckboxGroup label="" orientation="">
                        <Checkbox value="Recurrent">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Recurrent
                          </span>
                        </Checkbox>
                      </CheckboxGroup>
                      <Input
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
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
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="36.Morphology:*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        label: "text-sm font-semibold text-[#2d6c21]",
                      }}
                      label="37.Behaviour:*"
                      size="lg"
                      type="text"
                      labelPlacement="outside-top"
                      radius="sm"
                      variant="bordered"
                    />
                    <div className="grid grid-cols-10 gap-4 items-center col-span-3">
                      <Input
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
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
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
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
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        label="40.ว/ป/ด TNM/Stage (พ.ศ.):*"
                        size="lg"
                        type="text"
                        labelPlacement="outside-top"
                        radius="sm"
                        variant="bordered"
                      />
                      <Input
                        className="col-span-2"
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
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
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        label="42.Extend:*"
                        size="lg"
                        type="text"
                        labelPlacement="outside-top"
                        radius="sm"
                        variant="bordered"
                      />
                      <Input
                        className="col-span-8"
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        label="43.ICD-10:*"
                        size="lg"
                        type="text"
                        labelPlacement="outside-top"
                        radius="sm"
                        variant="bordered"
                      />
                    </div>
                    <div className="col-span-3 flex gap-6">
                      <p className="mt-3 text-sm font-semibold text-[#2d6c21]">
                        44.Metastasis:
                      </p>
                      <CheckboxGroup label="" className="space-y-6">
                        <Checkbox className="mt-1" value="Bone">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Bone
                          </span>
                        </Checkbox>
                        <Checkbox className="mt-9" value="Brain">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Brain
                          </span>
                        </Checkbox>
                        <Checkbox className="mt-8" value="Liver">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Liver
                          </span>
                        </Checkbox>
                        <Checkbox className="mt-7" value="Lung">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Lung
                          </span>
                        </Checkbox>
                        <Checkbox className="mt-8" value="Lymph Node">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Lymph Node
                          </span>
                        </Checkbox>
                        <Checkbox className="mt-8" value="Peritoneum">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Peritoneum
                          </span>
                        </Checkbox>
                        <Checkbox className="mt-8" value="Other">
                          <span className="text-sm font-semibold text-[#2d6c21]">
                            Other
                          </span>
                        </Checkbox>
                      </CheckboxGroup>
                      <div className="space-y-6">
                        <Input
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <div className="flex items-center gap-8 w-full">
                          <Input
                            classNames={{
                              label: "text-sm font-semibold text-[#2d6c21]",
                              innerWrapper: "w-54",
                            }}
                            label="ว/ด/ป(พ.ศ.):*"
                            size="lg"
                            type="text"
                            labelPlacement="outside-left"
                            radius="sm"
                            variant="bordered"
                          />
                          <Input
                            classNames={{
                              label: "text-sm font-semibold text-[#2d6c21]",
                              innerWrapper: "w-272",
                            }}
                            label="ระบุ:*"
                            size="lg"
                            type="text"
                            labelPlacement="outside-left"
                            radius="sm"
                            variant="bordered"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 border-b border-divider py-4 "></div>
                    <div className="col-span-3 space-y-4">
                      <h1 className="text-[#e4598c] font-semibold pb-4">
                        วิธีรักษาครั้งสุดท้ายที่โรงพยาบาลก่อนหน้า
                      </h1>
                      <Select
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        className="w-full "
                        label="วิธีรักษาครั้งสุดท้าย:"
                        labelPlacement="outside-top"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                      >
                        <SelectItem key="null">-</SelectItem>
                      </Select>
                      <div className="flex items-center gap-4">
                        <Input
                          className="max-w-sm"
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          placeholder="_/_/__"
                          labelPlacement="outside-top"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          className="max-w-sm"
                          classNames={{
                            label: "text-sm font-semibold text-[#2d6c21]",
                          }}
                          label="ว/ด/ป(พ.ศ.):*"
                          size="lg"
                          type="text"
                          placeholder="_/_/__"
                          labelPlacement="outside-top"
                          radius="sm"
                          variant="bordered"
                        />
                      </div>
                      <Textarea
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        label="Note:"
                        labelPlacement="outside-top"
                        placeholder="Enter your description"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                      />
                    </div>
                    <div className="col-span-3 border-b border-divider py-4 "></div>
                    <div className="col-span-3 space-y-6">
                      <h1 className="text-[#e4598c] font-semibold">
                        การรักษาในโรงพยาบาล
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm font-semibold text-[#2d6c21]">45.Treatment</p>
                        <Button
                          className="px-10"
                          color="primary"
                          variant="solid"
                          startContent={<Plus size={20} />}
                        >
                          เพิ่มรายการ Treatment
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <Select
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                          className="w-full "
                          label="วิธีรักษาครั้งที่ 1:"
                          labelPlacement="outside-left"
                          size="lg"
                          radius="sm"
                          variant="bordered"
                        >
                          <SelectItem key="null">-</SelectItem>
                        </Select>
                        <Button
                          className="px-10"
                          color="danger"
                          variant="solid"
                          radius="full"
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                          className="max-w-sm"
                          label="วันที่เริ่มต้น:*"
                          size="lg"
                          type="text"
                          placeholder="_/_/__"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                          className="max-w-sm"
                          label="วันที่สิ้นสุด:*"
                          size="lg"
                          type="text"
                          placeholder="_/_/__"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                      </div>
                      <Select
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        className="w-full "
                        label="รหัสหัตถการ:"
                        labelPlacement="outside-left"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                      >
                        <SelectItem key="null">-</SelectItem>
                      </Select>
                      <Textarea
                        label="Note:"
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        labelPlacement="outside-left"
                        placeholder="Enter your description"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                      />
                      <div className="flex items-center gap-4">
                        <Select
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                          className="w-full "
                          label="วิธีรักษาครั้งที่ 2:"
                          labelPlacement="outside-left"
                          size="lg"
                          radius="sm"
                          variant="bordered"
                        >
                          <SelectItem key="null">-</SelectItem>
                        </Select>
                        <Button
                          className="px-10"
                          color="danger"
                          variant="solid"
                          radius="full"
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                          className="max-w-sm"
                          label="วันที่เริ่มต้น:*"
                          size="lg"
                          type="text"
                          placeholder="_/_/__"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                        <Input
                          classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                          className="max-w-sm"
                          label="วันที่สิ้นสุด:*"
                          size="lg"
                          type="text"
                          placeholder="_/_/__"
                          labelPlacement="outside-left"
                          radius="sm"
                          variant="bordered"
                        />
                      </div>
                      <Select
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        className="w-full "
                        label="รหัสหัตถการ:"
                        labelPlacement="outside-left"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                      >
                        <SelectItem key="null">-</SelectItem>
                      </Select>
                      <Textarea
                        classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                        label="Note:"
                        labelPlacement="outside-left"
                        placeholder="Enter your description"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                      />
                    </div>
                    <div className="col-span-3 border-b border-divider py-4 "></div>
                    <Textarea
                      classNames={{
                          label: "text-sm font-semibold text-[#2d6c21]",
                        }}
                      className="col-span-3"
                      label="46.Clinical Summary"
                      labelPlacement="outside-top"
                      placeholder="Enter your description"
                      size="lg"
                      radius="sm"
                      variant="bordered"
                    />
                    <div className="col-span-3 border-b border-divider py-4 "></div>
                    <div className="flex items-center gap-6">
                      <p   className="text-sm font-semibold text-[#2d6c21]">47.เอกสาร</p>
                      <Button
                        className="px-10"
                        color="primary"
                        variant="solid"
                        startContent={<Plus size={20} />}
                      >
                        เพิ่มเอกสารเเนบ
                      </Button>
                      <span className="text-red-500">
                        (ไฟล์รวมกันทั้งหมดไม่เกิน 5MB)
                      </span>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  variant="solid"
                  className="text-white"
                  onPress={onClose}
                >
                  ยืนยัน
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  ยกเลิก
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
