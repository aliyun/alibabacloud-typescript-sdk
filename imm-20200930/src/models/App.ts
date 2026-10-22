// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class App extends $dara.Model {
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * The largest e-commerce shopping mall in China
   */
  appDescription?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1234567890
   */
  appId?: string;
  /**
   * @remarks
   * The key returned when the application is created.
   * 
   * @example
   * ryBOBW0Z6NnQ3fV9
   */
  appKey?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Taobao
   */
  appName?: string;
  /**
   * @remarks
   * The region where the application is used. Valid values: 0: Chinese mainland. 1: Outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  appRegion?: number;
  /**
   * @remarks
   * The application type. Valid values: 0: Android. 1: iOS.
   * 
   * @example
   * 0
   */
  appType?: number;
  /**
   * @remarks
   * The English name of the application.
   * 
   * @example
   * Taobao
   */
  englishName?: string;
  /**
   * @remarks
   * The customer ID.
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

