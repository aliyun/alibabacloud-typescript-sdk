// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for querying the historical prices of spot instances. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Default value: null, which indicates the current time.
   * 
   * @example
   * 2024-12-30T09:36:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sort order. Default value: asc. Valid values:
   * - desc: descending order.
   * - asc: ascending order.
   * 
   * This parameter takes effect only when you query the historical prices of Lingjun instance types.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: ***1***. This parameter takes effect only when you query the historical prices of Lingjun instance types.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. This parameter takes effect only when you query the historical prices of Lingjun instance types.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Default value: GmtCreatedTime. Valid values:
   * 
   * - GmtCreatedTime
   * 
   * This parameter takes effect only when you query the historical prices of Lingjun instance types.
   * 
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Note that only ECS instance types support Settings for the protection period of spot instances. Default value: 0. Valid values:
   * 
   * - 1: After the spot instance is created, Alibaba Cloud ensures that the instance runs for 1 hour without automatic release. After 1 hour, the system automatically compares the bid price with the marketplace price and checks resource inventory to determine whether to retain or revoke the instance.
   * - 0: After the spot instance is created, Alibaba Cloud does not guarantee that the instance runs for 1 hour. The system automatically compares the bid price with the marketplace price and checks resource inventory to determine whether to retain or revoke the instance.
   * 
   * @example
   * 0
   */
  spotDuration?: number;
  /**
   * @remarks
   * The start time for querying the historical prices of spot instances. The maximum value cannot exceed 7 days before the specified end time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Default value: null, which indicates 3 days before the end time.
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

