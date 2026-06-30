// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesInfo } from "./RulesInfo";


export class GetRuleV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. A value of **200** indicates success. Other values indicate failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Rule information.
   */
  data?: RulesInfo;
  /**
   * @remarks
   * HTTP status code returned by the request. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error details if the request failed. Returns **successful** if the request succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Error details if the request failed. Use this field when returning multiple messages.
   */
  messages?: string[];
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
   * Indicates whether the request succeeded. Set to true for success. Set to false or null for failure.
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
      data: RulesInfo,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

