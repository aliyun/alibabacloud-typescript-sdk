// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesRequest extends $dara.Model {
  checkRemainingSiteQuota?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  planNameEn?: string;
  planType?: string;
  remainingExpireDays?: number;
  sortBy?: string;
  sortOrder?: string;
  /**
   * **if can be null:**
   * false
   */
  status?: string;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      checkRemainingSiteQuota: 'CheckRemainingSiteQuota',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planNameEn: 'PlanNameEn',
      planType: 'PlanType',
      remainingExpireDays: 'RemainingExpireDays',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRemainingSiteQuota: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planNameEn: 'string',
      planType: 'string',
      remainingExpireDays: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
      subscribeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

