// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class App extends $dara.Model {
  /**
   * @remarks
   * AppDescription
   */
  appDescription?: string;
  /**
   * @remarks
   * AppId
   * 
   * @example
   * 1234567890
   */
  appId?: string;
  /**
   * @remarks
   * AppKey
   * 
   * @example
   * ryBOBW0Z6NnQ3fV9
   */
  appKey?: string;
  /**
   * @remarks
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * AppRegion
   * 
   * @example
   * 0
   */
  appRegion?: number;
  /**
   * @remarks
   * AppType
   * 
   * @example
   * 0
   */
  appType?: number;
  /**
   * @remarks
   * EnglishName
   * 
   * @example
   * Taobao
   */
  englishName?: string;
  /**
   * @remarks
   * OwnerId
   * 
   * @example
   * 1023210024677934
   */
  ownerId?: string;
  /**
   * @remarks
   * PackageName
   * 
   * @example
   * ThisIsAPackageName
   */
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

