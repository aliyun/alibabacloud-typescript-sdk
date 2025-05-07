// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  interveneRuleConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfigShrink: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

