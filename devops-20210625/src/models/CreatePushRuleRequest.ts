// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePushRuleRequestRuleInfos extends $dara.Model {
  /**
   * @example
   * CommitMessageChecker
   */
  checkerName?: string;
  /**
   * @example
   * warn
   */
  checkerType?: string;
  /**
   * @example
   * user@example.com
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

export class CreatePushRuleRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleInfos?: CreatePushRuleRequestRuleInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      ruleInfos: 'ruleInfos',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      ruleInfos: { 'type': 'array', 'itemType': CreatePushRuleRequestRuleInfos },
      organizationId: 'string',
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

