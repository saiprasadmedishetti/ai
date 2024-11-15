import { FormEvent, useState } from "react";
import { askAI } from "../utils/ai";
import CodeBlock from "./CodeBlock";
import AiIcon from "../assets/ai.png";
import Search from "./Search";
import ReactMarkdown from "react-markdown";

type Messages = {
  type: "in" | "out";
  message: string;
};

export default function Ai() {
  const [answers, setAnswers] = useState<Messages[]>([]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get("message-input") as string;
    setAnswers((prev) => [...prev, { type: "out", message: input.trim() }]);
    e.currentTarget?.reset?.();
    if (input.trim()) {
      const response = await askAI(input);
      setAnswers((prev) => [...prev, { type: "in", message: response! }]);
    }
  };
  return (
    <div className="flex flex-col px-2 py-8 h-full">
      <div className="flex-1 overflow-auto">
        <div className="pr-3">
        <h1 className="text-lg font-semibold text-center">Welcome to Ai</h1>

        {answers.map((answer, idx) => (
          <div
            className={`mb-4 flex ${
              answer.type === "out" ? "justify-end" : ""
            }`}
            key={idx}
          >
            {answer.type === "out" ? (
              <span className="py-2 px-4 rounded-full bg-[#2f2f2f]">
                {answer.message}
              </span>
            ) : (
              <div className="flex items-start gap-2 max-w-100 items-start">
                <img
                  className="bg-[#2f2f2f] p-2 h-12 rounded-full"
                  src={AiIcon}
                  alt="ai"
                />
                {/* {answer.message.slice(0, 3) === "```" ? (
                  <CodeBlock text={answer.message} />
                ) : (
                  answer.message
                )} */}
                <div className="response-container flex flex-col">
                  <ReactMarkdown>{answer.message}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
      <div className="relative shrink-0">
        <form onSubmit={onSubmit}>
          <Search name="message-input" placeholder="Message Ai" />
        </form>
      </div>
    </div>
  );
}
