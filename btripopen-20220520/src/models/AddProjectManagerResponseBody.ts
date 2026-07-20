// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectManagerResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The number of managers added in this operation (always 0 for the remove process).
   * 
   * @example
   * 1
   */
  addNum?: number;
  /**
   * @remarks
   * The number of managers removed in this operation (always 0 for the add process).
   * 
   * @example
   * 1
   */
  removeNum?: number;
  /**
   * @remarks
   * The parsed btrip_rule.rule_code (501 + projectId), which helps callers with troubleshooting and reconciliation.
   * 
   * @example
   * 500578154
   */
  ruleCode?: number;
  static names(): { [key: string]: string } {
    return {
      addNum: 'add_num',
      removeNum: 'remove_num',
      ruleCode: 'rule_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addNum: 'number',
      removeNum: 'number',
      ruleCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProjectManagerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: string;
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
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   */
  module?: AddProjectManagerResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * B72B39C8-****-****-****-D53F11F6ADFE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f079e16603757182131635d866a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      module: AddProjectManagerResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

