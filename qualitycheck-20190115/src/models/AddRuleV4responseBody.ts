// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRuleV4ResponseBodyMessages extends $dara.Model {
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

export class AddRuleV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. \\`**200**\\` indicates that the request was successful. Other values indicate that the request failed. You can use this parameter to identify the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the new rule.
   * 
   * @example
   * 无
   */
  data?: number;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: AddRuleV4ResponseBodyMessages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\`: The request was successful. \\`false\\` or \\`null\\`: The request failed.
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
      messages: AddRuleV4ResponseBodyMessages,
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

