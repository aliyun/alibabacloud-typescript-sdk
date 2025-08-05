// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTempFileUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to which the file is uploaded.
   * 
   * @example
   * hbr-temp-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The endpoint that is used to upload the file to OSS.
   * 
   * @example
   * oss-cn-shenzhen.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the signature that is used to upload the file to OSS. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1654326678
   */
  expireTime?: number;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to upload the file to OSS.
   * 
   * @example
   * LTAI****Up
   */
  ossAccessKeyId?: string;
  /**
   * @remarks
   * The policy that is used to upload the file to OSS.
   * 
   * @example
   * eyJleH****V19
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F4EEB401-DD21-588D-AE3B-1E835C7655E1
   */
  requestId?: string;
  /**
   * @remarks
   * The signature that is used to upload the file to OSS.
   * 
   * @example
   * RmhI****0A=
   */
  signature?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The key that is used to upload the file to OSS.
   * 
   * @example
   * temp/1440155109798732/upload/2022-07-29/49bed34c-b430-4e7e-89b1-4be2b734f95c/iaclone.diff
   */
  tempFileKey?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      code: 'Code',
      endpoint: 'Endpoint',
      expireTime: 'ExpireTime',
      message: 'Message',
      ossAccessKeyId: 'OssAccessKeyId',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
      tempFileKey: 'TempFileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      code: 'string',
      endpoint: 'string',
      expireTime: 'number',
      message: 'string',
      ossAccessKeyId: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
      tempFileKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

