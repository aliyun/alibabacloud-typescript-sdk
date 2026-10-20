// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBotInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain the ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number Settings for paging in a paged query. Default value: 1. Valid values: 1 to 100000.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. By default, instances are sorted by creation time. Valid values:
   * 
   * - **CreateTime**: creation time.
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
   * - **online**: normal.
   * - **offline**: expired but not overdue, and unavailable.
   * - **disable**: released.
   * - **overdue**: overdue payment.
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

