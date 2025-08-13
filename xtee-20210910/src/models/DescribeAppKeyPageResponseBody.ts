// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppKeyPageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Android SDK download URL.
   * 
   * @example
   * https://xxxxx-oss-xxxxx.xxxxxx.aliyuncs.com/xx/xx/xxx/xxxxxx.csv?Expires=1753433384&OSSAccessKeyId=xxxxxxxxx&Signature=%2F%xxxxxxxxxxxx%3D
   */
  androidSdkUrl?: string;
  /**
   * @remarks
   * Android SDK version number.
   * 
   * @example
   * 1
   */
  androidSdkVersion?: string;
  /**
   * @remarks
   * Application appkey.
   * 
   * @example
   * sh9a71f07fhs556bd767586307e82795
   */
  appKey?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * iOS SDK download URL.
   * 
   * @example
   * https://xxxxx-oss-xxxxx.xxxxxx.aliyuncs.com/xx/xx/xxx/xxxxxx.csv?Expires=1753433384&OSSAccessKeyId=xxxxxxxxx&Signature=%2F%xxxxxxxxxxxx%3D
   */
  iosSdkUrl?: string;
  /**
   * @remarks
   * iOS SDK version number.
   * 
   * @example
   * 1
   */
  iosSdkVersion?: string;
  /**
   * @remarks
   * Memo.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * 已作废
   */
  sdkItems?: string;
  /**
   * @remarks
   * Whether this appKey is integrated.
   * 
   * @example
   * false
   */
  used?: string;
  static names(): { [key: string]: string } {
    return {
      androidSdkUrl: 'androidSdkUrl',
      androidSdkVersion: 'androidSdkVersion',
      appKey: 'appKey',
      gmtCreate: 'gmtCreate',
      iosSdkUrl: 'iosSdkUrl',
      iosSdkVersion: 'iosSdkVersion',
      memo: 'memo',
      sdkItems: 'sdkItems',
      used: 'used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidSdkUrl: 'string',
      androidSdkVersion: 'string',
      appKey: 'string',
      gmtCreate: 'number',
      iosSdkUrl: 'string',
      iosSdkVersion: 'string',
      memo: 'string',
      sdkItems: 'string',
      used: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * E01E1B4A-6747-5329-9046-B6D6B2D91349
   */
  requestId?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returned object.
   */
  resultObject?: DescribeAppKeyPageResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeAppKeyPageResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

