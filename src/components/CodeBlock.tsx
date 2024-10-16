import { CopyBlock, dracula } from "react-code-blocks";
type CodeBlockProps = {
  text: string;
};

export default function CodeBlock({ text }: CodeBlockProps) {
  const [language, ...rest] = text.split(" ");
  return (
    <CopyBlock
      text={rest.join(" ")}
      language={language}
      showLineNumbers
      theme={dracula}
    />
  );
}
