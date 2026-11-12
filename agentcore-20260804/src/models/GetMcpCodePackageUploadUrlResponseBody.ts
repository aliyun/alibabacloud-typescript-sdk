// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpCodePackageUploadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the temporary code package artifact, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-08-24T00:00:00Z
   */
  artifactExpiresAt?: string;
  /**
   * @remarks
   * The code package upload token.
   * 
   * @example
   * upload-token
   */
  codePackageToken?: string;
  /**
   * @remarks
   * The expiration time of the presigned upload URL, in ISO 8601 UTC format.
   * 
   * @example
   * 2026-08-23T00:15:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The HTTP request headers. The key is the header name, and the value is the header content.
   * 
   * @example
   * {"Content-Type":"application/zip"}
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The maximum allowed size of the code package to be uploaded, in bytes.
   * 
   * @example
   * 52428800
   */
  maxSize?: number;
  /**
   * @remarks
   * The HTTP method used to upload the code package.
   * 
   * @example
   * PUT
   */
  uploadMethod?: string;
  /**
   * @remarks
   * The presigned upload URL of the code package.
   * 
   * @example
   * https://example-bucket.oss-cn-hangzhou.aliyuncs.com/server.zip?Signature=example-signature
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      artifactExpiresAt: 'artifactExpiresAt',
      codePackageToken: 'codePackageToken',
      expiresAt: 'expiresAt',
      headers: 'headers',
      maxSize: 'maxSize',
      uploadMethod: 'uploadMethod',
      uploadUrl: 'uploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactExpiresAt: 'string',
      codePackageToken: 'string',
      expiresAt: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      maxSize: 'number',
      uploadMethod: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpCodePackageUploadUrlResponseBody extends $dara.Model {
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
  data?: GetMcpCodePackageUploadUrlResponseBodyData;
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
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
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
      data: GetMcpCodePackageUploadUrlResponseBodyData,
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

