// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySavingsPlansInstanceResponseBodyDataItemsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The allocation status. Valid values:
   * 
   * *   unallocated
   * *   allocated
   * *   beAllocated
   * 
   * @example
   * unallocated
   */
  allocationStatus?: string;
  /**
   * @example
   * savingplan_common_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The currency. Valid values: CNY and USD.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 100.0
   */
  currentPoolValue?: string;
  /**
   * @example
   * 1:Year
   */
  cycle?: string;
  /**
   * @example
   * HOUR
   */
  deductCycleType?: string;
  /**
   * @remarks
   * The time when the instance expires. The time is in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 1663135741039
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The instance family information. For an instance of the Elastic Compute Service (ECS) compute type, the value indicates the ECS instance family or the ECS instance family package.
   * 
   * @example
   * ecs.g6
   */
  instanceFamily?: string;
  /**
   * @remarks
   * The ID of the savings plan instance.
   * 
   * @example
   * spn-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 100.0
   */
  lastBillTotalUsage?: string;
  /**
   * @example
   * 0.8
   */
  lastBillUtilization?: string;
  /**
   * @remarks
   * The payment type. Valid values:
   * 
   * *   total: All Upfront
   * *   half: Partial Upfront
   * *   zero: No Upfront
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The commitment.
   * 
   * @example
   * 1.00
   */
  poolValue?: string;
  /**
   * @remarks
   * The prepaid amount.
   * 
   * @example
   * 8760.00
   */
  prepayFee?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-zhangjiakou-na62-a01
   */
  region?: string;
  /**
   * @example
   * 100.0
   */
  restPoolValue?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose
   * *   ecs: ECS compute
   * 
   * @example
   * ECS
   */
  savingsType?: string;
  /**
   * @remarks
   * The time when the instance takes effect. The time is in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 1663135741039
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   NORMAL: normal
   * *   LIMIT: stopped due to overdue payment
   * *   RELEASE: released
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The details about the tags.
   */
  tags?: QuerySavingsPlansInstanceResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The total amount that is saved.
   * 
   * @example
   * 20.00
   */
  totalSave?: string;
  /**
   * @remarks
   * The total usage.
   * 
   * @example
   * 1.0
   */
  utilization?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      currentPoolValue: 'CurrentPoolValue',
      cycle: 'Cycle',
      deductCycleType: 'DeductCycleType',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      instanceFamily: 'InstanceFamily',
      instanceId: 'InstanceId',
      lastBillTotalUsage: 'LastBillTotalUsage',
      lastBillUtilization: 'LastBillUtilization',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      prepayFee: 'PrepayFee',
      region: 'Region',
      restPoolValue: 'RestPoolValue',
      savingsType: 'SavingsType',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      status: 'Status',
      tags: 'Tags',
      totalSave: 'TotalSave',
      utilization: 'Utilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      commodityCode: 'string',
      currency: 'string',
      currentPoolValue: 'string',
      cycle: 'string',
      deductCycleType: 'string',
      endTime: 'string',
      endTimestamp: 'number',
      instanceFamily: 'string',
      instanceId: 'string',
      lastBillTotalUsage: 'string',
      lastBillUtilization: 'string',
      payMode: 'string',
      poolValue: 'string',
      prepayFee: 'string',
      region: 'string',
      restPoolValue: 'string',
      savingsType: 'string',
      startTime: 'string',
      startTimestamp: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItemsTags },
      totalSave: 'string',
      utilization: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details about the instances.
   */
  items?: QuerySavingsPlansInstanceResponseBodyDataItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItems },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class QuerySavingsPlansInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: QuerySavingsPlansInstanceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61293E7A-3406-4447-8620-EC88B0AA66AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySavingsPlansInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
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

