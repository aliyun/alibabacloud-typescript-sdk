// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Upload authorization ID.
   * 
   * @example
   * LTAI5t9HM*****EXQmw3DVH
   */
  accessId?: string;
  /**
   * @remarks
   * Error code, consistent with HTTP status.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * In seconds.
   * 
   * @example
   * 900
   */
  expire?: number;
  /**
   * @remarks
   * Folder name.
   * 
   * @example
   * image/upload/xxx
   */
  folder?: string;
  /**
   * @remarks
   * Upload host.
   * 
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Key used for uploading files.
   * 
   * @example
   * image/upload/xxx
   */
  key?: string;
  /**
   * @remarks
   * Further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Used for front-end image upload.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * OSS upload file Policy.
   * 
   * @example
   * xxxx
   */
  policy?: string;
  /**
   * @remarks
   * ID assigned by the backend to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Upload signature information.
   * 
   * @example
   * iyu7VHblYj+mEF9p46cdGOlNPAw=
   */
  signature?: string;
  /**
   * @remarks
   * Success indicator.
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

