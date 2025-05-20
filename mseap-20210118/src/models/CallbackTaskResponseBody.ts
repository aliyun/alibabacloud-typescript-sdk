// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallbackTaskResponseBody extends $dara.Model {
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
   * bohai-web-app
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
   * can not find env: vpc-sg-pre
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * errorCode
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * errorMsg
   * 
   * @example
   * Success. Request Success.
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
   * @example
   * True
   */
  module?: boolean;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 56B009EB-AAA5-52C9-B05F-AF425E3885E8
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

