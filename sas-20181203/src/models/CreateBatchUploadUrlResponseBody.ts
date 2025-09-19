// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchUploadUrlResponseBodyUploadUrlListContext extends $dara.Model {
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
   * eyJleHBpcmF0aW9uIjoiMjAyMi0wNy0yM1QxMDo1ODoxMC****
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

export class CreateBatchUploadUrlResponseBodyUploadUrlList extends $dara.Model {
  /**
   * @remarks
   * The signature information.
   */
  context?: CreateBatchUploadUrlResponseBodyUploadUrlListContext;
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
   * The internal endpoint of the URL to which the file is uploaded.
   * 
   * @example
   * http://example.com
   */
  internalUrl?: string;
  /**
   * @remarks
   * The identifier of the file.
   * 
   * @example
   * 2f8dc248a0fbb96c69e45acad2******
   */
  md5?: string;
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
      context: 'Context',
      expire: 'Expire',
      fileExist: 'FileExist',
      internalUrl: 'InternalUrl',
      md5: 'Md5',
      publicUrl: 'PublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: CreateBatchUploadUrlResponseBodyUploadUrlListContext,
      expire: 'string',
      fileExist: 'boolean',
      internalUrl: 'string',
      md5: 'string',
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

export class CreateBatchUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DA62490B-7883-5EB4-8601-F2D1D9******
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the parameters that are required to upload a file.
   */
  uploadUrlList?: CreateBatchUploadUrlResponseBodyUploadUrlList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadUrlList: 'UploadUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadUrlList: { 'type': 'array', 'itemType': CreateBatchUploadUrlResponseBodyUploadUrlList },
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

