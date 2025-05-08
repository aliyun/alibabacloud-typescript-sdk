// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheReserveInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Range: **1~500**, default is **500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The criterion by which you want to sort the queried instances. Valid values:
   * 
   * *   **ExpireTime**
   * *   **CreateTime**
   * 
   * @example
   * ExpireTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The order by which you want to sort the queried instances. Valid values:
   * 
   * *   **asc**
   * *   **desc**
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **online**: The instance is in service.
   * *   **offline**: The instance has expired within an allowable period. In this state, it is unavailable.
   * *   **disable**: The instance has been released.
   * *   **overdue**: The instance has been stopped due to overdue payments.
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

