import { ScriptLabel } from "@/types/ScriptLabel";
import { atom } from "recoil";

const selectedScriptState = atom<ScriptLabel>({
    key: 'SelectedScript',
    default: {
        name: "",
        key: "",
    },
  });

export default selectedScriptState