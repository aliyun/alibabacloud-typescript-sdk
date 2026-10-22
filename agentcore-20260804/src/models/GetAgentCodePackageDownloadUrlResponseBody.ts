// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentCodePackageDownloadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CRC64 value of the code package object.
   * 
   * @example
   * 456
   */
  crc64?: string;
  /**
   * @remarks
   * The time-limited, read-only download URL for the code package.
   * 
   * @example
   * https://agentcore-platform-example.oss-cn-hangzhou.aliyuncs.com/code-packages/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip?OSSAccessKeyId=LTAI5tExample****&Expires=1792627800&Signature=ExampleSignature****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The ETag of the code package object.
   * 
   * @example
   * fixed-etag
   */
  etag?: string;
  /**
   * @remarks
   * The expiration time of the download URL.
   * 
   * @example
   * 2026-10-22T00:10:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The original file name of the code package.
   * 
   * @example
   * main.zip
   */
  fileName?: string;
  /**
   * @remarks
   * The compressed size of the code package.
   * 
   * @example
   * 123
   */
  fileSize?: number;
  /**
   * @remarks
   * The format of the code package.
   * 
   * @example
   * zip
   */
  format?: string;
  /**
   * @remarks
   * The resource version ID corresponding to the currently saved configuration.
   * 
   * @example
   * 42
   */
  resourceVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      crc64: 'crc64',
      downloadUrl: 'downloadUrl',
      etag: 'etag',
      expiresAt: 'expiresAt',
      fileName: 'fileName',
      fileSize: 'fileSize',
      format: 'format',
      resourceVersionId: 'resourceVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crc64: 'string',
      downloadUrl: 'string',
      etag: 'string',
      expiresAt: 'string',
      fileName: 'string',
      fileSize: 'number',
      format: 'string',
      resourceVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentCodePackageDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAgentCodePackageDownloadUrlResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
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
      data: GetAgentCodePackageDownloadUrlResponseBodyData,
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

