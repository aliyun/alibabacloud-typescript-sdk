// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenClawInstanceQuotaVO extends $dara.Model {
  aliyunAccountUid?: string;
  deepResearchCallQuota?: string;
  deepResearchCallUsed?: string;
  instanceGmtCreate?: string;
  instanceId?: string;
  instanceName?: string;
  lastMeteringTime?: string;
  modelCallQuota?: string;
  modelCallUsed?: string;
  refreshDay?: string;
  skillPlanCallQuota?: string;
  skillPlanCallUsed?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunAccountUid: 'AliyunAccountUid',
      deepResearchCallQuota: 'DeepResearchCallQuota',
      deepResearchCallUsed: 'DeepResearchCallUsed',
      instanceGmtCreate: 'InstanceGmtCreate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lastMeteringTime: 'LastMeteringTime',
      modelCallQuota: 'ModelCallQuota',
      modelCallUsed: 'ModelCallUsed',
      refreshDay: 'RefreshDay',
      skillPlanCallQuota: 'SkillPlanCallQuota',
      skillPlanCallUsed: 'SkillPlanCallUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAccountUid: 'string',
      deepResearchCallQuota: 'string',
      deepResearchCallUsed: 'string',
      instanceGmtCreate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lastMeteringTime: 'string',
      modelCallQuota: 'string',
      modelCallUsed: 'string',
      refreshDay: 'string',
      skillPlanCallQuota: 'string',
      skillPlanCallUsed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

