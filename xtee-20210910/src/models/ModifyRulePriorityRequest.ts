// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRulePriorityRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Primary key ID of the policy
   * 
   * @example
   * 3581
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Policy priority, the higher the number, the higher the priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Policy ID
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

