"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Container from '../global/container';
import Wrapper from '../global/wrapper';

const PROXY = 'https://my.lostingness.site/fyoia/image.php?file=';

const SCREENSHOTS = [
    {
        name: 'dashboard',
        label: 'Dashboard',
        src: `${PROXY}anmix-dashboard%20(1).jpg`,
        span: 'col-span-2',
    },
    {
        name: 'client',
        label: 'Clients',
        src: `${PROXY}client.png`,
        span: 'col-span-1',
    },
    {
        name: 'invoices',
        label: 'Invoices',
        src: `${PROXY}invoices.png`,
        span: 'col-span-1',
    },
    {
        name: 'project',
        label: 'Projects',
        src: `${PROXY}project.png`,
        span: 'col-span-1',
    },
    {
        name: 'team',
        label: 'Team',
        src: `${PROXY}team.png`,
        span: 'col-span-1',
    },
];

const DashboardPreview = () => {
    return (
        <section id="dashboard-preview" className="w-full py-16 lg:py-24">
            <Wrapper>
                <div className="text-center space-y-4 mb-12">
                    <Container animation="fadeUp">
                        <h2 className="title">Dashboard &amp; UI Preview</h2>
                    </Container>
                    <Container animation="fadeUp" delay={0.1}>
                        <p className="desc">See how your workspace looks in action</p>
                    </Container>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {SCREENSHOTS.map((shot, i) => (
                        <motion.div
                            key={shot.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`${shot.span} group relative overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5`}
                        >
                            <Image
                                src={shot.src}
                                alt={shot.label}
                                width={1280}
                                height={800}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white text-sm font-medium">{shot.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default DashboardPreview;
