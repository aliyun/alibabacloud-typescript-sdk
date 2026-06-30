// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRuleV4ResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. **200** indicates success. Other values indicate failure. Callers can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Provides error details if an error occurs. If successful, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: DeleteRuleV4ResponseBodyMessages;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Callers can use this field to determine if the request succeeded: true means success; false/null means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

