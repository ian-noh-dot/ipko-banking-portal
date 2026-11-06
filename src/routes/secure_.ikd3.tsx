import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/secure.ikd3.css?raw";

export const Route = createFileRoute("/secure_/ikd3")({
  head: () => ({ meta: [{ title: "iPKO – bankowość elektroniczna PKO Banku Polskiego" }] }),
  staticData: { importedDocument: { html: { "lang": "pl" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <div className="flex flex-col relative">
          <div className="bg-white flex flex-col min-h-[calc(var(--viewport-height,100vh))]">
            <div className="d37be864 w-full [@media(max-width:767px)]:max-w-full [@media(max-width:767px)]:[border-bottom:1px_solid_rgb(213,213,213)]">
              <div className="c7e158ce items-end flex justify-between">
                <h1 className="f2ece5c0 a7efb69d border-0 text-black h-px max-w-full overflow-hidden whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)] [@media_only_screen_and_(max-width:767px)]:text-black">iPKO</h1>
                <div className="a41fa18d self-center inline-block shrink-0">
                  <span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">iPKO</span>
                </div>
              </div>
            </div>
            <div className="bcbc5d1e a34c01f4 box-border my-0 mx-auto relative w-full">
              <div className="b97d41a8 b6f80388 grid flex-wrap [@media(max-width:767px)]:flex-col">
                <div className="c859d2b8 d7681f2c">
                  <div className="d11b8db5 Static a237a23c Login flex flex-row flex-wrap relative [@media(max-width:767px)]:w-full">
                    <div className="b229c826 grow -order-2 w-full">
                      <div>
                        <h1 className="f2ece5c0 f294b754 dca28a44 text-black max-w-full [@media_only_screen_and_(max-width:767px)]:text-black">Niestety nie mamy takiej strony</h1>
                      </div>
                    </div>
                    <div className="c8c85215 text-black wrap-break-word p-0">
                      <p className="m-0 mt-0! p-0 pb-[9px]! pt-[7px]!">Strona, której szukasz, nie istnieje.</p>
                    </div>
                    <div className="e074eb29 a0a6a1e7 grow py-[8px] px-0 w-full">
                      <div className="hidden pt-[47px] [border-bottom:1px_solid_rgb(229,229,229)]" />
                      <div className="fcbf00ac flex justify-end">
                        <a className={"e722dae6 f133db51 c21d58dd b389eff2 box-border min-w-[135px] text-center no-underline whitespace-nowrap [&:not(:disabled)]:[&:focus-visible]:[&:not(:active)]:cursor-pointer [@media(hover:hover)]:[&:not(:disabled)]:[&:hover]:[&:not(:active)]:cursor-pointer [@media(hover:none)]:[&:not(:disabled)]:[&:hover]:[&:active]:cursor-pointer [@media(max-width:767px)]:flex-[0_1_100%]"} href="/">
                          <div className="flex justify-center">
                            <span className="self-center overflow-hidden relative text-ellipsis whitespace-nowrap">Przejdź do logowania</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grow relative" />
            <div className="ce498811 [box-shadow:rgb(242,242,242)_0px_-8px_0px] mt-auto max-w-full [border-top:1px_solid_rgb(229,229,229)] [@media(max-width:767px)]:[box-shadow:rgb(242,242,242)_0px_-8px_0px]">
              <div className="e81b1a25 items-center flex my-0 mx-auto [@media(max-width:1279px)]:flex-col-reverse [@media(max-width:1279px)]:pt-[24px]">
                <div className="c1467112 [@media(max-width:1279px)]:basis-full [@media(max-width:767px)]:flex-col">
                  <a className="cefe9b4f mr-[40px] pt-[4px] no-underline" href="//www.pkobp.pl/" rel="noopener noreferrer" target="_blank"><span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>© 2025 PKO Bank Polski</a>
                  <a className="cefe9b4f mr-[40px] pt-[4px] no-underline" href="//www.pkobp.pl/klienci-indywidualni/operacje-zagraniczne/bic-swift-i-iban/" rel="noopener noreferrer" target="_blank"><span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Kod BIC (Swift): BPKOPLPW</a>
                  <a className="cefe9b4f mr-[40px] pt-[4px] no-underline" href="//www.pkobp.pl/polityka-prywatnosci/" rel="noopener noreferrer" target="_blank"><span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Polityka prywatności</a>
                </div>
                <div className="d3a256d9 float-right [@media(max-width:1279px)]:basis-full [@media(max-width:767px)]:pb-[32px]">
                  <a className="cefe9b4f d04fca80 pt-[7px] no-underline" href="//www.pkobp.pl/klienci-indywidualni/bankowosc-elektroniczna/bezpieczenstwo/" rel="noopener noreferrer" target="_blank"><span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Bezpieczeństwo</a>
                  <a className="cefe9b4f d04fca80 pt-[7px] no-underline" href="//www.pkobp.pl/klienci-indywidualni/bankowosc-elektroniczna/zacznij-korzystac/" rel="noopener noreferrer" target="_blank"><span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Pomoc</a>
                  <a className="cefe9b4f d04fca80 pt-[7px] no-underline" href="//www.pkobp.pl/klienci-indywidualni/bankowosc-elektroniczna/serwis-telefoniczny/" rel="noopener noreferrer" target="_blank"><span className="border-0 h-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Kontakt</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
