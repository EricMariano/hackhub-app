import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Plus } from "lucide-react";
import { AppHeader } from "@/src/components/global/header";

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header da página */}
      <AppHeader title="Eventos" button={<Button className="w-fit shrink-0" size="sm">
        <Plus className="size-4" />
        Novo evento
      </Button>} />

      {/* Lista de eventos (esqueleto) */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} size="default">
            <CardHeader>
              <CardTitle>Evento {i}</CardTitle>
              <CardDescription>
                Descrição breve do evento. Data e horário.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Conteúdo do card (palestras, workshops, etc.)
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
