// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionSeatDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: positive integers.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The filter for the seat assignment status. Valid values:
   * 
   * - true: assigned
   * - false: unassigned
   * - null: all
   * 
   * @example
   * true
   */
  queryAssigned?: boolean;
  /**
   * @remarks
   * The seat ID.
   * 
   * @example
   * seat-123456
   */
  seatId?: string;
  /**
   * @remarks
   * The seat type (specType). Valid values:
   * 
   * - standard: standard seat
   * - pro: advanced seat
   * - max: premium seat
   * 
   * @example
   * standard
   */
  seatType?: string;
  /**
   * @remarks
   * The list of seat statuses for filtering.
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryAssigned: 'QueryAssigned',
      seatId: 'SeatId',
      seatType: 'SeatType',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      queryAssigned: 'boolean',
      seatId: 'string',
      seatType: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

