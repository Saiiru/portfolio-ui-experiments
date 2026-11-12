interface PortfolioItem {
  title: string
  description: string
  imgUrl: string
  stack: string[]
  link: string
}

// Four inspectable repositories rather than placeholder images or dead links.
const portfolio: PortfolioItem[] = [
  { title: "Travel Planner API", description: "API de atividades e convites de viagens com validação de domínio.",
    imgUrl: "", stack: ["TypeScript", "Fastify", "SQLite"], link: "https://github.com/Saiiru/travel-planner-api" },
  { title: "Order Management CLI", description: "Fluxo educacional de estoque e pedidos no terminal.",
    imgUrl: "", stack: ["Java 17", "Gradle"], link: "https://github.com/Saiiru/java-order-management-cli" },
  { title: "Finance Dashboard", description: "Dashboard de dados financeiros fictícios no navegador.",
    imgUrl: "", stack: ["React", "TypeScript", "Vite"], link: "https://github.com/Saiiru/react-finance-dashboard" },
  { title: "Star Wars Planet Explorer", description: "Explorador de dados públicos da SWAPI.",
    imgUrl: "", stack: ["React", "Redux", "API"], link: "https://github.com/Saiiru/starwarsplanets" }
]
export default portfolio
