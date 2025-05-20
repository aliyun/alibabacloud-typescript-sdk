// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVariableResponseBody extends $dara.Model {
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
   * voldemort-aliyun-com
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
   * can not find env: eleme-zb-pre
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
   * @remarks
   * module
   * 
   * @example
   * 207,155
   */
  module?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * D28419C9-335E-50A7-BD7D-ACF250A825E8
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
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
      module: 'string',
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

