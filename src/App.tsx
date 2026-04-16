import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import TextGenerator from "./pages/TextGenerator";
import ImageGenerator from "./pages/ImageGenerator";
import CodeGenerator from "./pages/CodeGenerator";
import PromptLibrary from "./pages/PromptLibrary";
import ChatAssistant from "./pages/ChatAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<TextGenerator />} />
            <Route path="/image" element={<ImageGenerator />} />
            <Route path="/code" element={<CodeGenerator />} />
            <Route path="/prompts" element={<PromptLibrary />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
