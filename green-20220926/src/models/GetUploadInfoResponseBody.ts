// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The upload authorization ID.
   * 
   * @example
   * LTAI5t9HM*****EXQmw3DVH
   */
  accessId?: string;
  /**
   * @remarks
   * The error code, which is consistent with the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The expiration time in seconds.
   * 
   * @example
   * 900
   */
  expire?: number;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * image/upload/xxx
   */
  folder?: string;
  /**
   * @remarks
   * The upload host.
   * 
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
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
   * The key used for the uploaded file.
   * 
   * @example
   * image/upload/xxx
   */
  key?: string;
  /**
   * @remarks
   * The detailed description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The name used for frontend image uploads.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The policy for uploading files to Object Storage Service (OSS).
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNC0xMi0zMVQyMzo1OTo1OVoifQ==
   */
  policy?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request, which can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The temporary Security Token Service (STS) token.
   * 
   * @example
   * CAISrgJ1q6Ft5B2yfSjIr5fYeeqHjqrv8KqThGzTrTcwOMT3nbHGtjz2IHhPenvFBusd/i2AGFBS75gc6bAadVQQRoTlYJrRbpNsqbMQ
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature information for the upload.
   * 
   * @example
   * iyu7VHblYj+mEF9p46cdGOlNPAw=
   */
  signature?: string;
  /**
   * @remarks
   * The success flag.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      code: 'Code',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      httpStatusCode: 'HttpStatusCode',
      key: 'Key',
      msg: 'Msg',
      name: 'Name',
      policy: 'Policy',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      code: 'number',
      expire: 'number',
      folder: 'string',
      host: 'string',
      httpStatusCode: 'number',
      key: 'string',
      msg: 'string',
      name: 'string',
      policy: 'string',
      requestId: 'string',
      securityToken: 'string',
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

