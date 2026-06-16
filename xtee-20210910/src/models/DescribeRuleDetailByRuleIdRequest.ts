// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleDetailByRuleIdRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The primary key ID of the policy.
   * 
   * @example
   * 7110
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 102059
   */
  ruleId?: string;
  /**
   * @remarks
   * The primary key ID of the policy version.
   * 
   * @example
   * 10203
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      regId: 'regId',
      ruleId: 'ruleId',
      ruleVersionId: 'ruleVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      regId: 'string',
      ruleId: 'string',
      ruleVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

