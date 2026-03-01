interface AppHeaderProps {
  title: string;
  button?: React.ReactNode;
}

export function AppHeader({ title, button }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      {button}
    </header>
  );
}