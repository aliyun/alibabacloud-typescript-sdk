// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetDownloadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the target asset to download.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * The MIME type of the published original file.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The short-term presigned GET URL authorized only for downloading the published original object, using a unified OSS public endpoint. Long-term credentials are not returned, and the URL is not recorded in common logs.
   * 
   * @example
   * https://example.com/tenants/1234567890123456/workspaces/ws-001/kb/kb-001/assets/asset-001/original/upload-001/source?signature=REDACTED
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:15:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The file name of the published original file.
   * 
   * @example
   * guide.pdf
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      contentType: 'contentType',
      downloadUrl: 'downloadUrl',
      expiresAt: 'expiresAt',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      contentType: 'string',
      downloadUrl: 'string',
      expiresAt: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stable result code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The time-limited presigned GET URL and file information for the published original file. A status conflict is returned if no published result is available.
   */
  data?: GetAssetDownloadUrlResponseBodyData;
  /**
   * @remarks
   * The actual HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the data masking result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAssetDownloadUrlResponseBodyData,
      httpStatusCode: 'number',
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

