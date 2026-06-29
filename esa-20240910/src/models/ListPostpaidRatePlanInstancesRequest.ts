// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPostpaidRatePlanInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check for remaining site quota. Valid values:
   * 
   * - true: Queries instances that have remaining site quota.
   * 
   * - false: Does not filter by this condition.
   * 
   * @example
   * true
   */
  checkRemainingSiteQuota?: string;
  /**
   * @remarks
   * The instance ID. Use this parameter to query a specific instance.
   * 
   * @example
   * sp-dps-xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for paging. The value must be greater than or equal to 1.
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
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
   * 
   * - CreateTime: sorts by creation time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   *  * asc: ascending order
   * 
   *  * desc: descending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   *  * online: Normal.
   * 
   *  * overdue: Overdue payment.
   * 
   *  * disable: Released.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the instance has purchased additional bot or DDoS protection.
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

