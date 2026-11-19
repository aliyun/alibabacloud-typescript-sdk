// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ACCOUNT_EXIST
   */
  code?: string;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * test
   */
  codeDesc?: string;
  /**
   * @remarks
   * The invalid input value.
   * 
   * @example
   * 20
   */
  input?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeDesc: 'CodeDesc',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeDesc: 'string',
      input: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResultFailResults extends $dara.Model {
  /**
   * @remarks
   * The causes of the errors.
   */
  failInfos?: BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos[];
  static names(): { [key: string]: string } {
    return {
      failInfos: 'FailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfos: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos },
    };
  }

  validate() {
    if(Array.isArray(this.failInfos)) {
      $dara.Model.validateArray(this.failInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of failures.
   * 
   * @example
   * 10
   */
  failCount?: number;
  /**
   * @remarks
   * The details of the failures.
   */
  failResults?: BatchAddFeishuUsersResponseBodyResultFailResults[];
  /**
   * @remarks
   * The number of successes.
   * 
   * @example
   * 1
   */
  okCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      failResults: 'FailResults',
      okCount: 'OkCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      failResults: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResults },
      okCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failResults)) {
      $dara.Model.validateArray(this.failResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the user group members are added. Valid values:
   * 
   * - true: The user group members are added.
   * 
   * - false: The user group members fail to be added.
   * 
   * @example
   * True
   */
  result?: BatchAddFeishuUsersResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchAddFeishuUsersResponseBodyResult,
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

