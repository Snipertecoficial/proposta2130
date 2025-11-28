
import { Box, Calculator, CheckCircle2, Factory, Gem, Layers, LineChart, Megaphone, Palette, Rocket, Settings, ShoppingBag, Truck, Users } from 'lucide-react';

export const CONTACT_INFO = {
  whatsapp: "+5511933464028",
  whatsappDisplay: "(11) 93346-4028",
  email: "contato@aion3.com.br"
};

// Based on "1. METODOLOGIA AION3 – ENTREGÁVEIS 360º" from PDF Page 1
export const DELIVERABLES = [
  { icon: Gem, title: "Branding & Narrativa", desc: "Construção completa da marca, posicionamento e arquétipo." },
  { icon: ShoppingBag, title: "E-commerce & UX/UI", desc: "Desenvolvimento de estrutura de alta conversão, checkout e integrações." },
  { icon: Layers, title: "Planejamento de Coleção", desc: "20 modelos estratégicos: Entrada, Comfort, Luxo e Sensual." },
  { icon: Palette, title: "Design & Fornecedores", desc: "Definição de cores, tamanhos, margens, preços e curadoria de fornecedores." },
  { icon: Factory, title: "Direção Criativa", desc: "Planejamento visual completo da marca e direção de arte." },
  { icon: Settings, title: "Funil & CRM", desc: "Estruturação de automação de vendas e gestão de relacionamento." },
  { icon: Megaphone, title: "Marketing & Tráfego", desc: "Planejamento completo de campanhas, kits e ofertas de conversão." },
  { icon: Box, title: "Operacional & Estoque", desc: "Organização de logística, estoque e estrutura operacional." },
  { icon: Rocket, title: "Lançamento & Escala", desc: "Produção de foto/vídeo, execução do lançamento e estratégia de escala." },
];

// Based on "2. FASES DO PROJETO" and "5. INVESTIMENTOS" from PDF Pages 1-3
export const TIMELINE = [
  {
    phase: "MÊS 1",
    title: "CONSTRUÇÃO",
    items: [
      "Criação completa da marca",
      "E-commerce profissional",
      "Planejamento da coleção",
      "Arquitetura de funil e CRM",
      "Direção criativa",
      "Estruturação estratégica"
    ],
    investment: "R$ 30.000",
    description: "Consultoria, marca, e-commerce e estratégia."
  },
  {
    phase: "MÊS 2",
    title: "LANÇAMENTO",
    items: [
      "Compra da mercadoria",
      "Sessão de fotos e vídeos",
      "Organização do estoque",
      "Primeiras campanhas",
      "Testes de criativos",
      "Primeiras vendas"
    ],
    investment: "R$ 55.700",
    description: "Mercadoria (40k) + Tráfego (10k) + Ferramentas + Produção"
  },
  {
    phase: "MÊS 3",
    title: "ESCALA",
    items: [
      "Operação completa rodando",
      "Otimização de campanhas",
      "Conteúdo estratégico",
      "Kits de alta conversão",
      "Crescimento progressivo",
      "Meta: R$ 80K - R$ 120K"
    ],
    investment: "R$ 26.700",
    description: "Equipe AION3 (15k) + Tráfego (10k) + Ferramentas"
  }
];

// NEW: Detailed Breakdown for "Transparência Total" Section
export const INVESTMENT_DETAILS = [
  { item: "Consultoria + Marca + E-commerce (Mês 1)", value: "R$ 30.000" },
  { item: "Mercadoria (720 peças)", value: "R$ 40.000" },
  { item: "Tráfego Pago (Mês 2 + 3)", value: "R$ 20.000" },
  { item: "Equipe AION3 (Mês 3)", value: "R$ 15.000" },
  { item: "ERP + Ferramentas", value: "R$ 1.400" },
  { item: "Produção Visual (opcional)", value: "R$ 10.000" },
];

export const TOTAL_INVESTMENT = "R$ 116.400";

// Based on "3. ESTRUTURA DO ESTOQUE" from PDF Page 2
export const STOCK_STRUCTURE = {
  models: 20,
  colors: 3,
  sizes: 3, // M/G/GG
  unitsPerVar: 4,
  totalPieces: 720,
  investment: "R$ 40.000"
};

// Based on "4. ESTRATÉGIA DE PRECIFICAÇÃO" from PDF Page 2
export const FINANCIALS = {
  investment: "R$ 40.000",
  pieces: 720,
  costAvg: "R$ 55,55",
  sellAvg: "R$ 139,00",
  revenuePotencial: "R$ 100.080", 
  markup: "2,5x",
  profit: "R$ 60.000+"
};

// STRATEGIC COLLECTIONS instead of random products
// Using reliable Texture images (Unsplash IDs) to prevent broken links
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Linha Luxo",
    subtitle: "Renda & Sofisticação",
    collection: "High Ticket",
    description: "Foco em peças estruturadas, rendas exclusivas e acabamento premium. Maior valor agregado e margem de lucro.",
    priceRange: "Ticket: R$ 189 - R$ 259",
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop" // Black Lace Texture
  },
  {
    id: 2,
    name: "Linha Sensual",
    subtitle: "Ousadia & Poder",
    collection: "Best Seller",
    description: "Modelagens estratégicas com strappy, transparências e cores vibrantes. Alta conversão em campanhas de tráfego.",
    priceRange: "Ticket: R$ 149 - R$ 199",
    image: "https://images.unsplash.com/photo-1596131397999-d426366f06c6?q=80&w=1000&auto=format&fit=crop" // Red Silk/Texture
  },
  {
    id: 3,
    name: "Linha Comfort",
    subtitle: "Dia a Dia Premium",
    collection: "Recorrência",
    description: "Peças sem bojo, tecidos de toque macio e alta durabilidade. Foco em kits e LTV (Life Time Value).",
    priceRange: "Ticket: R$ 99 - R$ 139",
    image: "https://images.unsplash.com/photo-1579619623836-8a56fa2b0906?q=80&w=1000&auto=format&fit=crop" // Soft Fabric Texture
  },
  {
    id: 4,
    name: "Linha Essencial",
    subtitle: "Porta de Entrada",
    collection: "Volume",
    description: "O básico bem feito. Preço competitivo para aquisição de novos clientes e primeira compra.",
    priceRange: "Ticket: R$ 59 - R$ 89",
    image: "https://images.unsplash.com/photo-1534119932379-990795eeda6c?q=80&w=1000&auto=format&fit=crop" // Silk/Neutral Texture
  }
];
