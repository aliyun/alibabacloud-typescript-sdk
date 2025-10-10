// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsResponseBodyAppInfosAppInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  /**
   * @example
   * mobile-live-service
   */
  appName?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  /**
   * @example
   * 图片 base64 字符串
   */
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  /**
   * @example
   * 我的应用
   */
  name?: string;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      bundleId: 'BundleId',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      name: 'Name',
      packageName: 'PackageName',
      readonly: 'Readonly',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      bundleId: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      name: 'string',
      packageName: 'string',
      readonly: 'boolean',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyAppInfos extends $dara.Model {
  appInfo?: ListAppsResponseBodyAppInfosAppInfo[];
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: { 'type': 'array', 'itemType': ListAppsResponseBodyAppInfosAppInfo },
    };
  }

  validate() {
    if(Array.isArray(this.appInfo)) {
      $dara.Model.validateArray(this.appInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $dara.Model {
  appInfos?: ListAppsResponseBodyAppInfos;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  /**
   * @example
   * enabled
   */
  ubsmsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appInfos: 'AppInfos',
      requestId: 'RequestId',
      total: 'Total',
      ubsmsStatus: 'UbsmsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfos: ListAppsResponseBodyAppInfos,
      requestId: 'string',
      total: 'number',
      ubsmsStatus: 'string',
    };
  }

  validate() {
    if(this.appInfos && typeof (this.appInfos as any).validate === 'function') {
      (this.appInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

