// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteSubAccountResponseBodyResultsResultResult extends $dara.Model {
  days?: number;
  inviteId?: number;
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
  code?: string;
  message?: string;
  result?: InviteSubAccountResponseBodyResultsResultResult;
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

