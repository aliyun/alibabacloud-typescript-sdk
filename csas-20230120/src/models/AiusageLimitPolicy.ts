// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIUsageLimitPolicy extends $dara.Model {
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  limitPolicyId?: string;
  limitValue?: number;
  metricType?: string;
  name?: string;
  priority?: number;
  resetPeriod?: string;
  serviceIds?: string[];
  status?: string;
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      limitPolicyId: 'LimitPolicyId',
      limitValue: 'LimitValue',
      metricType: 'MetricType',
      name: 'Name',
      priority: 'Priority',
      resetPeriod: 'ResetPeriod',
      serviceIds: 'ServiceIds',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      limitPolicyId: 'string',
      limitValue: 'number',
      metricType: 'string',
      name: 'string',
      priority: 'number',
      resetPeriod: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

