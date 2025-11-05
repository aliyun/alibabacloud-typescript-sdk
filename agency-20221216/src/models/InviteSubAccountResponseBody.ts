// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubAccountResponseBodyResultsResultResult extends $dara.Model {
  /**
   * @remarks
   * Valid days of registration URL, count on daily basis.
   * 
   * @example
   * 15
   */
  days?: number;
  /**
   * @remarks
   * Invitation ID, The invitation status tracking code.
   * 
   * @example
   * 12345
   */
  inviteId?: number;
  /**
   * @remarks
   * URL for Partner Customer Registration.
   * 
   * @example
   * http://agency-intl.console.aliyun.com/customer/register?intl=true&fxinfo=-4uT%2FMWHnnUdvr5GXVd1AYK8luTnGgH3M7Y3lSCd5M1fxRwAkViTWtDJDpckh0HL
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

export class InviteSubAccountResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * Error Code, 200 OK
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Message, Notes of Code
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Returning Message of Invitation Results
   */
  result?: InviteSubAccountResponseBodyResultsResultResult;
  /**
   * @remarks
   * Always true.
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
      result: InviteSubAccountResponseBodyResultsResultResult,
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

export class InviteSubAccountResponseBodyResults extends $dara.Model {
  result?: InviteSubAccountResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': InviteSubAccountResponseBodyResultsResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteSubAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error Code: </br>
   * • 200 OK</br>
   * • 1109 System Error</br>
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * List of invitation sending results
   */
  results?: InviteSubAccountResponseBodyResults;
  /**
   * @remarks
   * Candidate Values: True/False, this value states if the current API calling action is successful. It does not guarantee the success of subsequent business operations.
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
      results: InviteSubAccountResponseBodyResults,
      success: 'boolean',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

