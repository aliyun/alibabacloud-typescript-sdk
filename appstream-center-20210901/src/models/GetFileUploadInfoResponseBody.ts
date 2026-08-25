// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileUploadInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary AccessKey ID returned by Security Token Service (STS).
   * 
   * @example
   * LTA****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * appstream-*
   */
  bucketName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 600
   */
  expiration?: string;
  /**
   * @remarks
   * The folder path.
   * 
   * @example
   * cn-shanghai/aig_upm/***
   */
  filePath?: string;
  /**
   * @remarks
   * The maximum file size in bytes.
   * 
   * @example
   * 52428800
   */
  maxFileSize?: number;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  ossPoint?: string;
  /**
   * @remarks
   * The PostObject policy (Base64-encoded).
   * 
   * @example
   * ***
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F591F0EA-AA10-52D2-ADA3-68397887B17C
   */
  requestId?: string;
  /**
   * @remarks
   * The PostObject policy signature (HMAC-SHA1).
   * 
   * @example
   * ****************************
   */
  signature?: string;
  /**
   * @remarks
   * The temporary token returned by STS.
   * 
   * @example
   * C*****
   */
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      filePath: 'FilePath',
      maxFileSize: 'MaxFileSize',
      ossPoint: 'OssPoint',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucketName: 'string',
      expiration: 'string',
      filePath: 'string',
      maxFileSize: 'number',
      ossPoint: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      stsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns None.
   */
  data?: GetFileUploadInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileUploadInfoResponseBodyData,
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

