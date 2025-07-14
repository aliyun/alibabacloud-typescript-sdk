// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos extends $dara.Model {
  /**
   * @example
   * ACCOUNT_EXIST
   */
  code?: string;
  codeDesc?: string;
  /**
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
   * @example
   * 10
   */
  failCount?: number;
  failResults?: BatchAddFeishuUsersResponseBodyResultFailResults[];
  /**
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
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: BatchAddFeishuUsersResponseBodyResult;
  /**
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

