// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgentCreditQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Agent IDs.
   */
  agentIds?: string[];
  /**
   * @remarks
   * The Agent type.
   * 
   * @example
   * JVSClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * BUSINESS
   */
  bizType?: string;
  /**
   * @remarks
   * The credit quota.
   * 
   * @example
   * 200
   */
  creditQuota?: number;
  /**
   * @remarks
   * The operator scenarios type. Valid values:
   * - If this parameter is not specified or is set to NaturalMonthlyOwn: calendar month exclusive.
   * - JzYearlyShare: Jiaozi yearly shared.
   * - JzYearlyOwn: Jiaozi yearly exclusive.
   * 
   * @example
   * NaturalMonthlyOwn
   */
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      agentType: 'AgentType',
      bizType: 'BizType',
      creditQuota: 'CreditQuota',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'string' },
      agentType: 'string',
      bizType: 'string',
      creditQuota: 'number',
      sceneType: 'string',
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

