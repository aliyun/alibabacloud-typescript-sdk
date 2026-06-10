// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * OSS access ID
   * 
   * @example
   * LBA******
   */
  accessId?: string;
  /**
   * @remarks
   * Time-to-live (TTL) in seconds
   * 
   * @example
   * 1742960933
   */
  expire?: number;
  /**
   * @remarks
   * Upload folder path
   * 
   * @example
   * pload/file/874d7371-791b-4281-935c-637630a37785/874d7371-791b-4281-935c-637630a37785_9bd7916d-a340-4925-a911-92390cbe0f33.json
   */
  folder?: string;
  /**
   * @remarks
   * Upload server URL
   * 
   * @example
   * https://cloudagentbot-online.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * API message for the upload
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Upload policy
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMy0yNlQwMzo0ODo1My4wMzVaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJ1cGxvYWQvZmlsZS84NzRkNzM3MS03OTFiLTQyODEtOTM1Yy02Mzc2MzBhMzc3ODUvIl1dfQ==",
   */
  policy?: string;
  /**
   * @remarks
   * Signature
   * 
   * @example
   * I6d1ONWVuTj5i0Kz4Vn+V0lC6v4=
   */
  signature?: string;
  /**
   * @remarks
   * Indicates whether the upload succeeded
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      message: 'Message',
      policy: 'Policy',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      message: 'string',
      policy: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Response data
   */
  data?: GenerateUploadUrlResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateUploadUrlResponseBodyData,
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

