import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Assimetria orgânica deliberada: a navegação fica à DIREITA em vez de à esquerda (quebra a
// convenção "sidebar à esquerda" do Venore Slime/Aurora), coerente com a identidade "neutros
// elevados, orgânico" do Nimbus. Header em cima, cobrindo as duas colunas. SidebarLeftSlot é o
// mesmo componente do Venore Slime por dentro (só consome tokens), mas a CÓPIA deste tema tem
// borda/botão de colapso/chevrons espelhados pro lado direito (ver SidebarLeftSlot.tsx) — sem
// isso a borda e o botão flutuante ficariam no lado errado do painel.
//
// Footer mora DENTRO da coluna de conteúdo (abaixo de ContentSlot), não como irmão do `flex`
// externo — o `flex` externo (align-items: stretch, default) estica a SidebarLeftSlot pra
// acompanhar a altura de Content+Footer somados, então ela termina exatamente onde o footer
// termina, nunca por cima ou por baixo dele.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <>
      <HeaderSlot {...header} />
      <div className="flex flex-1">
        <div className="flex min-w-0 flex-1 flex-col">
          <ContentSlot
            sidebarContextualEnabled={sidebarContextualEnabled}
            sidebarContextual={sidebarContextual}
            breadcrumbs={breadcrumbs}
            breadcrumbsJsonLd={breadcrumbsJsonLd}
          >
            {children}
          </ContentSlot>
          <FooterSlot {...footer} />
        </div>
        <SidebarLeftSlot {...sidebarLeft} />
      </div>
    </>
  );
}
