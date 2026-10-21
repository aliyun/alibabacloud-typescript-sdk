// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentServiceOrderVO extends $dara.Model {
  agentService?: string;
  deepResearchQuota?: number;
  deepResearchUsed?: number;
  expireTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  modelCallQuota?: number;
  modelCallUsed?: number;
  orderInstanceId?: string;
  serviceNum?: number;
  skillPlanCallQuota?: number;
  skillPlanCallUsed?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentService: 'AgentService',
      deepResearchQuota: 'DeepResearchQuota',
      deepResearchUsed: 'DeepResearchUsed',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modelCallQuota: 'ModelCallQuota',
      modelCallUsed: 'ModelCallUsed',
      orderInstanceId: 'OrderInstanceId',
      serviceNum: 'ServiceNum',
      skillPlanCallQuota: 'SkillPlanCallQuota',
      skillPlanCallUsed: 'SkillPlanCallUsed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentService: 'string',
      deepResearchQuota: 'number',
      deepResearchUsed: 'number',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modelCallQuota: 'number',
      modelCallUsed: 'number',
      orderInstanceId: 'string',
      serviceNum: 'number',
      skillPlanCallQuota: 'number',
      skillPlanCallUsed: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

