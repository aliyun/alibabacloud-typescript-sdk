// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBotInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for the paged query. Settings this parameter for paging. Default value: 1. Valid values: 1 to 100000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the paged query. This parameter is used for paging. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results. By default, the results are sorted by purchase time. Valid values:
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
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **online**: The instance is running normally.
   * - **offline**: The instance has expired but has not exceeded the retention period and is unavailable.
   * - **disable**: The instance has been released.
   * - **overdue**: The instance has an overdue payment.
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

