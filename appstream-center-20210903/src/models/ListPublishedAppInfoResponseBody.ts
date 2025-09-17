// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedAppInfoResponseBodyAppModels extends $dara.Model {
  /**
   * @example
   * img-f37nddbjc1lje14st
   */
  appCenterImageId?: string;
  /**
   * @example
   * ca-fxwp4koyr5y2sp4mz
   */
  appId?: string;
  /**
   * @example
   * Microsoft Word
   */
  appName?: string;
  appThemeColor?: string;
  /**
   * @example
   * R2021a
   */
  appVersion?: string;
  /**
   * @example
   * v1.0
   */
  appVersionName?: string;
  authTime?: string;
  /**
   * @example
   * 2
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * https://app-streaming-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1973619010349344/1634523814270_Matlab.png
   */
  iconUrl?: string;
  /**
   * @example
   * True
   */
  isAuth?: boolean;
  /**
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
   * appModels
   */
  appModels?: ListPublishedAppInfoResponseBodyAppModels[];
  /**
   * @example
   * 2NVfhLfgy5b3J5iJyoLQ6x4EULMg1hbhgB9NfnvdK9oj5zwxd17j4TuQkZze3RvhEvBinZYjknujF3Q1M
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
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

