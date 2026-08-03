// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThirdImmediateMsgPushResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 2DF6FEFE-3301-16DD-ABCC-968A9524920B
   */
  requestId?: string;
  /**
   * @remarks
   * whether the push succeeded
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ThirdImmediateMsgPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * 500000000
   */
  errorCode?: string;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 服务器内部异常
   */
  errorMsg?: string;
  /**
   * @remarks
   * push result
   */
  model?: ThirdImmediateMsgPushResponseBodyModel;
  /**
   * @remarks
   * whether the invocation succeeded
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      model: ThirdImmediateMsgPushResponseBodyModel,
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

