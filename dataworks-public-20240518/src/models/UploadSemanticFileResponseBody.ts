// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSemanticFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of UploadUrl, expressed as a Unix timestamp in milliseconds. After this time, call UploadSemanticFile again to request a new URL.
   * 
   * @example
   * 1700001800000
   */
  expiresAt?: number;
  /**
   * @remarks
   * The unique identifier of the attachment. After completing the PUT upload to UploadUrl, pass this value to the ReferenceFileIds parameter of CreateSemanticJob.
   * 
   * @example
   * FID1
   */
  fileId?: string;
  /**
   * @remarks
   * The temporary OSS PUT upload URL. Valid for 30 minutes. Only the specified object can be uploaded. Use the ContentType from the request when performing the PUT request. Do not log or distribute the full URL.
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
   * The attachment upload slot information. PUT the file to Data.UploadUrl before Data.ExpiresAt, then use Data.FileId to create a single-file semantic task.
   */
  data?: UploadSemanticFileResponseBodyData;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
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

