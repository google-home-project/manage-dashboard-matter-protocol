'use client';
import { App, ConfigProvider } from 'antd';
import { ReactNode, useEffect } from 'react';

import AntdStyledRegistry from '@/configs/theme/antd-styled-registry';
import themeConfig from '@/configs/theme/theme-config';
import { usePathname, useSearchParams } from 'next/navigation';
import * as NProgress from 'nprogress';

type Props = {
  children: ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return (
    <ConfigProvider theme={themeConfig}>
      <App>{children}</App>
    </ConfigProvider>
  );
};
