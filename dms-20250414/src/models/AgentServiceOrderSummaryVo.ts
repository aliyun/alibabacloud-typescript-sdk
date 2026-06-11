// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentServiceOrderSummaryVO extends $dara.Model {
  /**
   * @remarks
   * The name of the agent service.
   */
  agentService?: string;
  /**
   * @remarks
   * The deep research quota for the service.
   */
  deepResearchQuota?: number;
  /**
   * @remarks
   * The model call quota for the service.
   */
  modelCallQuota?: number;
  /**
   * @remarks
   * The order count for the agent service.
   */
  orderCount?: number;
  /**
   * @remarks
   * The total number of services.
   */
  serviceNumTotal?: number;
  /**
   * @remarks
   * The skill plan call quota for the service.
   */
  skillPlanCallQuota?: number;
  static names(): { [key: string]: string } {
    return {
      agentService: 'AgentService',
      deepResearchQuota: 'DeepResearchQuota',
      modelCallQuota: 'ModelCallQuota',
      orderCount: 'OrderCount',
      serviceNumTotal: 'ServiceNumTotal',
      skillPlanCallQuota: 'SkillPlanCallQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentService: 'string',
      deepResearchQuota: 'number',
      modelCallQuota: 'number',
      orderCount: 'number',
      serviceNumTotal: 'number',
      skillPlanCallQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

