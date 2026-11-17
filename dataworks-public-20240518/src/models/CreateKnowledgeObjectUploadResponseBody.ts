// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeObjectUploadResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the UploadUrl, represented as a UNIX timestamp in milliseconds. The maximum validity period is 30 minutes, subject to the upper limit of the OSS signature configuration and the remaining time of the session. This field prevails.
   * 
   * @example
   * 1792456200000
   */
  expiresAt?: number;
  /**
   * @remarks
   * The HTTP headers that must be included in the direct upload request. The key is the actual header name, and the value is the header value.
   * 
   * @example
   * {"Content-Type":"text/plain","Content-MD5":"1B2M2Y8AsgTpgAmY7PhCfg=="}
   */
  requiredHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The identifier of the upload session to be consumed by document creation, model update, or model import tasks. This is not a KnowledgeObjectId or TaskId.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abd
   */
  uploadId?: string;
  /**
   * @remarks
   * The temporary direct upload URL.
   * 
   * @example
   * https://example.invalid/short-lived-upload
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'ExpiresAt',
      requiredHeaders: 'RequiredHeaders',
      uploadId: 'UploadId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'number',
      requiredHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      uploadId: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(this.requiredHeaders) {
      $dara.Model.validateMap(this.requiredHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeObjectUploadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code, which is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: CreateKnowledgeObjectUploadResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: CreateKnowledgeObjectUploadResponseBodyData,
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

