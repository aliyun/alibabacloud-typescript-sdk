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

export class RequestUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: RequestUploadTokenResponseBodyModel;
  /**
   * @example
   * AB8AB5EC-9636-421D-AE7C-BB227DFC95B0
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      model: RequestUploadTokenResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

