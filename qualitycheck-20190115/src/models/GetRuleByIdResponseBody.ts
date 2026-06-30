// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesInfo } from "./RulesInfo";


export class GetRuleByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate an error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information about the rule.
   * 
   * @example
   * 无
   */
  data?: RulesInfo;
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
   * The returned message. A value of successful is returned on success, and an error message is returned on failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Details about the error. This parameter is used when multiple messages are returned.
   */
  messages?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. A value of true indicates success, and false or null indicates failure.
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

