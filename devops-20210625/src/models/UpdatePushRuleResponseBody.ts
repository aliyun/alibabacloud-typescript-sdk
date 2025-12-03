// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePushRuleResponseBodyResultRuleInfos extends $dara.Model {
  /**
   * @example
   * CommitAuthorChecker
   */
  checkerName?: string;
  /**
   * @example
   * warn
   */
  checkerType?: string;
  /**
   * @example
   * on
   */
  extraMessage?: string;
  fileRuleRegexes?: string[];
  static names(): { [key: string]: string } {
    return {
      checkerName: 'checkerName',
      checkerType: 'checkerType',
      extraMessage: 'extraMessage',
      fileRuleRegexes: 'fileRuleRegexes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkerName: 'string',
      checkerType: 'string',
      extraMessage: 'string',
      fileRuleRegexes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileRuleRegexes)) {
      $dara.Model.validateArray(this.fileRuleRegexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePushRuleResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2023-09-03T18:20:06+08:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-09-03T18:20:06+08:00
   */
  gmtModified?: string;
  id?: number;
  ruleInfos?: UpdatePushRuleResponseBodyResultRuleInfos[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      ruleInfos: 'ruleInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ruleInfos: { 'type': 'array', 'itemType': UpdatePushRuleResponseBodyResultRuleInfos },
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfos)) {
      $dara.Model.validateArray(this.ruleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePushRuleResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: UpdatePushRuleResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: UpdatePushRuleResponseBodyResult,
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

