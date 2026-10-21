// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentServiceOrderSummaryVO extends $dara.Model {
  agentService?: string;
  deepResearchQuota?: number;
  modelCallQuota?: number;
  orderCount?: number;
  serviceNumTotal?: number;
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

