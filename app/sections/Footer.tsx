import ViewsCount from "@/components/VisitorCounter";
import DancingText from "@/components/DancingText";

export default function Footer() {
  return (
    <footer className="text-muted-foreground relative flex w-full flex-col items-center justify-center pt-20 pb-0 text-center text-sm">
      <div className="mb-20">
        <p className="mb-2">
          Designed & Developed by{" "}
          <DancingText
            text="Jayanth"
            className="text-foreground cursor-default text-lg font-semibold"
          />
        </p>
        <p>&copy; 2026 Jayanth Thalla. All rights reserved.</p>
        <ViewsCount />
      </div>
    </footer>
  );
}
