// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class App extends $dara.Model {
  appDescription?: string;
  appId?: string;
  appKey?: string;
  appName?: string;
  appRegion?: number;
  appType?: number;
  englishName?: string;
  ownerId?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      appDescription: 'AppDescription',
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      appRegion: 'AppRegion',
      appType: 'AppType',
      englishName: 'EnglishName',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDescription: 'string',
      appId: 'string',
      appKey: 'string',
      appName: 'string',
      appRegion: 'number',
      appType: 'number',
      englishName: 'string',
      ownerId: 'string',
      packageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

