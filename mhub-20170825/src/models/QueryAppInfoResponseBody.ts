// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAppInfoResponseBodyAppInfo extends $dara.Model {
  /**
   * @example
   * 123456
   */
  appKey?: string;
  appName?: string;
  /**
   * @example
   * com.test.ios
   */
  bundleId?: string;
  /**
   * @example
   * false
   */
  certDevelopAvail?: boolean;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  certDevelopExpiration?: string;
  /**
   * @example
   * false
   */
  certProductAvail?: boolean;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  certProductExpiration?: string;
  /**
   * @example
   * 2020-12-16T06:25:52Z
   */
  createTime?: string;
  encodedIcon?: string;
  /**
   * @example
   * 1
   */
  industryId?: number;
  /**
   * @example
   * com.test.android
   */
  packageName?: string;
  /**
   * @example
   * 1234
   */
  productId?: number;
  /**
   * @example
   * false
   */
  readonly?: boolean;
  /**
   * @example
   * 0
   */
  status?: number;
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
      certDevelopAvail: 'CertDevelopAvail',
      certDevelopExpiration: 'CertDevelopExpiration',
      certProductAvail: 'CertProductAvail',
      certProductExpiration: 'CertProductExpiration',
      createTime: 'CreateTime',
      encodedIcon: 'EncodedIcon',
      industryId: 'IndustryId',
      packageName: 'PackageName',
      productId: 'ProductId',
      readonly: 'Readonly',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      bundleId: 'string',
      certDevelopAvail: 'boolean',
      certDevelopExpiration: 'string',
      certProductAvail: 'boolean',
      certProductExpiration: 'string',
      createTime: 'string',
      encodedIcon: 'string',
      industryId: 'number',
      packageName: 'string',
      productId: 'number',
      readonly: 'boolean',
      status: 'number',
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

export class QueryAppInfoResponseBody extends $dara.Model {
  appInfo?: QueryAppInfoResponseBodyAppInfo;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: QueryAppInfoResponseBodyAppInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInfo && typeof (this.appInfo as any).validate === 'function') {
      (this.appInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

