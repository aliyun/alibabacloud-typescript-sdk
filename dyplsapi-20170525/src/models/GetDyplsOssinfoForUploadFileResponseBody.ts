// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDyplsOSSInfoForUploadFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessKey ID used for signing.
   * 
   * @example
   * YOUR_ACCESS_KEY_ID
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Expiration Time.
   * 
   * @example
   * 1744613007
   */
  expireTime?: string;
  /**
   * @remarks
   * Host address.
   * 
   * @example
   * https://alicom-**********-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Signing policy.
   * 
   * @example
   * IjoiMjAyN*****9udGV
   */
  policy?: string;
  /**
   * @remarks
   * Signature computed from the **AccessKey secret** and **policy**. When invoking the OSS API, OSS authenticates this signature to confirm the validity of the POST request.
   * 
   * @example
   * BXwW**********aoZH
   */
  signature?: string;
  /**
   * @remarks
   * Policy path.
   * 
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
   * @remarks
   * Details of denied access.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Request status code. Valid values:  
   * * OK: indicates that the request succeeded.  
   * * For other error codes, see [Error Code List](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetDyplsOSSInfoForUploadFileResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * E2FD3B2F-5028-16E3-9F83-2F76F99B3873
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:  
   * 
   * - true: indicates success.  
   * 
   * - false: indicates failure.
   * 
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

