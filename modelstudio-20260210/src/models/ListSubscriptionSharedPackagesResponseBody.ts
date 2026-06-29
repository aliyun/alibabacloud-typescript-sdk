// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionSharedPackagesResponseBodyDataItemsEquityList extends $dara.Model {
  /**
   * @remarks
   * The end time of the current cycle, in milliseconds.
   * 
   * @example
   * 1756310400
   */
  cycleEndTime?: number;
  /**
   * @remarks
   * The equity code (subscription code). This is not required for consumption in the credits scenario.
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

export class ListSubscriptionSharedPackagesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The currently active equity instances.
   */
  equityList?: ListSubscriptionSharedPackagesResponseBodyDataItemsEquityList[];
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
   * The seat status. Valid values:
   * 
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
      equityList: 'EquityList',
      instanceCode: 'InstanceCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equityList: { 'type': 'array', 'itemType': ListSubscriptionSharedPackagesResponseBodyDataItemsEquityList },
      instanceCode: 'string',
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

export class ListSubscriptionSharedPackagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data entries.
   */
  items?: ListSubscriptionSharedPackagesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.
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
      items: { 'type': 'array', 'itemType': ListSubscriptionSharedPackagesResponseBodyDataItems },
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

export class ListSubscriptionSharedPackagesResponseBody extends $dara.Model {
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
  data?: ListSubscriptionSharedPackagesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: The call is successful.
   * - false: The call failed.
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
      data: ListSubscriptionSharedPackagesResponseBodyData,
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

