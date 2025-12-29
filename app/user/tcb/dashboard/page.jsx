"use client";
import React from "react";
import { DatePicker } from "@heroui/date-picker";
import { Button } from "@heroui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Select, SelectSection, SelectItem } from "@heroui/select";

export default function page() {
  return (
    <section className="rounded-xl space-y-4 h-full">
      <div className="space-y-4 border border-divider rounded-xl p-4">
        <h1>Dashboard</h1>
        <p>วันที่วินิจฉัยว่าเป็นมะเร็ง</p>
        <div className="flex justify-between items-end ">
          <div className="grid grid-cols-3 gap-4  w-full">
            <DatePicker
              className="max-w-[400px]"
              label="วันที่เริ่มต้น"
              labelPlacement="outside-top"
              variant="bordered"
              size="md"
              radius="md"
            />
            <DatePicker
              className="max-w-[400px]"
              label="วันที่สิ้นสุด"
              labelPlacement="outside-top"
              variant="bordered"
              size="md"
              radius="md"
            />
            <DatePicker
              className="max-w-[400px]"
              label="สิทธิการรักษา"
              labelPlacement="outside-top"
              variant="bordered"
              size="md"
              radius="md"
            />
          </div>
          <Button className="" color="primary">
            ค้นหา
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="w-full h-[160px] border border-divider rounded-xl p-4">
          <h1>จำนวนผู้ป่วยทั้งหมดในฐานข้อมูล</h1>
        </div>
        <div className="w-full h-[160px] border border-divider rounded-xl p-4">
          <h1>จำนวนผู้ป่วยรายใหม่</h1>
        </div>
        <div className="w-full h-[160px] border border-divider rounded-xl p-4">
          <h1>จำนวนรับ Refer</h1>
        </div>
        <div className="w-full h-[160px] border border-divider rounded-xl p-4">
          <h1>จำนวนส่ง Refer</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="border border-divider rounded-xl p-4 space-">
          <h1>โรคมะเร็งที่พบบ่อย 10 อันดับเเรกในเพศชาย</h1>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="border border-divider rounded-xl p-4 space-y-4">
          <h1>โรคมะเร็งที่พบบ่อย 10 อันดับเเรกในเพศหญิง</h1>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="border border-divider rounded-xl p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1>ระยะเวลารอคอยตามช่วงเวลาที่เกิดกิจกรรม</h1>
          <div className="flex gap-4">
            <Button className="" color="primary">
              ค้นหา
            </Button>
            <Button className="" color="primary">
              Export Excel
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <DatePicker
            label="วันที่เริ่มต้น"
            labelPlacement="outside-top"
            variant="bordered"
            size="md"
            radius="md"
          />
          <DatePicker
            label="วันที่สิ้นสุด"
            labelPlacement="outside-top"
            variant="bordered"
            size="md"
            radius="md"
          />
          <Select
            label="Select an animal"
            size="md"
            labelPlacement="outside-top"
            variant="bordered"
          >
            <SelectItem key="1">dsfdsafdsaffds</SelectItem>
          </Select>
          <Select
            label="Select an animal"
            size="md"
            labelPlacement="outside-top"
            variant="bordered"
          >
            <SelectItem key="2">dsfdsafdsaffdsadsf</SelectItem>
          </Select>
          <Select
            className="col-span-2"
            label="Select an animal"
            size="md"
            labelPlacement="outside-top"
            variant="bordered"
          >
            <SelectItem key="3">dsfdsafdsaffdsdsf</SelectItem>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-[300px] border border-divider rounded-xl p-4"></div>
          <div className="w-full h-[300px] border border-divider rounded-xl p-4"></div>
          <div className="w-full h-[300px] border border-divider rounded-xl p-4"></div>
          <div className="w-full h-[300px] border border-divider rounded-xl p-4"></div>
        </div>
      </div>
      <div className="border border-divider rounded-xl p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1>ระยะเวลารอคอยตามช่วงเวลาที่เกิดกิจกรรม</h1>
          <div className="flex gap-4">
            <Button className="" color="primary">
              Export Excel
            </Button>
          </div>
        </div>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
