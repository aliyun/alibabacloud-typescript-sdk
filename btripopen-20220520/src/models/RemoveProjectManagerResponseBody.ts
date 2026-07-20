// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveProjectManagerResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  addNum?: number;
  /**
   * @example
   * 1
   */
  removeNum?: number;
  /**
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

export class RemoveProjectManagerResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  module?: RemoveProjectManagerResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
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
      module: RemoveProjectManagerResponseBodyModule,
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

