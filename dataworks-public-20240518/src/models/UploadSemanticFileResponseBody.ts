// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSemanticFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of UploadUrl, expressed as a UNIX timestamp in milliseconds. After this time, call UploadSemanticFile again to request a new URL.
   * 
   * @example
   * 1700001800000
   */
  expiresAt?: number;
  /**
   * @remarks
   * The unique identifier of the attachment. After the PUT upload to UploadUrl is complete, pass this value to the ReferenceFileIds parameter of CreateSemanticJob.
   * 
   * @example
   * FID1
   */
  fileId?: string;
  /**
   * @remarks
   * The temporary OSS PUT upload URL. The URL is valid for 30 minutes and can only be used to upload the specified object. Use the ContentType specified in the request when you perform the PUT request. Do not log or distribute the full URL.
   * 
   * @example
   * https://example.com/temporary-upload-url
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'ExpiresAt',
      fileId: 'FileId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'number',
      fileId: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSemanticFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attachment upload slot information. PUT the file to Data.UploadUrl before Data.ExpiresAt, and then use Data.FileId to create a single-file semantic job.
   */
  data?: UploadSemanticFileResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UploadSemanticFileResponseBodyData,
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

