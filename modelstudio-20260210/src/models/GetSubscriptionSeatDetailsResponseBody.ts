// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionSeatDetailsResponseBodyDataItemsEquityList extends $dara.Model {
  /**
   * @remarks
   * The end time of the current cycle, in milliseconds.
   * 
   * @example
   * 1755273600
   */
  cycleEndTime?: number;
  /**
   * @remarks
   * The equity code (subscription code). This does not need to be consumed in the CREDITS scenario.
   * 
   * @example
   * 123456
   */
  cycleInstanceId?: string;
  /**
   * @remarks
   * The start time of the current cycle, in milliseconds.
   * 
   * @example
   * 1775232000
   */
  cycleStartTime?: number;
  /**
   * @remarks
   * The remaining quota of the current cycle.
   * 
   * @example
   * 40.00000000
   */
  cycleSurplusValue?: number;
  /**
   * @remarks
   * The total quota of the current cycle.
   * 
   * @example
   * 100.00000000
   */
  cycleTotalValue?: number;
  /**
   * @remarks
   * The sequential version of the current cycle.
   * 
   * @example
   * 1
   */
  cycleVersion?: number;
  /**
   * @remarks
   * The equity type, such as CREDITS, SPN, or resource plan.
   * 
   * @example
   * CREDITS
   */
  equityType?: string;
  static names(): { [key: string]: string } {
    return {
      cycleEndTime: 'CycleEndTime',
      cycleInstanceId: 'CycleInstanceId',
      cycleStartTime: 'CycleStartTime',
      cycleSurplusValue: 'CycleSurplusValue',
      cycleTotalValue: 'CycleTotalValue',
      cycleVersion: 'CycleVersion',
      equityType: 'EquityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleEndTime: 'number',
      cycleInstanceId: 'string',
      cycleStartTime: 'number',
      cycleSurplusValue: 'number',
      cycleTotalValue: 'number',
      cycleVersion: 'number',
      equityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionSeatDetailsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The email address of the member account.
   * 
   * @example
   * test@email.com
   */
  accountEmail?: string;
  /**
   * @remarks
   * The ID of the attached member account.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member account.
   * 
   * @example
   * ExampleName
   */
  accountName?: string;
  /**
   * @remarks
   * The assignment status. Valid values:
   * 
   * - ASSIGNED
   * - UNASSIGNED.
   * 
   * @example
   * ASSIGNED
   */
  assignedStatus?: string;
  /**
   * @remarks
   * The expiration time of the seat.
   * 
   * @example
   * 1781422733
   */
  endTime?: number;
  /**
   * @remarks
   * The currently active equity instances. For the TokenPlan product, this list contains only one active equity instance.
   */
  equityList?: GetSubscriptionSeatDetailsResponseBodyDataItemsEquityList[];
  /**
   * @remarks
   * The instance code of the seat.
   * 
   * @example
   * subs-1234567
   */
  instanceCode?: string;
  /**
   * @remarks
   * The seat ID.
   * 
   * @example
   * seat_123456
   */
  seatId?: string;
  /**
   * @remarks
   * The seat type. Valid values: 
   * 
   * - standard
   * - pro
   * - max.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The start time of the seat.
   * 
   * @example
   * 1781422733
   */
  startTime?: number;
  /**
   * @remarks
   * The seat status. Valid values:
   * - CREATING: being created.
   * - NORMAL: active.
   * - LIMIT: restricted due to overdue payment.
   * - RELEASE: released upon expiration.
   * - STOP: stopped upon expiration.
   * - REFUNDED: refunded.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountEmail: 'AccountEmail',
      accountId: 'AccountId',
      accountName: 'AccountName',
      assignedStatus: 'AssignedStatus',
      endTime: 'EndTime',
      equityList: 'EquityList',
      instanceCode: 'InstanceCode',
      seatId: 'SeatId',
      specType: 'SpecType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountEmail: 'string',
      accountId: 'string',
      accountName: 'string',
      assignedStatus: 'string',
      endTime: 'number',
      equityList: { 'type': 'array', 'itemType': GetSubscriptionSeatDetailsResponseBodyDataItemsEquityList },
      instanceCode: 'string',
      seatId: 'string',
      specType: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.equityList)) {
      $dara.Model.validateArray(this.equityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionSeatDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data items.
   */
  items?: GetSubscriptionSeatDetailsResponseBodyDataItems[];
  /**
   * @remarks
   * The page number. The value is greater than 0 and does not exceed the maximum value of the Integer data type.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of seats.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetSubscriptionSeatDetailsResponseBodyDataItems },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionSeatDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetSubscriptionSeatDetailsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSubscriptionSeatDetailsResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

