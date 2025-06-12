import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  Stethoscope,
  Zap,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  MessageCircle,
  Calendar,
  Activity,
  Bone,
  Heart,
  Shield,
} from "lucide-react"
import Image from "next/image"
// Import the Navbar component
import { Navbar } from "@/components/navbar"

export default function OrtopediaLP() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-2 max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/atendja.png"
              alt="Atend Já Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>(75) 3026-8494</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>Seg-Sáb: 7h às 19h</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-white py-12 md:py-14 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8DBF44 100%)`,
        }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#fff] mb-6 leading-tight">
                Ortopedista em <span className="text-[#fff]">Feira de Santana</span>
              </h1>
              <p className="text-xl text-[#fff] mb-8 leading-relaxed">
                Na Atend Já, você faz consultas com ortopedistas experientes, exames de imagem e tratamentos para
                coluna, joelhos e ombros – sem plano de saúde e sem filas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-[#8DBF44] text-[#008B47] hover:bg-[#fff]/50 font-bold"
                  asChild
                >
                  <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5 mr-2" />
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-end">
              <Image
                src="/7.png?height=500&width=500"
                alt="Médico ortopedista examinando joelho de paciente"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principais Tratamentos */}
      <section id="tratamentos" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B3F3D] mb-4">
              Problemas Ortopédicos? Temos a Solução!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-[#008B47] mx-auto mb-4" />
                <CardTitle className="text-lg">Consulta Ortopédica Completa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Avaliação de dor, mobilidade e lesões</p>
                
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Activity className="h-12 w-12 text-[#2EA55C] mx-auto mb-4" />
                <CardTitle className="text-lg">Ultrassom Articular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Diagnóstico de tendinites e bursites</p>
                
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#8DBF44] mx-auto mb-4" />
                <CardTitle className="text-lg">Infiltração Articular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Alívio rápido para dores crônicas</p>
                
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-[#008B47] mx-auto mb-4" />
                <CardTitle className="text-lg">Reabilitação com Fisioterapeuta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Sessões personalizadas no local</p>
                
              </CardContent>
            </Card>
          </div>

      
        </div>
      </section>

      {/* Sinais de Alerta */}
      <section id="sintomas" className="py-12" style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8DBF44 100%)`,
        }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fff] mb-4">Você Tem Algum Desses Sintomas?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <AlertTriangle className="h-8 w-8 text-[#008B47] flex-shrink-0" />
              <p className="text-lg">Dor constante em joelhos, ombros ou coluna</p>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <AlertTriangle className="h-8 w-8 text-[#008B47] flex-shrink-0" />
              <p className="text-lg">Dificuldade para caminhar ou subir escadas</p>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <AlertTriangle className="h-8 w-8 text-[#008B47] flex-shrink-0" />
              <p className="text-lg">Estalos articulares frequentes</p>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <AlertTriangle className="h-8 w-8 text-[#008B47] flex-shrink-0" />
              <p className="text-lg">Inchaço ou vermelhidão nas articulações</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white border-2 border-[#008B47] hover:bg-[#008B47] hover:text-white text-[#008B47] text-lg px-8 py-4 font-bold transition-colors"
              asChild
            >
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B3F3D] mb-4">
              Por Que Escolher a Atend Já para Sua Saúde Ortopédica?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-[#008B47] mx-auto mb-4" />
                <CardTitle className="text-lg">Ortopedista + Exames no Mesmo Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Raio-X, ultrassom e infiltração sem precisar sair da clínica</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#2EA55C] mx-auto mb-4" />
                <CardTitle className="text-lg">Atendimento em até 24h</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ideal para fraturas e emergências</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-[#8DBF44] mx-auto mb-4" />
                <CardTitle className="text-lg">Preços Acessíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Consulta e ultrassom com preço acessível</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-[#008B47] mx-auto mb-4" />
                <CardTitle className="text-lg">Equipe Multidisciplinar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ortopedistas, reumatologistas e fisioterapeutas</p>
              </CardContent>
            </Card>
          </div>

         
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-12" style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8DBF44 100%)`,
        }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fff] mb-4">O que dizem nossos pacientes:</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Operei o joelho aqui e a recuperação foi incrível. Recomendo!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Paciente"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-gray-500">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Finalmente descobri a causa da minha dor nas costas. Profissionais excelentes!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Paciente"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-gray-500">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-200 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-[#008B47]" />
                <span className="font-semibold">Especialistas com 10+ anos de experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-[#2EA55C]" />
                <span className="font-semibold">90% de melhora em até 3 meses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B3F3D] mb-4">
             Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preciso de pedido médico para raio-X?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sim, mas nossos ortopedistas podem solicitar na hora.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Infiltração dói?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Usamos anestesia local para maior conforto.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quando considerar cirurgia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Avaliamos cada caso individualmente antes de indicar.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-white border-2 border-[#008B47] hover:bg-[#008B47] hover:text-white text-[#008B47] text-lg px-8 py-4 font-bold transition-colors"
              asChild
            >
              <a href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#3b3f3d" }} className="text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/atendjabranco.png"
                  alt="Atend Já Logo"
                  width={120}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-white/70 mb-4">
                Cuidado Ortopédico especializado com preços acessíveis. Sua pele em boas mãos.
              </p>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>(75) 3026-8494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Rua Cícero Dantas, 221, Ponto Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Segunda a Sábado: 7h às 19h</span>
                </div>
              </div>
            </div>

           

            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <Image
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Atend Já Feira de Santana- Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      
    </div>
  )
}
