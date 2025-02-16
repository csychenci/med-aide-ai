import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Mic, UserRound } from "lucide-react";

const notes = [
  {
    type: "Docter",
    content: "你好, 请问你今天来是想看什么病?",
  },
  {
    type: "Patient",
    content: "我今天来是想看感冒",
  },
  {
    type: "Docter",
    content:
      "工作，然後，呃，我的胸口有點悶，我，我呼吸的時候，我呼吸不太暢順，然後我爬樓梯的時候，我只能爬到第二層的時候，我都爬不，爬不下去了。呃，那醫生都會說那個，啊，你。",
  },
  {
    type: "Docter",
    content: "那你其它，你平时做运动吗？你平时做什么运动的？",
  },
  {
    type: "Patient",
    content: "嗯，我平时不太做运动，只是我，呃，我平时会走路，因为我是上班的。",
  },
  {
    type: "Docter",
    content:
      "哦，你是，你是过往有什么心脏病的？",
  },
  {
    type: "Docter",
    content: "呃, 病史嘛, 你是什么时候开始呼吸不太畅顺的?",
  },
  {
    type: "Patient",
    content: "嗯, 我过往就没有什么大问题, 就是我一直以来都是很健康的, 然后我, 呃, 我呼吸就是, 我感觉是越来越",
  },
  {
    type: "Docter",
    content:
      "不畅顺的。啊，大概三个月前，我就不能爬楼梯了，就是爬，爬两层楼梯就要休息一下。",
  },
  {
    type: "Docter",
    content: "那，你，呃，胸口那边有点，有疼吗？就是你，有，会痛吗？呃，你。",
  }
];

export default function NotesList() {
  return (
    <div className="w-80 h-full bg-slate-50 pl-6 flex flex-col">
      <div className="w-full h-16 flex justify-end items-center pr-6">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end">
            <DropdownMenuItem className="text-red-500">
              Clear transcript
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full flex-1 overflow-y-auto common-scrollbar pr-4">
        <div className="w-full flex flex-col">
          {notes?.map((noteItem, noteIndex) => {
            return (<div key={noteIndex} className="py-6 text-sm w-full flex gap-2 border-t first:border-t-0 border-solid border-gray">
              <UserRound className="size-4" />
              <div className="flex-1 flex flex-col gap-1">
                <span className="text-xs text-foreground/40">{noteItem?.type}</span>
                <p className="text-primary text-xs">{noteItem?.content}</p>
              </div>
            </div>)
          })}
        </div>
      </div>
      <div className="w-full py-6 pr-10">
        <Button variant="outline" className="w-full">
          <Mic className="size-4" />
          Start recording
        </Button>
      </div>
    </div>
  );
}
