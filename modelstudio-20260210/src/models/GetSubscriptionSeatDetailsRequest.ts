// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionSeatDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance code of the seat.
   * 
   * @example
   * subs_xxxxx
   */
  instanceCode?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: a positive integer.
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
   * Specifies whether to filter by seat assignment status. Valid values:
   * 
   * - true: Assigned.
   * - false: Unassigned.
   * - null: All.
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
   * The seat type. Valid values:
   * 
   * - standard: Standard seat.
   * - pro: Pro seat.
   * - max: Premium seat.
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
      instanceCode: 'InstanceCode',
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
      instanceCode: 'string',
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

