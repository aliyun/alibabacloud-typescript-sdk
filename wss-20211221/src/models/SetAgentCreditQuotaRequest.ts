// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgentCreditQuotaRequest extends $dara.Model {
  agentIds?: string[];
  /**
   * @example
   * JVSClaw
   */
  agentType?: string;
  bizType?: string;
  creditQuota?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      agentType: 'AgentType',
      bizType: 'BizType',
      creditQuota: 'CreditQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'string' },
      agentType: 'string',
      bizType: 'string',
      creditQuota: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

