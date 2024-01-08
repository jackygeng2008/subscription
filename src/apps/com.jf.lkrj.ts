import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jf.lkrj',
  name: '花生日记',
  groups: [
    {
      name: '首页❌广告',
      key: 1,
      activityIds: [
        'com.jf.lkrj.MainActivity',
        'com.jf.lkrj.SplashActivity'
      ],
      rules: [
        {
          matches: [
            '[id$="/close_iv"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13857598'
          ]
        },
        {
          matches: [
            '[id$="/cancel_iv"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13857788'
          ]
        }
      ]
    }
  ]
}
