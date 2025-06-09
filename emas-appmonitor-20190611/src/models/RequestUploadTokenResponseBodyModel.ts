// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestUploadTokenResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * OSS AccessKeyId
   * 
   * @example
   * STS.NXEGHKdjkdnINNgLiDE
   */
  accessKeyId?: string;
  /**
   * @remarks
   * OSS AccessKeySecret
   * 
   * @example
   * ikKgkNDGedInGEIngL
   */
  accessKeySecret?: string;
  /**
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * Szi9v92mHNikdknfe
   */
  securityToken?: string;
  /**
   * @example
   * symbolic-prod
   */
  uploadBucket?: string;
  /**
   * @example
   * /335374903@iphoneos/
   */
  uploadDir?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      endpoint: 'Endpoint',
      securityToken: 'SecurityToken',
      uploadBucket: 'UploadBucket',
      uploadDir: 'UploadDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
      securityToken: 'string',
      uploadBucket: 'string',
      uploadDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

