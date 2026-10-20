// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheReserveInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 500**. Default value: **500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method. Valid values:
   * - **ExpireTime**: Sort by expiration time.
   * - **CreateTime**: Sort by creation time.
   * 
   * @example
   * ExpireTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * - **asc**: Ascending order.
   * - **desc**: Descending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status of the cache reservation instance. Valid values:
   * - **online**: Normal service status.
   * - **offline**: Expired but not overdue, and in an inactive state.
   * - **disable**: Released.
   * - **overdue**: Stopped due to an overdue payment.
   * 
   * @example
   * online
   * 
   * **if can be null:**
   * false
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
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

