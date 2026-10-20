// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDoSInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * esa-ddos-b1e0l80ugfeo
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for paging. The value must be greater than or equal to 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: 20. Maximum value: 500. Valid values: any integer from 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance ID of the associated site plan.
   * 
   * @example
   * esa-site-a71k7bw1adf
   */
  siteInstanceId?: string;
  /**
   * @remarks
   * The sort field. By default, instances are sorted by creation time. Valid values:
   * 
   * - **CreateTime**: the creation time.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * @example
   * asc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteInstanceId: 'SiteInstanceId',
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
      siteInstanceId: 'string',
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

