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
   * The error code, consistent with the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Unit: seconds.
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
   * The key used for file upload.
   * 
   * @example
   * image/upload/xxx
   */
  key?: string;
  /**
   * @remarks
   * The further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Used for frontend image upload.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * The OSS file upload policy.
   * 
   * @example
   * xxxx
   */
  policy?: string;
  /**
   * @remarks
   * The backend-assigned ID that uniquely identifies a request. This ID can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The upload signature information.
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

