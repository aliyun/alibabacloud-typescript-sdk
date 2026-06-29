// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter plan instances that have remaining site quota. Valid values:
   * 
   * - **true**: Filters plan instances that have remaining site quota.
   * - **false**: Queries all plan instances under the user.
   * 
   * @example
   * true
   */
  checkRemainingSiteQuota?: string;
  /**
   * @remarks
   * The plan instance ID. You can obtain the ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return in a paged query. Default value: **1**. Valid values: **1** to **100000**. Settings for paging take effect only when this parameter is specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 500. This parameter is used for paging.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The plan name in English.
   * 
   * @example
   * entranceplan
   */
  planNameEn?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * - normal: fixed-version plan
   * - enterprise: Enterprise Edition plan.
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
  /**
   * @remarks
   * The field by which to sort the results. By default, results are sorted by purchase time. Valid values:
   * 
   * - **CreateTime**: purchase time.
   * - **ExpireTime**: expiration time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
   * 
   * - **asc**: ascending order.
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: The plan instance is in normal service.
   * - **offline**: The plan instance has expired but has not exceeded the grace period and is not active.
   * - **disable**: The plan instance has been released.
   * - **overdue**: The plan instance has an overdue payment.
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
   * The plan subscription type. Valid values:
   * 
   * - entranceplan: Free Edition (Chinese mainland)
   * - entranceplan_intl: Free Edition (International)
   * - basicplan: Basic Edition
   * - standardplan: Standard Edition
   * - advancedplan: Premium Edition
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

