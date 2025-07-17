// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUploadTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.NUEUjvDqMuvH6oQA1TXxxH4wVR
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * oss-cip-shanghai
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the file sharing link expires.
   * 
   * @example
   * 1720577200
   */
  expiration?: number;
  /**
   * @remarks
   * The file prefix.
   * 
   * @example
   * upload/1xxb89/
   */
  fileNamePrefix?: string;
  /**
   * @remarks
   * the oss intranet point.
   * 
   * @example
   * https://oss-cn-shanghai-internal.aliyuncs.com
   */
  ossInternalEndPoint?: string;
  /**
   * @remarks
   * the oss internet point.
   * 
   * @example
   * https://oss-cn-shanghai.aliyuncs.com
   */
  ossInternetEndPoint?: string;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * xxxx
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      fileNamePrefix: 'FileNamePrefix',
      ossInternalEndPoint: 'OssInternalEndPoint',
      ossInternetEndPoint: 'OssInternetEndPoint',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expiration: 'number',
      fileNamePrefix: 'string',
      ossInternalEndPoint: 'string',
      ossInternetEndPoint: 'string',
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

export class DescribeUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeUploadTokenResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeUploadTokenResponseBodyData,
      msg: 'string',
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

