// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentServiceOrderVO extends $dara.Model {
  /**
   * @remarks
   * The agent service.
   */
  agentService?: string;
  /**
   * @remarks
   * The deep research quota.
   */
  deepResearchQuota?: number;
  /**
   * @remarks
   * The quantity of deep research used.
   */
  deepResearchUsed?: number;
  /**
   * @remarks
   * The service expiration time, specified in UTC.
   */
  expireTime?: string;
  /**
   * @remarks
   * The order creation time, specified in UTC.
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The order modification time, specified in UTC.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The model call quota.
   */
  modelCallQuota?: number;
  /**
   * @remarks
   * The number of model calls used.
   */
  modelCallUsed?: number;
  /**
   * @remarks
   * The order instance ID.
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The number of services.
   */
  serviceNum?: number;
  /**
   * @remarks
   * The skill plan call quota.
   */
  skillPlanCallQuota?: number;
  /**
   * @remarks
   * The number of skill plan calls used.
   */
  skillPlanCallUsed?: number;
  /**
   * @remarks
   * The order status.
   */
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

