// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySavingsPlansDeductLogResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The billable item for which the fee is deducted.
   */
  billModule?: string;
  billingCycle?: string;
  billingOfficialPrice?: string;
  /**
   * @remarks
   * The service for which the fee is deducted.
   */
  deductCommodity?: string;
  /**
   * @remarks
   * The deducted amount.
   * 
   * @example
   * 0.52
   */
  deductFee?: string;
  /**
   * @remarks
   * The ID of the instance for which the fee is deducted.
   * 
   * @example
   * i-XXXXXXXXX
   */
  deductInstanceId?: string;
  /**
   * @remarks
   * The deduction rate.
   * 
   * @example
   * 1.0
   */
  deductRate?: string;
  deductedOfficialPrice?: string;
  /**
   * @remarks
   * The discount used for the current deduction.
   * 
   * @example
   * 0.069
   */
  discountRate?: string;
  /**
   * @remarks
   * The end of the billing cycle for which the fee is deducted.
   * 
   * @example
   * 2020-12-01 01:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the savings plan instance.
   * 
   * @example
   * spn-xxxxxxx
   */
  instanceId?: string;
  instanceSpec?: string;
  instanceTypeFamily?: string;
  /**
   * @example
   * 1906589291020438
   */
  ownerId?: number;
  region?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose
   * *   ecs: ECS compute
   * 
   * @example
   * ecs
   */
  savingsType?: string;
  /**
   * @remarks
   * The beginning of the billing cycle for which the fee is deducted. The time is in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-12-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1906589291020438
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      billModule: 'BillModule',
      billingCycle: 'BillingCycle',
      billingOfficialPrice: 'BillingOfficialPrice',
      deductCommodity: 'DeductCommodity',
      deductFee: 'DeductFee',
      deductInstanceId: 'DeductInstanceId',
      deductRate: 'DeductRate',
      deductedOfficialPrice: 'DeductedOfficialPrice',
      discountRate: 'DiscountRate',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      instanceTypeFamily: 'InstanceTypeFamily',
      ownerId: 'OwnerId',
      region: 'Region',
      savingsType: 'SavingsType',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModule: 'string',
      billingCycle: 'string',
      billingOfficialPrice: 'string',
      deductCommodity: 'string',
      deductFee: 'string',
      deductInstanceId: 'string',
      deductRate: 'string',
      deductedOfficialPrice: 'string',
      discountRate: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      instanceTypeFamily: 'string',
      ownerId: 'number',
      region: 'string',
      savingsType: 'string',
      startTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deduction details.
   */
  items?: QuerySavingsPlansDeductLogResponseBodyDataItems[];
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
   * 20
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
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDeductLogResponseBodyDataItems },
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

export class QuerySavingsPlansDeductLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The return data.
   */
  data?: QuerySavingsPlansDeductLogResponseBodyData;
  /**
   * @remarks
   * The message returned.
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
      data: QuerySavingsPlansDeductLogResponseBodyData,
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

