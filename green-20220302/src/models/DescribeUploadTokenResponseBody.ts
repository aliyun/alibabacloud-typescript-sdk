// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUploadTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the temporary credential for file upload.
   * 
   * @example
   * STS.NUEUjvDqMuvH6oQA1TXxxH4wVR
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The temporary authorization secret.
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
   * The expiration time.
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
   * The internal endpoint of OSS.
   * 
   * @example
   * https://oss-cn-shanghai-internal.aliyuncs.com
   */
  ossInternalEndPoint?: string;
  /**
   * @remarks
   * The Internet endpoint of OSS.
   * 
   * @example
   * https://oss-cn-shanghai.aliyuncs.com
   */
  ossInternetEndPoint?: string;
  /**
   * @remarks
   * The security token of the temporary credential for file upload.
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
   * The return code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeUploadTokenResponseBodyData;
  /**
   * @remarks
   * The response message for the request.
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

