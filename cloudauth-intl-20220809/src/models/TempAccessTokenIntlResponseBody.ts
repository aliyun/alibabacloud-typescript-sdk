// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempAccessTokenIntlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the temporary credential for file upload.
   * 
   * @example
   * ***
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey Secret of the temporary credential.
   * 
   * @example
   * 3hxuRpEJ3Jv2Rtzyg4HooFCYqps762XcNtzhn19wQymk
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * liyi
   */
  bucketName?: string;
  /**
   * @remarks
   * The file name prefix.
   * 
   * @example
   * test001
   */
  fileNamePrefix?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * ossEndPoint
   */
  ossEndPoint?: string;
  /**
   * @remarks
   * The security token of the temporary credential for file upload.
   * 
   * @example
   * ***
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      fileNamePrefix: 'FileNamePrefix',
      ossEndPoint: 'OssEndPoint',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      fileNamePrefix: 'string',
      ossEndPoint: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempAccessTokenIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: TempAccessTokenIntlResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TempAccessTokenIntlResponseBodyData,
      message: 'string',
      requestId: 'string',
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

