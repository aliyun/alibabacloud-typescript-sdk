// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRedisValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * allowRetry
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * appName
   * 
   * @example
   * cloudquery
   */
  appName?: string;
  /**
   * @remarks
   * dynamicCode
   * 
   * @example
   * 1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * dynamicMessage
   * 
   * @example
   * 10.151.12.0/24,100.104.36.0/26,47.102.181.0/24,100.104.52.0/24,47.101.109.0/24,120.55.129.0/24,11.115.103.0/24,47.102.234.0/24
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * errorCode
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * errorMsg
   */
  errorMsg?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * module
   * 
   * @example
   * 71,135
   */
  module?: boolean;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 195BABE2-7105-5C16-ABCE-2D0997CCE2E3
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: 'boolean',
      requestId: 'string',
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

