// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDyplsOSSInfoForUploadFileResponseBodyData extends $dara.Model {
  /**
   * @example
   * LTAI***pSvPz
   */
  accessKeyId?: string;
  /**
   * @example
   * 1744613007
   */
  expireTime?: string;
  /**
   * @example
   * https://alicom-**********-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * IjoiMjAyN*****9udGV
   */
  policy?: string;
  /**
   * @example
   * BXwW**********aoZH
   */
  signature?: string;
  /**
   * @example
   * 123456
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
      startPath: 'StartPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
      startPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDyplsOSSInfoForUploadFileResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDyplsOSSInfoForUploadFileResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * E2FD3B2F-5028-16E3-9F83-2F76F99B3873
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetDyplsOSSInfoForUploadFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

