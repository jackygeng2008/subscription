import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jf.lkrj',
  name: '花生日记',
  groups: [
    {
      key: 1,
      name: '首页❌广告',
      activityIds: ['com.jf.lkrj.MainActivity', 'com.jf.lkrj.SplashActivity'],
      rules: [
        {
          matches: '[id$="/close_iv"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1704701268491',//获取链接的方法在上一步有说明
        },
        {
          matches: '[id$="/cancel_iv"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1704702664467',
          ],
        },
      ],
    },
  ],
}