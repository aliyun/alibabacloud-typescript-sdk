// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter plan instances that have remaining site quotas. Valid values:
   * 
   * - **true**: Filters plan instances that have remaining site quotas.
   * - **false**: Queries all plan instances under the user.
   * 
   * @example
   * true
   */
  checkRemainingSiteQuota?: string;
  /**
   * @remarks
   * Instance ID of the plan instance. You can obtain instance ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  isShared?: boolean;
  /**
   * @remarks
   * The page number Settings for paging in a paged query. Default value: **1**. Valid values: **1** to **100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging in a paged query. Valid values: 1 to 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the plan in English.
   * 
   * @example
   * entranceplan
   */
  planNameEn?: string;
  /**
   * @remarks
   * The type of the plan. Valid values:
   * 
   * - normal: Fixed plan.
   * - enterprise: Enterprise plan.
   * 
   * @example
   * enterprise
   */
  planType?: string;
  /**
   * @remarks
   * Queries plan instances whose remaining validity period is within the specified number of days. The value must be a positive integer. Unit: days.
   * 
   * @example
   * 30
   */
  remainingExpireDays?: number;
  resourceOwner?: number;
  /**
   * @remarks
   * The sort field. By default, the instances are sorted by creation time. Valid values:
   * 
   * - **CreateTime**: The creation time.
   * - **ExpireTime**: The expiration time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. By default, the instances are sorted in descending order. Valid values:
   * 
   * - **asc**: Ascending order.
   * - **desc**: Descending order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status of the plan. Valid values:
   * - **online**: The normal service status.
   * - **offline**: The instance has expired but not overdue, and is in an inactive state.
   * - **disable**: The released status.
   * - **overdue**: The overdue payment status.
   * 
   * @example
   * online
   * 
   * **if can be null:**
   * false
   */
  status?: string;
  /**
   * @remarks
   * The subscription type of the plan. Valid values:
   * 
   * - entranceplan: Free Edition (Chinese mainland).
   * - entranceplan_intl: Free Edition (International).
   * - basicplan: Basic Edition.
   * - standardplan: Standard Edition.
   * - advancedplan: Advanced Edition.
   * - enterpriseplan: Enterprise Edition.
   * 
   * @example
   * basicplan
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      checkRemainingSiteQuota: 'CheckRemainingSiteQuota',
      instanceId: 'InstanceId',
      isShared: 'IsShared',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planNameEn: 'PlanNameEn',
      planType: 'PlanType',
      remainingExpireDays: 'RemainingExpireDays',
      resourceOwner: 'ResourceOwner',
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
      isShared: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      planNameEn: 'string',
      planType: 'string',
      remainingExpireDays: 'number',
      resourceOwner: 'number',
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

