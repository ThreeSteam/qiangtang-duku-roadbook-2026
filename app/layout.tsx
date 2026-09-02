import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '此生必驾 · 羌塘 · 独库｜2026 中秋国庆自驾路书',
  description: '从川藏南线到 G216 羌塘，再穿越塔克拉玛干与独库公路的 15 天双车自驾路书。支持 Plan A / Plan B 一键切换。',
  openGraph: {
    title: '此生必驾 · 羌塘 · 独库',
    description: '2026 中秋国庆自驾路书 · Plan A / Plan B 可切换',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '此生必驾 · 羌塘 · 独库 2026 中秋国庆自驾路书' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '此生必驾 · 羌塘 · 独库',
    description: '2026 中秋国庆自驾路书 · Plan A / Plan B 可切换',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
