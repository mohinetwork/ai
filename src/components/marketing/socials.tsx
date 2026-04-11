import React from 'react';
import Image from 'next/image';
import Container from '../global/container';
import Wrapper from '../global/wrapper';
import { Marquee } from '../ui/marquee';

const PROXY = 'https://my.lostingness.site/fyoia/image.php?file=';

const INTEGRATIONS = [
    { name: 'Asana', src: `${PROXY}icons/integrations/asana.svg` },
    { name: 'Figma', src: `${PROXY}icons/integrations/figma.svg` },
    { name: 'Convex', src: `${PROXY}icons/integrations/convex.svg` },
    { name: 'Cursor', src: `${PROXY}icons/integrations/cursor.svg` },
    { name: 'Dribbble', src: `${PROXY}icons/integrations/dribbble.svg` },
    { name: 'Mintlify', src: `${PROXY}icons/integrations/mintlify.svg` },
    { name: 'Cash App', src: `${PROXY}icons/integrations/cashapp.svg` },
    { name: 'Telegram', src: `${PROXY}icons/integrations/telegram.svg` },
    { name: 'Instagram', src: `${PROXY}icons/integrations/instagram.svg` },
    { name: 'Vercel', src: `${PROXY}icons/integrations/vercel.svg` },
    { name: 'Slack', src: `${PROXY}icons/integrations/slack.svg` },
];

const Socials = () => {
    return (
        <section className="w-full py-12 overflow-hidden">
            <Wrapper>
                <Container animation="fadeUp" className="text-center">
                    <p className="text-sm text-transparent font-heading font-medium bg-clip-text bg-linear-to-r from-white/10 via-white/70 to-white/10 uppercase tracking-wider">
                        Works seamlessly with
                    </p>
                </Container>
            </Wrapper>

            <div className="relative mt-8 [--gap:2.5rem]">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

                <Marquee pauseOnHover repeat={2} className="[--duration:25s]">
                    {INTEGRATIONS.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex items-center justify-center h-12 px-6"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={100}
                                height={40}
                                className="max-w-[90px] max-h-9 w-auto h-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                unoptimized
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Socials;

