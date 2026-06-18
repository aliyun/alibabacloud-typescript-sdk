// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionSeatDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the caller account that initiates this call.
   * 
   * @example
   * acc_123456789
   */
  callerUacAccountId?: string;
  /**
   * @remarks
   * The product namespace ID. For the TokenPlan product, this field is fixed to namespace-1.
   * 
   * @example
   * namespace-1
   */
  namespaceId?: string;
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
   * The seat assignment status filter. Set to true for assigned seats, false for unassigned seats, or null for all seats.
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
   * - standard
   * - pro
   * - max.
   * 
   * @example
   * standard
   */
  seatType?: string;
  /**
   * @remarks
   * The list of seat statuses used for filtering.
   */
  statusList?: string[];
  /**
   * @remarks
   * The string form of StatusList.
   * 
   * @example
   * [\\"CREATING\\",\\"NORMAL\\"]
   */
  statusListStr?: string;
  static names(): { [key: string]: string } {
    return {
      callerUacAccountId: 'CallerUacAccountId',
      namespaceId: 'NamespaceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryAssigned: 'QueryAssigned',
      seatId: 'SeatId',
      seatType: 'SeatType',
      statusList: 'StatusList',
      statusListStr: 'StatusListStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUacAccountId: 'string',
      namespaceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryAssigned: 'boolean',
      seatId: 'string',
      seatType: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      statusListStr: 'string',
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

