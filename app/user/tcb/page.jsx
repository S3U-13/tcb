"use client";
import { div } from "framer-motion/client";
import React, { useState } from "react";

import { Button } from "@heroui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Chip } from "@heroui/chip";
import { Pagination } from "@heroui/pagination";
import { Input } from "@heroui/input";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Edit, Eye, XCircle } from "@deemlol/next-icons";

export default function page() {
  return (
    <div className="space-y-6 mt-6 ">
      <h1 className="text-center text-xl">
        <strong>Hospital PPK Insurance Form</strong>
      </h1>

      <div className="p-4 space-y-2 border border-divider rounded-xl bg-gray-100 dark:bg-[#0e0e11]">
        <div className="flex justify-between gap-2 items-center">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[30rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 ",
            }}
            placeholder="Type to search..."
            size="sm"
            variant="bordered"
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            type="search"
          />
          <div className="flex items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize"
                  variant="flat"
                  endContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  Forms Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Status filter" selectionMode="multiple">
                <DropdownItem>dsfadsf</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize"
                  variant="flat"
                  endContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Status filter" selectionMode="multiple">
                <DropdownItem>dsfafa</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize"
                  variant="flat"
                  endContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  Column
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table columns"
                selectionMode="multiple"
                variant="flat"
              >
                <DropdownItem className="capitalize">adsfadsfadfs</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button color="primary" variant="solid" size="md">
                  PDF IPD & OPD
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {/* <DropdownItem key="IPD" onPress={() => setOpenModalIPD(true)}>
                  IPD FORM
                </DropdownItem>
                <DropdownItem key="OPD" onPress={() => setOpenModalOPD(true)}>
                  OPD FORM
                </DropdownItem> */}
                <DropdownItem
                  key="IPD"
                  href="/api/generate-ipd-pdf"
                  target="_blank"
                >
                  IPD FORM
                </DropdownItem>
                <DropdownItem
                  key="OPD"
                  href="/api/generate-opd-pdf"
                  target="_blank"
                >
                  OPD FORM
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total 10 records</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select className="bg-transparent outline-none text-default-400 text-small ml-2">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>

        <Table
          aria-label="Example static collection table"
          classNames={{
            th: "p-4",
            td: "px-4 py-3.5 border-b border-divider pt-1",
            base: "max-h-[calc(80vh-150px)]",
          }}
        >
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

        <div className="flex justify-end ">
          <Pagination
            classNames={{ wrapper: "border border-divider" }}
            isCompact
            showControls
            // page={page}
            // total={pages}
            // onChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
