// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordPostBackResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  allowRetry?: boolean;
  /**
   * @example
   * esp-core-aliyun-com
   */
  appName?: string;
  /**
   * @example
   * PARAMETER.ILLEGAL
   */
  dynamicCode?: string;
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * PARAMETER.ILLEGAL
   */
  errorCode?: string;
  errorMsg?: string;
  /**
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
   * @example
   * B8E5CC4C-7563-19BD-B02F-DFFFD4E51D4A
   */
  requestId?: string;
  /**
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
      errorArgs: 'ErrorArgs',
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
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

