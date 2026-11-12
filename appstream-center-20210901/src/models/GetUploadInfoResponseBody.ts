// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the STS temporary access credential.
   * 
   * @example
   * STS.NUexample****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey Secret of the STS temporary access credential. It is used together with AccessKeyId and StsToken.
   * 
   * @example
   * secret-example****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The name of the destination OSS bucket for the upload.
   * 
   * @example
   * appstream-example
   */
  bucketName?: string;
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * 123
   */
  expiration?: string;
  /**
   * @remarks
   * The OSS directory prefix where files are allowed to be uploaded. The path of the uploaded object must be located under this directory.
   */
  filePath?: string;
  /**
   * @remarks
   * The OSS endpoint for public network access.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  ossPoint?: string;
  /**
   * @remarks
   * The internal OSS endpoint.
   * 
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  ossPointInternal?: string;
  /**
   * @remarks
   * The STS temporary security token. It is used together with AccessKeyId and AccessKeySecret for file uploads.
   * 
   * @example
   * CAISexample****
   */
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      expiration: 'Expiration',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      ossPointInternal: 'OssPointInternal',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      expiration: 'string',
      filePath: 'string',
      ossPoint: 'string',
      ossPointInternal: 'string',
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

export class GetUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the API. A value of 200 indicates success. If the call fails, the corresponding error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The file upload endpoint and temporary credentials.
   */
  data?: GetUploadInfoResponseBodyData;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. It is used to locate and troubleshoot the request.
   * 
   * @example
   * 8737D130-BFD0-5D51-96F6-C08EB1139A25
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUploadInfoResponseBodyData,
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

