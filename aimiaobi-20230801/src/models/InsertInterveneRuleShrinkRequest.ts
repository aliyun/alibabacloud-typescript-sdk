// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Intervention rule configuration
   */
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

