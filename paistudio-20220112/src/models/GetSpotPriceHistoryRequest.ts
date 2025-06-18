// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @example
   * 2024-12-30T09:36:46Z
   */
  endTime?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @example
   * 0
   */
  spotDuration?: number;
  /**
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

