// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubResellerResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * Validity period of the registration URL, in days
   * 
   * @example
   * 15
   */
  days?: number;
  /**
   * @remarks
   * Invitation ID, used for querying the invitation status
   * 
   * @example
   * 12345
   */
  inviteId?: number;
  /**
   * @remarks
   * T2 Reseller registration URL
   * 
   * @example
   * http://agency-intl.console.aliyun.com/customer/register?intl=true&fxinfo=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   */
  regUrl?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      inviteId: 'InviteId',
      regUrl: 'RegUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
      inviteId: 'number',
      regUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubResellerResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * Error code, 200 OK
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Prompt message, explanation of the code
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Returned invitation result information
   */
  result?: InviteSubResellerResponseBodyResultsResult;
  /**
   * @remarks
   * Always true
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: InviteSubResellerResponseBodyResultsResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubResellerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * 邀请结果信息
   */
  results?: InviteSubResellerResponseBodyResults[];
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': InviteSubResellerResponseBodyResults },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

