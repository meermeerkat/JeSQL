"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRecoilState } from "recoil";

import selectedScriptState from "@/state/SelectedScript";
import { ScriptLabel } from "@/types/ScriptLabel";
import { useNavigate } from "react-router-dom";

// TODO: fetch this via UseEffect
const groups = [
  {
    label: "Scripts",
    scripts: [
      {
        name: "Update Account Manager",
        key: "update_account_manager",
      },
      {
        name: "Retrieve Invioces",
        key: "retrieve_invoices",
      },
    ],
  },
];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface ScriptSwitcherProps extends PopoverTriggerProps {}

export default function ScriptSwitcher({ className }: ScriptSwitcherProps) {
  const navigate = useNavigate();

  const UploadScript = () => {
    navigate("/upload");
  };

  const [selectedScript, setSelectedScript] = useRecoilState<ScriptLabel>(selectedScriptState);

  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a script"
          className={cn("w-200 justify-between", className)}
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage src={"sql-logo.png"} alt={selectedScript.name} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {selectedScript.key ? selectedScript.name : "Choose Script"}
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search scripts..." />
            <CommandEmpty>No script found.</CommandEmpty>
            {groups.map((group) => (
              <CommandGroup key={group.label} heading={group.label}>
                {group.scripts.map((script) => (
                  <CommandItem
                    key={script.key}
                    onSelect={() => {
                      setSelectedScript(script);
                      setOpen(false);
                    }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage src="/sql-logo.png" alt={script.name} className="grayscale" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {script.name}
                    <CheckIcon
                      className={cn("ml-auto h-4 w-4", selectedScript.key === script.key ? "opacity-100" : "opacity-0")}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  UploadScript();
                }}
              >
                <PlusCircledIcon className="mr-2 h-5 w-5" />
                Add New Script
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
