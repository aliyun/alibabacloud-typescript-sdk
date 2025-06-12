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

