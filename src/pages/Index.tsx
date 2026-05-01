import { useEffect, useRef, useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { StorySection } from "@/components/StorySection";
import { Reveal } from "@/components/Reveal";
import { FinalReveal } from "@/components/FinalReveal";
import { Particles } from "@/components/Particles";
import { Ornament } from "@/components/Ornament";

const Index = () => {
  const [started, setStarted] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (started && storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [started]);

  return (
    <main className="bg-cream min-h-screen">
      <IntroScreen onStart={() => setStarted(true)} />

      <div ref={storyRef}>
        {/* 2. Floating Story */}
        <StorySection className="bg-cream">
          <Particles count={18} color="hsl(var(--gold))" />
          <p className="line-soft mb-10 text-xs uppercase tracking-[0.4em]">chapter one</p>
          <div className="space-y-14">
            <Reveal as="p" className="line line-soft animate-float-slow" delay={0}>
              We were strangers once…
            </Reveal>
            <Reveal as="p" className="line line-soft animate-float" delay={400}>
              No reason to meet…
            </Reveal>
            <Reveal as="p" className="line text-dusk italic" delay={900}>
              But somehow… we stayed.
            </Reveal>
          </div>
          <Ornament symbol="✦" />
        </StorySection>

        {/* 3. Connection */}
        <StorySection className="bg-warm">
          <Particles count={14} color="hsl(var(--candle))" />
          <Reveal as="p" className="line text-dusk leading-[1.8]">
            You came into my life
            <span className="block font-script text-4xl sm:text-5xl my-2 line-gold">quietly…</span>
            but became someone
            <span className="block italic">I can't ignore.</span>
          </Reveal>
        </StorySection>

        {/* 4. Heartbeat */}
        <StorySection className="bg-cream">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full animate-heartbeat"
            style={{
              background:
                "radial-gradient(circle, hsl(0 70% 65% / 0.35) 0%, hsl(15 80% 70% / 0.18) 35%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full animate-heartbeat"
            style={{
              background: "radial-gradient(circle, hsl(0 80% 70% / 0.4) 0%, transparent 70%)",
              animationDelay: "0.3s",
            }}
          />
          <div className="space-y-10 relative">
            <p className="line-soft text-xs uppercase tracking-[0.4em]">a quiet truth</p>
            <Reveal as="p" className="line text-dusk" delay={0}>
              Some people come by chance…
            </Reveal>
            <Reveal as="p" className="line-script text-5xl sm:text-6xl line-gold" delay={500}>
              but stay by choice.
            </Reveal>
          </div>
        </StorySection>

        {/* 5. Letter Reveal */}
        <StorySection className="bg-letter">
          <Particles count={12} color="hsl(var(--candle))" />
          <p className="line-soft mb-8 text-xs uppercase tracking-[0.4em]">a letter for you</p>
          <div className="mx-auto">
            <div className="mx-auto rounded-[2px] paper p-6 sm:p-8 text-left relative max-w-5xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[hsl(42_65%_94%)] text-dusk/40 text-xs tracking-[0.4em]">
                ✦ &nbsp; ❀ &nbsp; ✦
              </div>
              <p className="font-display text-[1.1rem] sm:text-[1.2rem] leading-[1.6] text-ink drop-cap">
                Dear Chelli 💛,
                <br /><br />
                Konni years mundu naa life lo nenu Devudini okkate koranu…
                naaku oka manchi bond kavali ani. Relationship edaina parledhu, kani nijamgaa manastho connect ayye bond kavali ani.
                Endhukante appativaraku nenu chala fake anipinchina bonds madhya undipoyanu.
                <br /><br />
                Ippudu artham ayindi… Devudu manam adigina ventane ivvadu.
                Kani correct time lo matram correct person ni pampisthadu.
                Aa gift nuvve ani ippudu clear ga ardham avthundi.
                <br /><br />
                B.Tech lo join ayyaka life ala normal ga nadichipoyindi.
                3rd year lo clubs join ayyi, coding club lo random ga kalisina oka ammayi…
                Appudu simple ga anipinchindi.
                Kani mellaga nuvvu naa life lo place thesukuntav ani appudu teliyaledu.
                <br /><br />
                Manam just oka year nunchi matladukuntunnam…
                Kani naku matram idi chala years nunchi unna bond la feel ayindi.
                <br /><br />
                First lo nenu ardham chesukoledu nuvvu naku entha care isthunnavo.
                Nenu alanti attention ki alavatu kaadhu… andhuke konni sari respond kuda avvalekapoyanu.
                Kani adi ignore kaadhu ani ippudu cheppali anipisthundi.
                <br /><br />
                Nijamga cheppali ante…
                ee bond lo nuvvu ichina daniki nenu half kuda ivvalekapoyanu.
                Adhi naa thappu.
                <br /><br />
                Kani nuvvu matram eppudu change avvaledu…
                Chinna chinna vishayalu kuda gurthupettukoni, nannu judge cheyakunda, naa side lo undav.
                Adhe naku chala special.
                <br /><br />
                Thanks chelli… nijamga.
                Nenu adagakapoyina care ki,
                Naku teliyakuda ichina support ki,
                Prati chinna vishayam lo nuvvu chesina anni ki.
                <br /><br />
                Sorry kuda cheppali…
                Naa silence ki,
                Naa confusion ki,
                Late ga ardham chesukunna daniki,
                Mariyu konni moments lo ninnu light ga thiskunna daniki.
                <br /><br />
                Nuvvu okasari t-shirt gurinchi adigav kada…
                Appude naku anipinchindi — ilanti vishayalu prathi sari possible kaavu ani.
                Andhuke ee website create chesa…
                Eppudaina kavali anipinchina open chesi chudachu ani.
                Idhi pedda vishayam kaadhu… just oka chinna feeling.
                <br /><br />
                Nuvvu ichina gift… nenu eppatiki marchiponu.
                Aa 3 hours… nijamga naa life lo chala special.
                Chinna time ayina… kani naku chala valuable.
                <br /><br />
                Nuvvu naaku oka important vishayam nerpinchav —
                Effort unte manushulu maaragalru ani.
                Ela unna person aina… mellaga better avvagaladu ani.
                <br /><br />
                Konni sarlu anipisthundi…
                Devudu ee bond dwara manaki konni vishayalu chupinchali ani try chesadu emo ani.
                Future lo manam inka better ga undadaniki.
                <br /><br />
                Nuvvu already strong person…
                Kani nee valla nenu kuda konchem better ayyanu ani anipisthundi.
                <br /><br />
                Oka vishayam matram nijam —
                Nuvvu naa life lo ochinappati nunchi, naku oka support dorikindi.
                <br /><br />
                Nenu perfect ga express cheyalekapovadam naa problem…
                Kani try chesthunnanu.
                Konchem late ayina… ippudu ardham ayindi ee bond value.
                <br /><br />
                Final ga okkate cheptha…
                Ee bond ilane undali… simple ga, real ga… without conditions.
                <br /><br />
                Neeku ee website or gifts chinna vishayam ayyochu…
                Kani naaku matram oka feeling —
                Daily life lo use ayye vishayalu ayithe,
                Nenu konchem aina neetho untanu ani.
              </p>
              <p className="mt-6 text-right font-script text-2xl line-gold">Yours<br/>Vamsi Annaya:)</p>
            </div>
          </div>
        </StorySection>

        {/* 6. Apology */}
        <StorySection className="bg-rain">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="absolute block w-px bg-gradient-to-b from-transparent via-white/80 to-transparent animate-rain"
                style={{
                  left: `${(i * 53) % 100}%`,
                  height: `${20 + (i % 5) * 12}vh`,
                  animationDuration: `${6 + (i % 6)}s`,
                  animationDelay: `${(i % 7) * 0.6}s`,
                }}
              />
            ))}
          </div>
          <div className="space-y-10 relative" style={{ filter: "blur(0.3px)" }}>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">if I ever…</p>
            <Reveal as="p" className="line text-white/95" delay={0}>
              If I ever hurt you…
            </Reveal>
            <Reveal as="p" className="line text-white/90" delay={500}>
              or failed to stand by you…
            </Reveal>
            <Reveal as="p" className="line-script text-5xl sm:text-6xl text-white" delay={1000}>
              I'm truly sorry.
            </Reveal>
          </div>
        </StorySection>

        {/* 7. Little Moments */}
        <StorySection className="bg-cream">
          <Particles count={20} color="hsl(var(--gold))" />
          <p className="line-soft mb-10 text-xs uppercase tracking-[0.4em]">the little things</p>
          <div className="space-y-12">
            <Reveal as="p" className="line line-soft" delay={0}>
              Our random talks…
            </Reveal>
            <Reveal as="p" className="line line-soft" delay={400}>
              our silly fights…
            </Reveal>
            <Reveal as="p" className="line line-soft" delay={800}>
              those small moments…
            </Reveal>
            <Ornament symbol="❀" />
            <Reveal as="p" className="line text-dusk italic" delay={1300}>
              they mean more than you think.
            </Reveal>
          </div>
        </StorySection>

        {/* 8. Promise */}
        <StorySection className="bg-promise">
          <Particles count={16} color="hsl(var(--honey))" />
          <p className="line-soft mb-10 text-xs uppercase tracking-[0.4em]">a promise</p>
          <div className="space-y-10">
            <Reveal as="p" className="line text-dusk" delay={0}>
              No matter what happens…
            </Reveal>
            <Reveal as="p" className="line text-dusk" delay={500}>
              no matter how life changes…
            </Reveal>
            <Reveal as="p" className="line-script text-5xl sm:text-6xl line-gold" delay={1000}>
              I'm not going anywhere.
            </Reveal>
          </div>
        </StorySection>

        {/* 9. Final Scene */}
        <StorySection className="bg-sunrise animate-shimmer">
          {/* Sun glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[60vh] w-[100vw] -translate-x-1/2 animate-glow-pulse"
            style={{
              background: "radial-gradient(ellipse at bottom, hsl(48 100% 85% / 0.8) 0%, transparent 70%)",
            }}
          />
          <Particles count={20} color="hsl(48 100% 80%)" />
          <div className="space-y-8 relative">
            <Reveal as="p" className="line text-ink font-medium" delay={0}>
              Not by blood.
            </Reveal>
            <Reveal as="p" className="line text-ink font-medium" delay={500}>
              Not by name.
            </Reveal>
            <Reveal as="p" className="line text-ink font-medium" delay={1000}>
              But by heart…
            </Reveal>
            <Ornament symbol="💛" />
            <Reveal as="p" className="line-script text-6xl sm:text-7xl line-gold pt-2" delay={1700}>
              you are my sister
            </Reveal>
          </div>
        </StorySection>

        {/* 10. Final Interaction */}
        <StorySection className="bg-final">
          <Particles count={30} color="hsl(var(--candle))" />
          <FinalReveal />
        </StorySection>

        {/* Tiny signature footer */}
        <footer className="bg-final py-12 text-center">
          <p className="font-script text-2xl line-gold">made with love · for you</p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-whisper">💛</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
