// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenClawInstanceQuotaVO extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account UID.
   */
  aliyunAccountUid?: string;
  /**
   * @remarks
   * The total quota for deep research calls.
   */
  deepResearchCallQuota?: string;
  /**
   * @remarks
   * The number of deep research calls used.
   */
  deepResearchCallUsed?: string;
  /**
   * @remarks
   * The instance creation time.
   */
  instanceGmtCreate?: string;
  /**
   * @remarks
   * The instance ID.
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   */
  instanceName?: string;
  /**
   * @remarks
   * The timestamp of the last metering event.
   */
  lastMeteringTime?: string;
  /**
   * @remarks
   * The total quota for model calls.
   */
  modelCallQuota?: string;
  /**
   * @remarks
   * The number of model calls used.
   */
  modelCallUsed?: string;
  /**
   * @remarks
   * The day of the month on which the quota refreshes.
   */
  refreshDay?: string;
  /**
   * @remarks
   * The total quota for skill plan calls.
   */
  skillPlanCallQuota?: string;
  /**
   * @remarks
   * The number of skill plan calls used.
   */
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

