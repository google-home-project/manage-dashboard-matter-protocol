'use client';
import { App, ConfigProvider } from 'antd';
import { ReactNode } from 'react';

import AntdStyledRegistry from '@/configs/theme/antd-styled-registry';
import themeConfig from '@/configs/theme/theme-config';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export const LayoutProvider = ({ children }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  //   useEffect(() => {
  //     NProgress.done();
  //   }, [pathname, searchParams]);

  return (
    <ConfigProvider theme={themeConfig}>
      <App>
        <AntdStyledRegistry>{children}</AntdStyledRegistry>
      </App>
    </ConfigProvider>
  );
};
