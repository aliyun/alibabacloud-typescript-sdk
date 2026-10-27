// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDetectUploadUrlResponseBodyUploadUrlListContext extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to access the OSS bucket.
   * 
   * @example
   * yourAccessKeyID
   */
  accessId?: string;
  /**
   * @remarks
   * The key of the file that is used after the file is uploaded to the OSS bucket.
   * 
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * The policy that poses limits on file upload. For example, the policy can limit the size of the file.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMi0wNy0yM1QxMDo1ODoxMC43NTNaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMjA5NzE1MjBdLFsiZXEiLCIka2V5IiwiMS8yMDIyLzA2LzIzLzE4LzU4LzE2NTU5ODE4OTA3NTM4NTc2MjFkNS1kN2E1LTQ5YzAtOGJjZi0yMTMyY2JiYTdmYzMi****
   */
  policy?: string;
  /**
   * @remarks
   * The signature that is used to upload the file.
   * 
   * @example
   * wDhPgVdnY/bkKFYcYFl+4crl****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      ossKey: 'OssKey',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      ossKey: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileDetectUploadUrlResponseBodyUploadUrlList extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The signature information.
   */
  context?: CreateFileDetectUploadUrlResponseBodyUploadUrlListContext;
  /**
   * @remarks
   * The timestamp when the values of the parameters expire. Unit: milliseconds.
   * 
   * @example
   * 1658562101370
   */
  expire?: string;
  /**
   * @remarks
   * Indicates whether the file exists in the cloud. Valid values:
   * 
   * *   **true**: The file exists in the cloud. You do not need to upload the file.
   * *   **false**: The file does not exist in the cloud. You must upload the file.
   * 
   * @example
   * false
   */
  fileExist?: boolean;
  /**
   * @remarks
   * The identifier of the file.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The internal endpoint of the URL to which the file is uploaded.
   * 
   * @example
   * http://example.com
   */
  internalUrl?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The public endpoint of the URL to which the file is uploaded.
   * 
   * @example
   * http://example.com
   */
  publicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      context: 'Context',
      expire: 'Expire',
      fileExist: 'FileExist',
      hashKey: 'HashKey',
      internalUrl: 'InternalUrl',
      message: 'Message',
      publicUrl: 'PublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      context: CreateFileDetectUploadUrlResponseBodyUploadUrlListContext,
      expire: 'string',
      fileExist: 'boolean',
      hashKey: 'string',
      internalUrl: 'string',
      message: 'string',
      publicUrl: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileDetectUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the parameters that are required to upload a file.
   */
  uploadUrlList?: CreateFileDetectUploadUrlResponseBodyUploadUrlList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadUrlList: 'UploadUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadUrlList: { 'type': 'array', 'itemType': CreateFileDetectUploadUrlResponseBodyUploadUrlList },
    };
  }

  validate() {
    if(Array.isArray(this.uploadUrlList)) {
      $dara.Model.validateArray(this.uploadUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

