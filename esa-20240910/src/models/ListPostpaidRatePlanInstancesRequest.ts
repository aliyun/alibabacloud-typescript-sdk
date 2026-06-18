// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidRatePlanInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return only instances that have remaining site quota. Valid values:
   * 
   * - `true`: Returns only instances with remaining site quota.
   * 
   * - `false`: Returns all instances, regardless of site quota.
   * 
   * @example
   * true
   */
  checkRemainingSiteQuota?: string;
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * @example
   * sp-dps-xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 500.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort the results by. Valid value:
   * 
   * - `CreateTime`: Sorts by creation time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `asc`: ascending
   * 
   * - `desc`: descending
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - `online`: The instance is running.
   * 
   * - `overdue`: The payment for the instance is overdue.
   * 
   * - `disable`: The instance is released.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The type of add-on service to filter by, such as `bot` or `ddos`.
   * 
   * @example
   * bot
   */
  unrelatedType?: string;
  static names(): { [key: string]: string } {
    return {
      checkRemainingSiteQuota: 'CheckRemainingSiteQuota',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
      unrelatedType: 'UnrelatedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRemainingSiteQuota: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
      unrelatedType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

