// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppInfoResponseBodyAppModels extends $dara.Model {
  /**
   * @remarks
   * The application image ID. You can obtain the ID from the Image Management page in the WUYING Cloud App console.
   * 
   * @example
   * img-f37nddbjc1lje14st
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ca-fxwp4koyr5y2sp4mz
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Microsoft Word
   */
  appName?: string;
  /**
   * @remarks
   * The theme color of the application.
   * 
   * @example
   * #FFFFFF
   */
  appThemeColor?: string;
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * R2021a
   */
  appVersion?: string;
  /**
   * @remarks
   * The application version name.
   * 
   * @example
   * v1.0
   */
  appVersionName?: string;
  /**
   * @remarks
   * The authorization time of the application.
   * The return value is a serialized datetime string from the server in the format of `EEE MMM dd HH:mm:ss zzz yyyy`, which represents the day of the week, month, day, hour:minute:second, time zone abbreviation, and year in sequence. For example, `Wed Jan 14 20:47:02 CST 2026`, where `CST` is the time zone abbreviation of the server\\"s time zone (China Standard Time, UTC+08:00).
   * 
   * @example
   * Wed Jan 14 20:47:02 CST 2026
   */
  authTime?: string;
  /**
   * @remarks
   * The specific category information of the application, which is the secondary category.
   * Valid values:
   * 
   * - 1: All applications
   * - 2: Design software
   * - 3: Programming and development
   * - 4: Office essentials
   * - 5: Input methods
   * - 6: Image and video
   * - 7: System tools
   * - 8: Browsers
   * 
   * @example
   * 2
   */
  categoryId?: number;
  /**
   * @remarks
   * The primary category of the application. Valid values:
   * 
   * - 0: Cloud application
   * - 1: Cloud game
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://app-streaming-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1973619010349344/1634523814270_Matlab.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * Indicates whether the user has permissions.
   * The value is True.
   * 
   * @example
   * True
   */
  isAuth?: boolean;
  /**
   * @remarks
   * Indicates whether the application is in use.
   * 
   * @example
   * True
   */
  usedInSession?: boolean;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appId: 'AppId',
      appName: 'AppName',
      appThemeColor: 'AppThemeColor',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      authTime: 'AuthTime',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      iconUrl: 'IconUrl',
      isAuth: 'IsAuth',
      usedInSession: 'UsedInSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appId: 'string',
      appName: 'string',
      appThemeColor: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      authTime: 'string',
      categoryId: 'number',
      categoryType: 'number',
      iconUrl: 'string',
      isAuth: 'boolean',
      usedInSession: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAppInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of published applications.
   */
  appModels?: ListPublishedAppInfoResponseBodyAppModels[];
  /**
   * @remarks
   * The starting token for the next query.
   * 
   * @example
   * 2NVfhLfgy5b3J5iJyoLQ6x4EULMg1hbhgB9NfnvdK9oj5zwxd17j4TuQkZze3RvhEvBinZYjknujF3Q1M
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB70F8FE-63A3-587B-8560-CEC258E8B944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appModels: 'AppModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appModels: { 'type': 'array', 'itemType': ListPublishedAppInfoResponseBodyAppModels },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appModels)) {
      $dara.Model.validateArray(this.appModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

