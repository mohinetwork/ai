export type AssetType = "svg" | "image";

export type AssetItem = {
    name: string;
    category?: string;
    type: AssetType;
    path: string;
    url: string;
};

export const assetMeta = {
    project: "fyoia-assets",
    baseUrl: "https://my.lostingness.site/fyoia/",
    proxy: "https://my.lostingness.site/fyoia/image.php?file=",
    totalAssets: 21,
};

export const worksWithAssets: AssetItem[] = [
    {
        name: "asana",
        category: "integration",
        type: "svg",
        path: "icons/integrations/asana.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/asana.svg",
    },
    {
        name: "figma",
        category: "integration",
        type: "svg",
        path: "icons/integrations/figma.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/figma.svg",
    },
    {
        name: "convex",
        category: "integration",
        type: "svg",
        path: "icons/integrations/convex.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/convex.svg",
    },
    {
        name: "cursor",
        category: "integration",
        type: "svg",
        path: "icons/integrations/cursor.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/cursor.svg",
    },
    {
        name: "dribbble",
        category: "integration",
        type: "svg",
        path: "icons/integrations/dribbble.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/dribbble.svg",
    },
    {
        name: "mintlify",
        category: "integration",
        type: "svg",
        path: "icons/integrations/mintlify.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/mintlify.svg",
    },
    {
        name: "cashapp",
        category: "integration",
        type: "svg",
        path: "icons/integrations/cashapp.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/cashapp.svg",
    },
    {
        name: "telegram",
        category: "integration",
        type: "svg",
        path: "icons/integrations/telegram.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/telegram.svg",
    },
    {
        name: "instagram",
        category: "integration",
        type: "svg",
        path: "icons/integrations/instagram.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/instagram.svg",
    },
    {
        name: "vercel",
        category: "integration",
        type: "svg",
        path: "icons/integrations/vercel.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/vercel.svg",
    },
    {
        name: "slack",
        category: "integration",
        type: "svg",
        path: "icons/integrations/slack.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/integrations/slack.svg",
    },
];

export const dashboardPreviewAssets: AssetItem[] = [
    {
        name: "dashboard",
        type: "image",
        path: "anmix-dashboard (1).jpg",
        url: "https://my.lostingness.site/fyoia/image.php?file=anmix-dashboard%20(1).jpg",
    },
    {
        name: "client",
        type: "image",
        path: "client.png",
        url: "https://my.lostingness.site/fyoia/image.php?file=client.png",
    },
    {
        name: "invoices",
        type: "image",
        path: "invoices.png",
        url: "https://my.lostingness.site/fyoia/image.php?file=invoices.png",
    },
    {
        name: "project",
        type: "image",
        path: "project.png",
        url: "https://my.lostingness.site/fyoia/image.php?file=project.png",
    },
    {
        name: "team",
        type: "image",
        path: "team.png",
        url: "https://my.lostingness.site/fyoia/image.php?file=team.png",
    },
];

export const assetGallery: AssetItem[] = [
    {
        name: "arrow",
        type: "svg",
        path: "icons/arrow.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/arrow.svg",
    },
    {
        name: "curved-arrow",
        type: "svg",
        path: "icons/curved-arrow.svg",
        url: "https://my.lostingness.site/fyoia/image.php?file=icons/curved-arrow.svg",
    },
];

const supplementalAssets: AssetItem[] = [
    {
        name: "fyoia-logo",
        type: "image",
        path: "images/fyoia-logo.png",
        url: "https://my.lostingness.site/fyoia/image.php?file=images/fyoia-logo.png",
    },
    {
        name: "og-image",
        type: "image",
        path: "images/og-image.png",
        url: "https://my.lostingness.site/fyoia/image.php?file=images/og-image.png",
    },
];

const normalizeKey = (key: string) => key.toLowerCase().replace(/\s+/g, "-");

const allAssets = [
    ...worksWithAssets,
    ...dashboardPreviewAssets,
    ...assetGallery,
    ...supplementalAssets,
];

const assetLookup = new Map<string, AssetItem>();

allAssets.forEach((asset) => {
    const baseName = asset.path.split("/").pop() ?? asset.name;
    const withoutExtension = baseName.replace(/\.[^/.]+$/, "");

    [asset.name, baseName, withoutExtension, asset.path].forEach((key) => {
        assetLookup.set(normalizeKey(key), asset);
    });
});

export const getAsset = (key: string) => assetLookup.get(normalizeKey(key));

export const getAssetUrl = (key: string, fallback?: string) =>
    assetLookup.get(normalizeKey(key))?.url ?? fallback;

export const brandLogoUrl = getAssetUrl(
    "fyoia-logo",
    "https://my.lostingness.site/fyoia/image.php?file=images/fyoia-logo.png"
);

export const ogImageUrl = getAssetUrl(
    "og-image",
    "https://my.lostingness.site/fyoia/image.php?file=images/og-image.png"
);

export const arrowAssetUrl = getAssetUrl(
    "arrow",
    "https://my.lostingness.site/fyoia/image.php?file=icons/arrow.svg"
);

export const curvedArrowAssetUrl = getAssetUrl(
    "curved-arrow",
    "https://my.lostingness.site/fyoia/image.php?file=icons/curved-arrow.svg"
);

export const heroDashboardAssetUrl =
    getAssetUrl("dashboard") ??
    getAssetUrl("anmix-dashboard") ??
    "https://my.lostingness.site/fyoia/image.php?file=anmix-dashboard%20(1).jpg";
