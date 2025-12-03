// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPushRulesResponseBodyResultRuleInfos extends $dara.Model {
  /**
   * @example
   * CommitFilesChecker
   */
  checkerName?: string;
  /**
   * @example
   * warn
   */
  checkerType?: string;
  /**
   * @example
   * ""
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

export class ListPushRulesResponseBodyResult extends $dara.Model {
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
  /**
   * @example
   * 2077
   */
  id?: number;
  ruleInfos?: ListPushRulesResponseBodyResultRuleInfos[];
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
      ruleInfos: { 'type': 'array', 'itemType': ListPushRulesResponseBodyResultRuleInfos },
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

export class ListPushRulesResponseBody extends $dara.Model {
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
  result?: ListPushRulesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPushRulesResponseBodyResult },
      success: 'boolean',
      total: 'number',
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

