// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRulePriorityRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
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
   * 3581
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The policy priority. A larger value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The region code.
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
   * 101796
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      priority: 'priority',
      regId: 'regId',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      priority: 'number',
      regId: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

