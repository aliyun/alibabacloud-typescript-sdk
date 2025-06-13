// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesResponseBodyRuleIds extends $dara.Model {
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A smaller value indicates a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener must be unique.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * rule-a3x3pg1yohq3lq****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

