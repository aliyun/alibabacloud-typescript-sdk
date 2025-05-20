// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdentifyCodeResponseBody extends $dara.Model {
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
   * baasamlservice
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
   * can not find env: lazada-sg-pre
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
   * 1234567890
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
   * 230,94
   */
  module?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 8F30A673-46F0-5774-9D25-B45A29DB626E
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

