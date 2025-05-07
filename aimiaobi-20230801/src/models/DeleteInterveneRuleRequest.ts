// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterveneRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 12345
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
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

