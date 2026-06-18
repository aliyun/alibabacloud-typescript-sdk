// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter for rate plan instances that have a remaining site quota. Valid values:
   * 
   * - **true**: Returns only rate plan instances that have a remaining site quota.
   * 
   * - **false**: Returns all rate plan instances for the user.
   * 
   * @example
   * true
   */
  checkRemainingSiteQuota?: string;
  /**
   * @remarks
   * The ID of the rate plan instance to query.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The default value is **1**. The value must be in the range of **1 to 100,000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  planNameEn?: string;
  planType?: string;
  remainingExpireDays?: number;
  /**
   * @remarks
   * The sort field. By default, results are sorted by creation time. Valid values:
   * 
   * - **CreateTime**: Sorts by creation time.
   * 
   * - **ExpireTime**: Sorts by expiration time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. The default is descending. Valid values:
   * 
   * - **asc**: Sorts in ascending order.
   * 
   * - **desc**: Sorts in descending order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The status of the rate plan instance. Valid values:
   * 
   * - **online**: The instance is in service.
   * 
   * - **offline**: The instance has expired and is unavailable.
   * 
   * - **disable**: The instance is released.
   * 
   * - **overdue**: The instance is overdue.
   * 
   * @example
   * online
   * 
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

