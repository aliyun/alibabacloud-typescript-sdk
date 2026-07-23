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
   * The plan instance ID. You can obtain this value by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  isShared?: boolean;
  /**
   * @remarks
   * The page number settings for paging. Default value: **1**. Valid values: **1 to 100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The plan name (English).
   * 
   * @example
   * entranceplan
   */
  planNameEn?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * - normal: fixed edition plan
   * - enterprise: enterprise edition plan
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
   * The sort field. By default, results are sorted by purchase time. Valid values:
   * 
   * - **CreateTime**: Purchase time.
   * - **ExpireTime**: Expiration time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
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
   * The instance status. Valid values:
   * - **online**: Normal service status.
   * - **offline**: Expired but not overdue, in an inactive state.
   * - **disable**: Released.
   * - **overdue**: Overdue payment.
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
   * - Free Edition (Chinese mainland): entranceplan
   * - Free Edition (International): entranceplan_intl
   * - Basic Edition: basicplan
   * - Standard Edition: standardplan
   * - Premium Edition: advancedplan
   * - Enterprise Edition: enterpriseplan
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

