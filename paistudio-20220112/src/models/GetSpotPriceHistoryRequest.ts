// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for querying historical spot instance prices. Specify the time in ISO 8601 format using UTC+0, as yyyy-MM-ddTHH:mm:ssZ. Default value: empty. An empty value means the current time.
   * 
   * @example
   * 2024-12-30T09:36:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sort order. Default value: asc. Valid values:
   * 
   * - desc: descending order.
   * 
   * - asc: ascending order.
   * 
   * This parameter applies only when you query historical prices for Lingjun instance types.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the current page. Default value: ***1***. This parameter applies only when you query historical prices for Lingjun instance types.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. This parameter applies only when you query historical prices for Lingjun instance types.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort by. Default value: GmtCreatedTime. Valid values:
   * 
   * - GmtCreatedTime
   * 
   * This parameter applies only when you query historical prices for Lingjun instance types.
   * 
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The retention period for the spot instance, in hours. Note that only ECS instance types support this parameter. Default value: 0. Valid values:
   * 
   * - 1: Alibaba Cloud guarantees that the instance runs for at least one hour after creation. After one hour, the system compares your bid price with the current market price and checks resource inventory to decide whether to retain or revoke the instance.
   * 
   * - 0: Alibaba Cloud does not guarantee one-hour runtime. The system compares your bid price with the current market price and checks resource inventory to decide whether to retain or revoke the instance.
   * 
   * @example
   * 0
   */
  spotDuration?: number;
  /**
   * @remarks
   * The start time for querying historical spot instance prices. This time must be no more than seven days before the end time. Specify the time in ISO 8601 format using UTC+0, as yyyy-MM-ddTHH:mm:ssZ. Default value: empty. An empty value means three days before the end time.
   * 
   * @example
   * 2024-12-26T09:36:46Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      spotDuration: 'SpotDuration',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      spotDuration: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

