// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemindQuotaApplicationApprovalResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether retries are allowed. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PARAMETER.ILLEGALL
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * Parameter[%s] is required.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The parameters whose values are invalid.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
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
   * The quota application ID.
   * 
   * @example
   * 219f1ff6-6205-495f-bda7-90d2fe945e****
   */
  module?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
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
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: 'string',
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

