// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleToSchemeResponseBodyMessages extends $dara.Model {
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

export class UpdateRuleToSchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** means success. Any other value means failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Quality check plan ID.
   * 
   * @example
   * 30
   */
  data?: number;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error details if the request failed. Returns successful if the request succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateRuleToSchemeResponseBodyMessages;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Use this field to determine success: true means success. **false** or **null** means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleToSchemeResponseBodyMessages,
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

