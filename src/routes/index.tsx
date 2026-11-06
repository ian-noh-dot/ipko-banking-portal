import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Strona logowania | iPKO - bankowość elektroniczna PKO Banku Polskiego" }] }),
  staticData: { importedDocument: { html: { "lang": "pl", "style": { "--viewport-height": "864px" } as import("react").CSSProperties }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <div className="ca1489ce d9e61e27 bg-[#f2f2f2]">
          <div className="d8fba9e8 items-center my-0 mx-auto max-w-[1230px]">
            <img className="d3ebc253" alt="aplikacja mobilna" src="/site-assets/5a5fa74c6edde8d2-8a56b6f428449bb1ff1c4f995e32c2d2.png" />
            <div className="e58242d5 [@media(max-width:1279px)]:flex-col">
              <a className="f66d1995 ecfa5830 max-w-full" href={"https://www.pkobp.pl/klient-indywidualny/aplikacja-iko-ipko/aplikacja-mobilna-iko?utm_source=ipko&utm_medium=login_alert&utm_campaign=activity_2025_08_09"}>
                <div className="afe081a4 pb-[3px] pt-px"><span className="c2854488 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]"><div><p className="p-0">Otwórz w nowej karcie</p></div> </span>Szybsze logowanie do konta?</div>
              </a>
              <div className="d36b7024 text-site-import-muted-foreground">
                <div>
                  <p className="text-site-import-muted-foreground p-0">Wybierz aplikację mobilną</p>
                </div>
              </div>
            </div>
            <button className="e8c5aaed f133db51 b338c9cf a0336e3e ba96c5ca overflow-visible text-center no-underline whitespace-nowrap" type="button">
              <div className="d48735c6 justify-center">
                <span className="beebd377 self-center overflow-hidden relative text-ellipsis whitespace-nowrap">Więcej</span>
              </div>
            </button>
            <button className="c5d0510c f133db51 a0336e3e ed622332 overflow-visible" type="button">
              <div className="d48735c6">
                <span className="beebd377 relative">Wybierz aplikację mobilną</span>
              </div>
            </button>
            <button className="e2227e50 f133db51 a0336e3e dbfc9cf1 min-w-auto overflow-visible text-center no-underline whitespace-nowrap [@media(max-width:639px)]:-order-1" type="button">
              <div className="d48735c6 justify-center">
                <span className="beebd377 self-center border-0 overflow-hidden p-0 absolute text-ellipsis whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Zamknij</span>
              </div>
            </button>
          </div>
        </div>
        <div className="ed8fdaca e5613842 relative w-full" tabIndex={-1}>
          <div className="c4d07885">
            <div>
              <div className="a3a8502a flex-col relative">
                <div className="a514149a bg-white flex-col min-h-[calc(var(--viewport-height,100vh))]">
                  <div className="d37be864 w-full [@media(max-width:767px)]:max-w-full">
                    <div className="c7e158ce items-center justify-between max-w-[1230px] [@media(max-width:767px)]:py-0 [@media(max-width:767px)]:px-[16px] [@media(min-width:1024px)]:flex-nowrap">
                      <h1 className="f2ece5c0 a7efb69d border-0 max-w-full overflow-hidden absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]" tabIndex={-1}>iPKO</h1>
                      <a className="c8ccd145 a41fa18d df8c2e52 c2ec9ffd self-center cursor-pointer shrink-0" href="/secure/ikd3">
                        <span className="aabe7cda border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">iPKO</span>
                      </a>
                      <h2 className="c8c85215 ee635034 b5adbbb0 border-0 text-black overflow-hidden wrap-break-word absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Menu nawigacyjne</h2>
                      <div className="e8c4ef8c d592c9a6 d3338f23 b4ec4bb1 b9254197 d5d3b8b1 items-center box-border justify-center order-5 w-auto">
                        <div className="d6d3732e ef3e3886 c199bee0 grow max-w-full relative w-full">
                          <button className={"f84c19f3 cef98518 overflow-visible whitespace-nowrap w-full [&:disabled]:pointer-events-none"} aria-describedby="75718ab7-0fb4-4930-a46f-0246993e810b" aria-expanded="false" type="button" role="listbox">
                            <div className="c80f16f0 items-center box-border justify-between w-full" id="75718ab7-0fb4-4930-a46f-0246993e810b">
                              <div className="ee384516 overflow-hidden text-left">
                                <div className="bf33cd28 e2849c95 f1ef49db items-center box-border ml-auto">
                                  <div className="e249ced6 ccb5c0f0 flex-none mr-[8px] w-[24px]">
                                    <svg className="f96ab19f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" aria-hidden="true">
                                      <g>
                                        <path fill="#fff" d="M4 0h24a4.01 4.01 0 0 1 4 4v16a4.01 4.01 0 0 1-4 4H4a4.01 4.01 0 0 1-4-4V4a4.01 4.01 0 0 1 4-4" />
                                        <path fill="#b7b7b7" d="M28 24H4a4.054 4.054 0 0 1-4-4V4a4.054 4.054 0 0 1 4-4h24a4.054 4.054 0 0 1 4 4v16a4.054 4.054 0 0 1-4 4M4 1a3.04 3.04 0 0 0-3 3v16a3.04 3.04 0 0 0 3 3h24a3.04 3.04 0 0 0 3-3V4a3.04 3.04 0 0 0-3-3Z" />
                                      </g>
                                      <path fill="#fff" d="M4 1h24a2.946 2.946 0 0 1 3 3v8H1V4a2.946 2.946 0 0 1 3-3" />
                                      <path fill="red" d="M1 12h30v8a2.946 2.946 0 0 1-3 3H4a2.946 2.946 0 0 1-3-3z" />
                                    </svg>
                                  </div>
                                  <div className="b7ca31c4 text-start" lang="pl">PL</div>
                                </div>
                              </div>
                              <div className="fe794ec7 items-center shrink-0 ml-[8px] min-w-[24px]">
                                <svg className="f96ab19f e7eb7140 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                                  <g>
                                    <path fill="#003574" d="M13.556 14.642 12 15.948l-1.556-1.306-6.949-5.831a1.96 1.96 0 0 1 2.822-.243L12 13.337l5.683-4.769a1.96 1.96 0 0 1 2.822.243Z" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="a9c065d6 text-site-import-accent pb-[2px] pt-[2px] relative w-full" />
                    </div>
                  </div>
                  <div className="a3a8502a cfabd163 relative" id="MAIN_CONTENT">
                    <div className="ed8fdaca relative w-full" tabIndex={-1}>
                      <div className="c4d07885">
                        <div>
                          <div className="bcbc5d1e a34c01f4 box-border my-0 mx-auto relative w-full">
                            <div className="b97d41a8 b6f80388 flex-wrap [@media(max-width:767px)]:flex-col">
                              <div className="c859d2b8">
                                <form tabIndex={-1}>
                                  <div className="c8a2fc36 border-0 mt-[-24px] overflow-hidden p-0 absolute top-0 whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]" />
                                  <div className="d11b8db5 a237a23c Login flex-row flex-wrap relative [@media(max-width:767px)]:w-full">
                                    <div className="f3c13f56 items-start gap-[25px] justify-between pb-[16px] w-full">
                                      <h1 className="f2ece5c0 a7efb69d border-0 max-w-full overflow-hidden absolute whitespace-nowrap w-auto [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]" tabIndex={-1}>iPKO</h1>
                                      <div className="shrink-0">
                                        <h1 className="f2ece5c0 f294b754 max-w-full relative w-auto" tabIndex={-1}>Zaloguj się</h1>
                                      </div>
                                      <a className="f66d1995 e302ba76 self-center max-w-full [@media_only_screen_and_(max-width:767px)]:pb-[3px] [@media_only_screen_and_(max-width:767px)]:pt-px" href="https://www.pkobp.pl/klienci-indywidualni/konta/konta-osobiste/zostan-naszym-klientem/">
                                        <div className="afe081a4 pb-[2px] pt-[2px]"><span className="c2854488 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]"><div><p className="p-0">Otwórz w nowej karcie</p></div> </span>Nie masz konta?</div>
                                      </a>
                                    </div>
                                    <div className="a9c065d6 cb17350c text-site-import-accent pb-[2px] pt-[2px] relative w-full" />
                                    <div className="b6ba9d99 adc5c701 a40baa12 w-full">
                                      <div className="d665c433 grow max-w-full [@media_only_screen_and_(max-width:767px)]:max-w-full">
                                        <div className="e3337bf2 flex-col [@media_only_screen_and_(max-width:767px)]:flex-col">
                                          <div className="d8fe3a59 grow-0 flex-wrap relative">
                                            <div className="b9366b84 d2642ff9 d88a29f0 grow -order-2 relative w-full">
                                              <div className="f4f1b864 items-center relative w-full">
                                                <input className="focus-visible overflow-visible" aria-labelledby="cd488f4a-8eaa-4306-949e-c2b0542e737a" autoComplete="off" placeholder="Wpisz numer klienta lub login" id="cd488f4a-8eaa-4306-949e-c2b0542e737a" aria-describedby="8b0ea705-e02e-4e35-a621-13090e0173ca" defaultValue="" />
                                                <div className="daaa5dec outline-none pointer-events-none absolute" />
                                              </div>
                                            </div>
                                            <div className="a9c065d6 aac8bd48 text-site-import-accent grow pb-[2px] pt-[2px] relative w-full" id="8b0ea705-e02e-4e35-a621-13090e0173ca" />
                                            <div id="IPKO-RWD-LOGIN-TOP-RIGHT" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="e074eb29 grow py-[8px] px-0 w-full">
                                      <div className="ee1fa90a pt-[47px] [border-bottom:1px_solid_rgb(229,229,229)]" />
                                      <div className="fcbf00ac">
                                        <button className="e722dae6 f133db51 c21d58dd b389eff2 float-right min-w-[135px] overflow-visible text-center no-underline whitespace-nowrap [@media(max-width:767px)]:flex-[0_1_100%]" type="submit">
                                          <div className="d48735c6 justify-center">
                                            <span className="beebd377 self-center overflow-hidden relative text-ellipsis whitespace-nowrap">Dalej</span>
                                          </div>
                                        </button>
                                        <a className="f66d1995 d7ec7ee0 e25dbcab max-w-full [@media(max-width:767px)]:order-0 [@media_only_screen_and_(max-width:767px)]:pb-[3px] [@media_only_screen_and_(max-width:767px)]:pt-px" href="/secure/ikd3#INT_LOGIN_HELP" {...({ align: "left" } as any)}>
                                          <div className="afe081a4 pb-[2px] pt-[2px]">Pomoc w logowaniu</div>
                                        </a>
                                        <a className="f66d1995 c0eb3934 d7ec7ee0 max-w-full [@media(max-width:767px)]:order-1 [@media_only_screen_and_(max-width:767px)]:pb-[3px] [@media_only_screen_and_(max-width:767px)]:pt-px" href="https://www.pkobp.pl/klienci-indywidualni/konta/konta-osobiste/zostan-naszym-klientem/">
                                          <div className="afe081a4 pb-[2px] pt-[2px]"><span className="c2854488 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]"><div><p className="p-0">Otwórz w nowej karcie</p></div> </span>Nie masz konta?</div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="d81a5808 [@media(max-width:479px)]:w-full" />
                              <div className="bfd7e1e8 self-center">
                                <div>
                                  <div className="fc6c5292 d03688d7 items-start my-0 mx-auto">
                                    <picture>
                                      <source media="(min-width: 1280px)" srcSet="/site-assets/d82432a751fddc8a.png, /site-assets/d11f0c802bd0a56e.png 2x" />
                                      <source media="(min-width: 1024px)" srcSet="/site-assets/ab8248cc88fa21b1.png, /site-assets/787446f5818b1264.png 2x" />
                                      <source media="(min-width: 768px)" srcSet="/site-assets/d82432a751fddc8a.png, /site-assets/d11f0c802bd0a56e.png 2x" />
                                      <source media="(min-width: 480px)" srcSet="/site-assets/ab8248cc88fa21b1.png, /site-assets/787446f5818b1264.png 2x" />
                                      <source media="(min-width: 320px)" srcSet="/site-assets/2aa6b18347194b85.png, /site-assets/3ef0d65650fcc741.png 2x" />
                                      <img alt="Pożyczka gotówkowa" src="/site-assets/d82432a751fddc8a.png" height="208" width="208" srcSet="/site-assets/d82432a751fddc8a.png, /site-assets/d11f0c802bd0a56e.png 2x" />
                                    </picture>
                                    <div className="e73fe30a b0ce2e05 flex-col justify-center w-full">
                                      <div>
                                        <h2 id="przygotuj-się-na-jesienne-wydatki-rrso-994">Przygotuj się na jesienne wydatki. RRSO 9,94%</h2>
                                        <p className="text-black p-0 pb-px! pt-[7px]!">Weź swoją pierwszą pożyczkę u nas – online i na specjalnych warunkach</p>
                                      </div>
                                      <div className="af2ff28f a5868c6d [@media(max-width:479px)]:bg-transparent [@media(max-width:479px)]:p-0 [@media(max-width:767px)]:bg-transparent [@media(max-width:767px)]:p-0">
                                        <button className="e722dae6 f133db51 df859b0b f46b8866 min-w-[135px] overflow-visible text-center no-underline whitespace-nowrap [@media(max-width:479px)]:flex-none [@media(max-width:479px)]:w-full [@media(max-width:767px)]:flex-none [@media(max-width:767px)]:w-full" type="button">
                                          <div className="d48735c6 justify-center">
                                            <span className="beebd377 self-center overflow-hidden relative text-ellipsis whitespace-nowrap">Sprawdź</span>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-[40px] pt-[38px] pr-0 pb-[10px] pl-0 [border-top:1px_solid_rgb(229,229,229)]">
                              <div className="b97d41a8 flex-wrap [@media(max-width:767px)]:flex-col">
                                <h1 className="f2ece5c0 a7efb69d border-0 max-w-full overflow-hidden absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]" tabIndex={-1} aria-level={2}>Aktualności</h1>
                                <div className="f88ebb23 a38ec978 box-border grow [@media(max-width:767px)]:my-[8px] [@media(max-width:767px)]:mx-0 [@media(max-width:767px)]:max-w-full [@media(max-width:767px)]:w-auto">
                                  <div>
                                    <p className="text-black p-0 pb-[4px]! pt-[4px]!">
                                      <em className="text-site-import-muted-foreground m-0 pt-[5px] pr-0 pb-[3px] pl-0">22.10.2026</em>
                                    </p>
                                    <h3 id="e-mail-o-aktualizacji-danych-sprawdź-zanim-klikniesz">E-mail o aktualizacji danych? Sprawdź, zanim klikniesz</h3>
                                    <p className="text-black p-0 pb-[4px]! pt-[4px]!">Cyberprzestępcy rozsyłają fałszywe e-maile i podszywają się pod PKO Bank Polski. Sprawdź, jak działają i jak się chronić</p>
                                  </div>
                                  <a className="f66d1995 fa345a30 m-0 max-w-full pb-[4px] pt-[16px]" aria-label="Więcej: E-mail o aktualizacji danych? Sprawdź, zanim klikniesz" href="http://www.pkobp.pl/aktualnosci/bezpieczenstwo/uwazaj-na-falszywe-e-maile-o-aktualizacji-danych">
                                    <div className="f60cdb1d pb-[2px] pt-[2px]"><span className="c2854488 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]"><div><p className="text-black p-0 pb-[4px]! pt-[4px]!">Otwórz w nowej karcie</p></div> </span>Więcej</div>
                                  </a>
                                </div>
                                <div className="f88ebb23 a38ec978 box-border grow [@media(max-width:767px)]:my-[8px] [@media(max-width:767px)]:mx-0 [@media(max-width:767px)]:max-w-full [@media(max-width:767px)]:w-auto">
                                  <div>
                                    <p className="text-black p-0 pb-[4px]! pt-[4px]!">
                                      <em className="text-site-import-muted-foreground m-0 pt-[5px] pr-0 pb-[3px] pl-0">02.11.2026</em>
                                    </p>
                                    <h3 id="oszuści-podszywają-się-pod-bank">Oszuści podszywają się pod bank</h3>
                                    <p className="text-black p-0 pb-[4px]! pt-[4px]!">Uważaj na fałszywe e-maile o aktywacji klucza bezpieczeństwa</p>
                                  </div>
                                  <a className="f66d1995 fa345a30 m-0 max-w-full pb-[4px] pt-[16px]" aria-label="Więcej: Oszuści podszywają się pod bank" href="https://www.pkobp.pl/aktualnosci/bezpieczenstwo/oszusci-podszywaja-sie-pod-bank-11-2026">
                                    <div className="f60cdb1d pb-[2px] pt-[2px]"><span className="c2854488 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]"><div><p className="text-black p-0 pb-[4px]! pt-[4px]!">Otwórz w nowej karcie</p></div> </span>Więcej</div>
                                  </a>
                                </div>
                                <div className="f88ebb23 a38ec978 dd84c413 box-border grow [@media(max-width:767px)]:my-[8px] [@media(max-width:767px)]:mx-0 [@media(max-width:767px)]:max-w-full [@media(max-width:767px)]:w-auto">
                                  <div>
                                    <p className="text-site-import-accent p-0 pb-[4px]! pt-[4px]!">
                                      <em className="text-site-import-muted-foreground m-0 pt-[5px] pr-0 pb-[3px] pl-0">02.11.2026</em>
                                    </p>
                                    <h3 id="kolejne-ataki-cyberprzestępców">Kolejne ataki cyberprzestępców</h3>
                                    <p className="text-site-import-accent p-0 pb-[4px]! pt-[4px]!">Sprawdź najnowsze ostrzeżenia.</p>
                                  </div>
                                  <a className="f66d1995 fa345a30 m-0 max-w-full pb-[4px] pt-[16px]" aria-label="Więcej: Kolejne ataki cyberprzestępców" href={"https://www.pkobp.pl/aktualnosci?page=1&categories=3"}>
                                    <div className="f60cdb1d pb-[2px] pt-[2px]"><span className="c2854488 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]"><div><p className="text-site-import-accent p-0 pb-[4px]! pt-[4px]!">Otwórz w nowej karcie</p></div> </span>Więcej</div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f44e7371 grow relative" />
                  <div className="ce498811 [box-shadow:rgb(242,242,242)_0px_-8px_0px] mt-auto max-w-full [@media(max-width:767px)]:[box-shadow:rgb(242,242,242)_0px_-8px_0px]">
                    <div className="e81b1a25 items-center my-0 mx-auto [@media(max-width:1279px)]:flex-col-reverse [@media(max-width:1279px)]:pt-[24px]">
                      <div className="c1467112 [@media(max-width:1279px)]:basis-full [@media(max-width:767px)]:flex-col">
                        <a className="cefe9b4f mr-[40px] pt-[4px]" href="https://www.pkobp.pl/" rel="noopener noreferrer" target="_blank"><span className="d5da51e1 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>© 2026 PKO Bank Polski</a>
                        <a className="cefe9b4f mr-[40px] pt-[4px]" href="https://www.pkobp.pl/klienci-indywidualni/operacje-zagraniczne/bic-swift-i-iban/" rel="noopener noreferrer" target="_blank"><span className="d5da51e1 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Kod BIC (Swift): BPKOPLPW</a>
                        <a className="cefe9b4f mr-[40px] pt-[4px]" href="https://www.pkobp.pl/polityka-prywatnosci/" rel="noopener noreferrer" target="_blank"><span className="d5da51e1 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span>Polityka prywatności</a>
                      </div>
                      <div className="d3a256d9 float-right [@media(max-width:1279px)]:basis-full [@media(max-width:767px)]:pb-[32px]">
                        <a className="cefe9b4f d04fca80 pt-[7px]" href="https://www.pkobp.pl/klienci-indywidualni/bankowosc-elektroniczna/bezpieczenstwo/" rel="noopener noreferrer" target="_blank"><span className="d5da51e1 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span><svg className="f96ab19f a8e2ca53 bottom-px pr-[8px] relative align-top w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="#003574" d="M19 4H5l.007 7.71c0 3.744 6.472 7.562 6.748 7.722l.252.146.252-.146c.276-.16 6.748-3.978 6.748-7.722C19.007 9.211 19 4 19 4m-6.992 14.418c-1.886-1.153-6-4.191-6-6.707v-1.247c0-.337-.005-.8-.005-5.464h12c0 1.278.006 4.706.006 6.711-.002 2.513-4.117 5.554-6.002 6.707ZM15.45 8.53a1 1 0 0 1 1.411 0l-5.633 5.633-3.556-3.509a1 1 0 0 1 1.414-.009l2.137 2.108Z" /></svg>Bezpieczeństwo</a>
                        <a className="cefe9b4f d04fca80 pt-[7px]" href="https://www.pkobp.pl/klienci-indywidualni/bankowosc-elektroniczna/zacznij-korzystac/" rel="noopener noreferrer" target="_blank"><span className="d5da51e1 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span><svg className="f96ab19f a8e2ca53 bottom-px pr-[8px] relative align-top w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="#003574" d="M12 4a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m0 1a6.97 6.97 0 0 1 4.569 1.708l-1.43 1.43A4.95 4.95 0 0 0 12 7a4.95 4.95 0 0 0-3.129 1.13L7.441 6.7A6.96 6.96 0 0 1 12 5m2.458 10.132A3.96 3.96 0 0 1 12 16a3.96 3.96 0 0 1-2.448-.86 4 4 0 0 1-.706-.709A3.96 3.96 0 0 1 8 12a3.96 3.96 0 0 1 .869-2.458 4 4 0 0 1 .71-.7A3.96 3.96 0 0 1 12 8a3.96 3.96 0 0 1 2.431.846 4 4 0 0 1 .709.706A3.96 3.96 0 0 1 16 12a3.96 3.96 0 0 1-.838 2.421 4 4 0 0 1-.704.711M5 12a6.96 6.96 0 0 1 1.732-4.6L8.16 8.828A4.95 4.95 0 0 0 7 12a4.95 4.95 0 0 0 1.138 3.139l-1.43 1.43A6.97 6.97 0 0 1 5 12m7 7a6.96 6.96 0 0 1-4.585-1.723l1.428-1.429A4.95 4.95 0 0 0 12 17a4.96 4.96 0 0 0 3.167-1.16l1.428 1.428A6.96 6.96 0 0 1 12 19m5.3-2.441-1.429-1.43A4.95 4.95 0 0 0 17 12a4.95 4.95 0 0 0-1.152-3.157l1.428-1.428A6.96 6.96 0 0 1 19 12a6.96 6.96 0 0 1-1.7 4.559" /></svg>Pomoc</a>
                        <a className="cefe9b4f d04fca80 pt-[7px]" href="https://www.pkobp.pl/klienci-indywidualni/bankowosc-elektroniczna/serwis-telefoniczny/" rel="noopener noreferrer" target="_blank"><span className="d5da51e1 border-0 overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(1px,1px,1px,1px)] [clip-path:inset(100%)]">Otwórz w nowej karcie </span><svg className="f96ab19f a8e2ca53 bottom-px pr-[8px] relative align-top w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="#003574" d="M4 6v12h16V6Zm15 1v1.2l-7 4.642L5 8.2V7ZM5 17V9.432l7 4.644 7-4.643V17Z" /></svg>Kontakt</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="fde5a91c fixed transition-opacity duration-300 z-16">
                      <div className="c2e38a24 [@media(max-width:639px)]:flex-col [@media(max-width:639px)]:max-h-full [@media(max-width:639px)]:right-0 [@media(max-width:639px)]:top-auto [@media(max-width:767px)]:bottom-0 [@media(max-width:767px)]:w-full" tabIndex={-1} />
                    </div>
                    <div className="fde5a91c fixed transition-opacity duration-300 z-16">
                      <div className="c2e38a24 [@media(max-width:639px)]:flex-col [@media(max-width:639px)]:max-h-full [@media(max-width:639px)]:right-0 [@media(max-width:639px)]:top-auto [@media(max-width:767px)]:bottom-0 [@media(max-width:767px)]:w-full" tabIndex={-1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
