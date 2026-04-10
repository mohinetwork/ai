import { getAssetUrl } from "./assets";

export const capabilities = [
    {
        id: 1,
        title: "AI Chat Models",
        description: "Ask questions, generate content, and solve complex tasks with Fyoia AI models.",
        illustration: getAssetUrl("client", "/images/client.png"),
        icon: "users"
    },
    {
        id: 2,
        title: "Image & Video Generation",
        description: "Create high-quality images and videos from simple text prompts.",
        illustration: getAssetUrl("project", "/images/project.png"),
        icon: "calendar"
    },
    {
        id: 3,
        title: "Coding & Development",
        description: "Generate code, debug errors, and build projects faster with AI.",
        illustration: getAssetUrl("team", "/images/team.png"),
        icon: "zap"
    },
    {
        id: 4,
        title: "Fast Payment Method",
        description: "Fast payment methods like Gpay, Alipay, Stripe and more.",
        illustration: getAssetUrl("invoices", "/images/invoices.png"),
        icon: "file"
    }
]

export const AVATAR_ITEMS = [
    {
        id: 1,
        name: "Sarah Chen",
        designation: "Freelance Designer",
        image: getAssetUrl("avatar1", "/images/avatars/avatar1.jpg")
    },
    {
        id: 2,
        name: "Mike Johnson",
        designation: "Founder",
        image: getAssetUrl("avatar2", "/images/avatars/avatar2.jpg")
    },
    {
        id: 3,
        name: "Ethan Wilson",
        designation: "Freelancer",
        image: getAssetUrl("avatar3", "/images/avatars/avatar3.jpg")
    },
    {
        id: 4,
        name: "Lisa Park",
        designation: "Freelancer",
        image: getAssetUrl("avatar4", "/images/avatars/avatar4.jpg")
    },
    {
        id: 5,
        name: "Alex Rivera",
        designation: "Founder",
        image: getAssetUrl("avatar5", "/images/avatars/avatar5.jpg")
    }
]

export const stats = [
    {
        id: 1,
        value: "1k+",
        label: "Users",
        description: "Already Use Fyoia AI",
        avatars: [
            getAssetUrl("avatar1", "/images/avatars/avatar1.jpg"),
            getAssetUrl("avatar2", "/images/avatars/avatar2.jpg"),
            getAssetUrl("avatar3", "/images/avatars/avatar3.jpg"),
            getAssetUrl("avatar4", "/images/avatars/avatar4.jpg"),
            getAssetUrl("avatar5", "/images/avatars/avatar5.jpg")
        ]
    },
    {
        id: 2,
        value: "",
        label: "Fast AI Generation",
        description: "Generate images, videos, and answers in seconds.",
        button: {
            text: "Try Fyoia AI",
            href: "#"
        }
    }
];
