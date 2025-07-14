import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Search, 
  Cog, 
  TrendingUp, 
  Building2, 
  Users, 
  Zap, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Mail,
  Phone,
  Linkedin
} from 'lucide-react';

// Import images
import heroImage from './assets/images/business_automation_hero.png';
import aiGrowthImage from './assets/images/ai_business_growth.jpg';
import diagnosticoIcon from './assets/images/icon_diagnostico.png';
import solucaoIcon from './assets/images/icon_solucao.png';
import resultadosIcon from './assets/images/icon_resultados.png';
import pmeIcon from './assets/images/icon_pme.png';

function App() {
  const handleButtonClick = () => {
    window.open('http://wa.me/555189265791', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PB</span>
            </div>
            <span className="font-bold text-xl">Pedro Borba</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</a>
            <a href="#para-quem" className="text-sm font-medium hover:text-primary transition-colors">Para Quem</a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Cases</a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
          
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold click" onClick={handleButtonClick}>
            Análise Gratuita
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Especialista em Inteligência Artificial
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-shadow">
                  Transforme Tarefas Manuais em{' '}
                  <span className="gold-accent">Inteligência Estratégica</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Automações com IA que geram ROI real para empresas que querem sair da mesmice. 
                  Descomplicamos, economizamos tempo e impulsionamos o crescimento, entregando resultados palpáveis.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold click" onClick={handleButtonClick}>
                  Quero uma Análise Gratuita dos Meus Processos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                </div>
                <span>Empresas em tempo recorde já implementam automações inteligentes</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Automação Empresarial" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformamos seus processos manuais em automações inteligentes em 3 passos estratégicos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift border-2 hover:border-accent/50 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/90 rounded-full flex items-center justify-center">
                  <img src={diagnosticoIcon} alt="Diagnóstico" className="w-10 h-10" />
                </div>
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  1
                </div>
                <CardTitle>Diagnóstico Profundo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Analisamos seus processos manuais e identificamos gargalos.
                  Mapeamos oportunidades de automação com IA.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-2 hover:border-accent/50 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/90 rounded-full flex items-center justify-center">
                  <img src={solucaoIcon} alt="Solução" className="w-10 h-10" />
                </div>
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  2
                </div>
                <CardTitle>Solução Sob Medida</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Desenvolvemos automações personalizadas para sua empresa. 
                  Integramos sistemas e criamos fluxos inteligentes e com previsibiliade de retorno.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-2 hover:border-accent/50 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/90 rounded-full flex items-center justify-center">
                  <img src={resultadosIcon} alt="Resultados" className="w-10 h-10" />
                </div>
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  3
                </div>
                <CardTitle>Resultados Mensuráveis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Implementamos e treinamos sua equipe. 
                  Acompanhamos o ROI e otimizamos continuamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section id="para-quem" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">A Solução Perfeita Para Você</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automações inteligentes para empresas que querem eficiência real e resultados mensuráveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <img src={pmeIcon} alt="PMEs" className="w-15 h-15 mb-2" />
                <CardTitle>Pequenas e Médias Empresas em Crescimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Escale sem perder qualidade ou sobrecarregar a equipe. 
                  Automatize processos críticos para sustentar o crescimento.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Building2 className="w-12 h-12 mb-2 text-accent" />
                <CardTitle>Empresas Familiares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modernize processos sem perder a essência do negócio. 
                  Mantenha a tradição com eficiência moderna.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Zap className="w-12 h-12 mb-2 text-accent" />
                <CardTitle>Startups Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Otimize operações internas para focar no core business. 
                  Escale rapidamente com processos inteligentes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Users className="w-12 h-12 mb-2 text-accent" />
                <CardTitle>Profissionais Liberais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatize tarefas administrativas e ganhe tempo valioso. 
                  Foque no que realmente importa: seus clientes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mb-2 text-accent" />
                <CardTitle>Empresas em Expansão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prepare sua infraestrutura para o crescimento. 
                  Processos escaláveis que acompanham sua evolução.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher Pedro Borba?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que fazem a diferença real no seu negócio
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Especialização Cirúrgica</h3>
                  <p className="text-muted-foreground">
                    Automações com IA para soluções que transformam, não apenas automatizam.
                    Expertise inquestionável focada em resultados reais.


                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comunicação Real</h3>
                  <p className="text-muted-foreground">
                    Sem rodeios, sem promessas vazias. Abordagem direta que desafia 
                    o convencional e foca em resultados mensuráveis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Soluções Personalizadas</h3>
                  <p className="text-muted-foreground">
                    Não vendo pacotes genéricos. Construo automações sob medida 
                    que resolvem suas dores específicas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Empoderamento Total</h3>
                  <p className="text-muted-foreground">
                    Ensino e capacito sua equipe para autonomia. 
                    Construo um legado de conhecimento e independência.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiGrowthImage} 
                alt="IA para Crescimento" 
                className="rounded-lg shadow-xl hover-lift adjustment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Cases de Impacto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados reais que transformaram negócios e geraram ROI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-center">Redução de 80% no Tempo</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-accent">80%</div>
                <p className="text-muted-foreground">
                  Automação de processos de conciliação bancária reduziu de 8 horas 
                  para 1h30min diárias, liberando equipe para atividades estratégicas.
                </p>
                <Badge variant="secondary">ROI: 300% em 6 meses</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-center">Eliminação de Erros</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-accent">100%</div>
                <p className="text-muted-foreground">
                  Sistema de gestão de estoque automatizado eliminou completamente 
                  erros de inventário e reduziu perdas em 95%.
                </p>
                <Badge variant="secondary">Economia: R$ 50k/mês</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-center">Aumento de Produtividade</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-accent">250%</div>
                <p className="text-muted-foreground">
                  Automação de pipeline de vendas e atendimento aumentou conversão 
                  e permitiu escalar sem aumentar equipe.
                </p>
                <Badge variant="secondary">Crescimento: 3x receita</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Serviços & Soluções</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automações inteligentes que transformam sua operação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <Cog className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Automação Personalizada</CardTitle>
                <CardDescription>
                  Desenvolvimento de soluções sob medida para suas necessidades específicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Análise completa da empresa / processos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Desenvolvimento com as ferramentas mais atualizadas e completa do mercado</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Integração com sistemas existentes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Testes e otimização</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Search className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Análise de Processos</CardTitle>
                <CardDescription>
                  Diagnóstico gratuito para identificar oportunidades de automação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Mapeamento de gargalos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Identificação de oportunidades</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Projeção de ROI</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Plano de implementação</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Treinamento de Equipe</CardTitle>
                <CardDescription>
                  Capacitação para uso efetivo das automações implementadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Workshops práticos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Documentação completa</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Suporte durante transição</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Empoderamento da equipe</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Suporte Contínuo</CardTitle>
                <CardDescription>
                  Acompanhamento e otimização pós-implementação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Monitoramento de performance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Otimizações contínuas</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Relatórios de ROI</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Evolução das automações</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">O Que Dizem Nossos Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformações reais relatadas por quem viveu a experiência
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Pedro salvou meu projeto! Confio plenamente nas capacidades dele."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    A.C.
                  </div>
                  <div>
                    <p className="font-semibold">Andrea Chain</p>
                    <p className="text-sm text-muted-foreground">CEO de Contas - Chain Marketing e Realidade Aumentada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Excelente profissional!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    L.M.
                  </div>
                  <div>
                    <p className="font-semibold">Leonardo Melo</p>
                    <p className="text-sm text-muted-foreground">CEO - Hoogli Hub de Resultados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground mb-4">
                  "Ótimo profissional e muito dedicado com seus compromissos.
                  Superou as expectativas."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    W.A.
                  </div>
                  <div>
                    <p className="font-semibold">Wallace A.</p>
                    <p className="text-sm text-muted-foreground">Sócio - Imobiliária Mello</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre automação empresarial
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preciso ter conhecimento técnico?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não! Nossa abordagem é focada em empoderar sua equipe, mas sem exigir 
                  conhecimento técnico prévio. Fornecemos treinamento completo e documentação 
                  clara para que todos possam usar as automações com confiança.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quanto tempo leva para implementar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Depende da complexidade, mas a maioria dos projetos fica pronta entre 2-6 semanas. 
                  Começamos sempre com uma análise gratuita para dar um cronograma preciso 
                  baseado nas suas necessidades específicas.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Como garantem o ROI?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trabalhamos com métricas claras desde o início. Mapeamos os custos atuais, 
                  projetamos a economia esperada e acompanhamos os resultados. Nosso foco é 
                  sempre em automações que se pagam rapidamente.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>E se minha equipe resistir à mudança?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Entendemos essa preocupação. Por isso, envolvemos a equipe desde o início, 
                  mostrando como a automação vai facilitar o trabalho deles, não substituí-los. 
                  Oferecemos treinamento gradual e suporte durante toda a transição.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Vocês dão suporte após a implementação?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim! Oferecemos suporte contínuo, monitoramento de performance e otimizações. 
                  Nosso objetivo é que as automações evoluam junto com seu negócio, sempre 
                  gerando mais valor.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Como funciona a integração com nossos sistemas atuais?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trabalhamos com integração via APIs e conectores nativos. A maioria dos 
                  sistemas modernos (CRM, ERP, e-commerce) já possui integrações prontas. 
                  Para sistemas legados, desenvolvemos soluções personalizadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-shadow">
              Pronto para Transformar Seus Processos?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma análise gratuita e descubra como a automação com IA 
              pode revolucionar seu negócio. Sem compromisso, só resultados reais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold click" onClick={handleButtonClick}>
                Quero Minha Análise Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Análise 100% gratuita</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Resultados em 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">PB</span>
                </div>
                <span className="font-bold text-xl">Pedro Borba</span>
              </div>
              <p className="text-primary-foreground/80">
                Especialista em Inteligência Artificial aplicada a empresas. 
                Transformando processos manuais em inteligência estratégica.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-primary-foreground/80">pedroborbadevelop@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-primary-foreground/80">(51) 98926 - 5791</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://www.linkedin.com/in/pedro-borba-317321183/" className="text-primary-foreground/80">linkedin.com/in/pedro-borba-317321183/</a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Navegação</h3>
              <div className="space-y-2">
                <a href="#como-funciona" className="block text-primary-foreground/80 hover:text-accent transition-colors">Como Funciona</a>
                <a href="#para-quem" className="block text-primary-foreground/80 hover:text-accent transition-colors">Para Quem</a>
                <a href="#cases" className="block text-primary-foreground/80 hover:text-accent transition-colors">Cases</a>
                <a href="#servicos" className="block text-primary-foreground/80 hover:text-accent transition-colors">Serviços</a>
                <a href="#faq" className="block text-primary-foreground/80 hover:text-accent transition-colors">FAQ</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 Pedro Borba - Automações Empresariais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

