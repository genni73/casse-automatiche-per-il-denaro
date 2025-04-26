
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-[#f2f4f7] text-[#2c2c2c] min-h-screen p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#0066cc]">Casse Automatiche per il Denaro</h1>
        <p className="text-lg mt-2">Soluzioni moderne per la gestione del contante nella tua attività</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-4">
            <Image src="/images/cashmatic 460.png" alt="Cassa 460" width={500} height={300} className="rounded-xl" />
            <h2 className="text-xl font-semibold mt-4 text-[#003366]">Modello 460</h2>
            <p className="text-sm mt-2">Dispositivo compatto progettato per garantire sicurezza, rapidità e semplicità nella gestione del denaro. Ideale per spazi ridotti.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-4">
            <Image src="/images/cashmatic 660.jpeg" alt="Cassa 660" width={500} height={300} className="rounded-xl" />
            <h2 className="text-xl font-semibold mt-4 text-[#003366]">Modello 660</h2>
            <p className="text-sm mt-2">Soluzione versatile per medie attività commerciali, ottimizzata per l'usabilità, l'efficienza e l'integrazione con i gestionali.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-4">
            <Image src="/images/cashmatic 1060.jpeg" alt="Cassa 1060" width={500} height={300} className="rounded-xl" />
            <h2 className="text-xl font-semibold mt-4 text-[#003366]">Modello 1060</h2>
            <p className="text-sm mt-2">Top di gamma per grandi esercizi. Ampia capacità, affidabilità e tecnologia avanzata per il massimo controllo del flusso di cassa.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mt-10">
        <Button className="bg-[#003366] text-white px-6 py-3 text-lg rounded-2xl shadow-lg hover:bg-[#0055aa]">
          Contattaci per una consulenza gratuita
        </Button>
      </section>
    </main>
  )
}
