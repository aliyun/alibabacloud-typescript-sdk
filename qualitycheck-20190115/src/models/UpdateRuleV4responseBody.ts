// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleV4ResponseBodyMessages extends $dara.Model {
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

export class UpdateRuleV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. A value of 200 indicates success. Any other value indicates failure. The caller can use this field to determine the reason for failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The updated rule ID.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The HTTP response status code returned by the HTTP Request. A value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * When an error occurs, this field provides error details. When the request succeeds, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateRuleV4ResponseBodyMessages;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. The caller can use this field to determine the request status: true indicates success; false or null indicates failure.
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
      messages: UpdateRuleV4ResponseBodyMessages,
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

