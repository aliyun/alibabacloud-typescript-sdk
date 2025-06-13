// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadInfoResponseBody extends $dara.Model {
  /**
   * @example
   * LTAI5t9HM*****EXQmw3DVH
   */
  accessId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 900
   */
  expire?: number;
  /**
   * @example
   * image/upload/xxx
   */
  folder?: string;
  /**
   * @example
   * https://oss-cip-shanghai.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * image/upload/xxx
   */
  key?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  name?: string;
  /**
   * @example
   * xxxx
   */
  policy?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * iyu7VHblYj+mEF9p46cdGOlNPAw=
   */
  signature?: string;
  /**
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

