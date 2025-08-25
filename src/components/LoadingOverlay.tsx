import { useLoading } from "@/hooks/useLoading";

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/lovable-uploads/d47aed23-6fdb-41ea-9871-df5bf6312c5b.png" 
          alt="Stockholm Digital Boost" 
          className="h-16 w-auto logo-loading"
        />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;